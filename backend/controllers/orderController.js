import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Razorpay from 'razorpay';
import crypto from 'crypto-js';
import uniqid from 'uniqid';

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // RAZORPAY KEY
  key_secret: process.env.RAZORPAY_SECRET, // RAZORPAY SECRET
});

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    deliveryCharge,
    totalPrice,
    promotionPrice,
    orderTotalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      deliveryCharge,
      totalPrice,
      promotionPrice,
      orderTotalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name phone email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Create payment order
// @route   POST /api/orders/:id/payment/orders
// @access  Private with Basic Auth
const createPaymentOrder = asyncHandler(async (req, res) => {
  const myOrder = await Order.findById(req.params.id);

  if (myOrder) {
    const options = {
      amount: myOrder.orderTotalPrice * 100,
      currency: 'INR',
      receipt: uniqid(),
    };

    const response = await razorpay.orders.create(options);

    if (!response) return res.status(500).send('Some error occured');

    res.json(response);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/payment/success
// @access  Private with Basic Auth
const updateOrderToPaid = asyncHandler(async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    // Creating our own digest, The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest('hex');

    // Comparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' });

    // THE PAYMENT IS LEGIT & VERIFIED
    // UPDATE ORDER
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      };
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

export {
  addOrderItems,
  getOrderById,
  createPaymentOrder,
  updateOrderToPaid,
  getMyOrders,
};
