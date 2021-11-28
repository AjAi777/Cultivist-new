import express from 'express';
const router = express.Router();
import { getTrees, getTreeById } from '../controllers/productController.js';

router.route('/').get(getTrees);
router.route('/:id').get(getTreeById);

export default router;
