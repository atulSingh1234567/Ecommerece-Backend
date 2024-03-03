import express from 'express';
import { addToCart, getProdCart } from '../controllers/cart.controller.js';
const router = express.Router();

router.route('/cart').get(getProdCart).post(addToCart)

export default router;