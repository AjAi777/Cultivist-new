import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Razorpay from 'razorpay';
import CryptoJS from 'crypto-js';
import uniqid from 'uniqid';

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // RAZORPAY KEY
  key_secret: process.env.RAZORPAY_SECRET, // RAZORPAY SECRET
});

// @desc    Create payment order
// @route   POST /orders/:id/payment/orders
// @access  Private with Razorpay Basic Auth
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

// @desc    Create payment verification
// @route   POST /orders/:id/payment/success
// @access  Private with Razorpay Basic Auth
const createPaymentVerification = asyncHandler(async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    // Creating our own digest, The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    var hmac = CryptoJS.algo.HMAC.create(
      CryptoJS.algo.SHA256,
      process.env.RAZORPAY_SECRET
    );
    hmac.update(`${orderCreationId}|${razorpayPaymentId}`);
    var hash = hmac.finalize('hex');

    // Comparing our digest with the actual signature
    if (hash !== razorpaySignature) {
      return res.status(400).json({ msg: 'Transaction not legit!' });
    }
    // THE PAYMENT IS LEGIT & VERIFIED
    // UPDATE ORDER
    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/paid
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

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
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export { createPaymentOrder, createPaymentVerification, updateOrderToPaid };
