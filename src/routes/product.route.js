import { getProduct } from "../controllers/product.controller.js";
import {Router} from 'express';

const router = Router();

router.route('/products').get(getProduct);

export default router;
