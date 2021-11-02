import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  createPaymentOrder,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/payment/orders').post(createPaymentOrder);
router.route('/:id/payment/success').put(updateOrderToPaid);

export default router;
