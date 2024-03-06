import { getCategoryProd, getProduct } from "../controllers/product.controller.js";
import {Router} from 'express';

const router = Router();

router.route('/products').get(getProduct).post(getCategoryProd);

export default router;
