import express from 'express';
const router = express.Router();
import {
  createPaymentOrder,
  createPaymentVerification,
  updateOrderToPaid,
} from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/:id/payment/orders').post(createPaymentOrder);
router.route('/:id/payment/success').post(createPaymentVerification);
router.route('/:id/paid').put(protect, updateOrderToPaid);

export default router;
