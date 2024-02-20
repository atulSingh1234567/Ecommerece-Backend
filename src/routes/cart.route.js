import {Router} from 'express';
import { getProdCart,addToCart } from '../controllers/cart.controller.js';

const router = Router();

router.route('/cart').get(getProdCart).post(addToCart)

export default router