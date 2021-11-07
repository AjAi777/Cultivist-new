import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  createPaymentOrder,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/payment/orders').post(createPaymentOrder);
router.route('/:id/payment/success').put(protect, updateOrderToPaid);

export default router;
