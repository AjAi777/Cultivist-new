import express from 'express';
const router = express.Router();
import {
  createPaymentOrder,
  createPaymentVerification,
} from '../controllers/paymentController.js';

router.route('/:id/payment/orders').post(createPaymentOrder);
router.route('/:id/payment/success').post(createPaymentVerification);

export default router;