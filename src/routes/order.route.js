import {Router} from 'express'
import { orderMadeTill, userOrder } from '../controllers/order.controller.js';
const router = Router();

router.route('/order').post(userOrder).get(orderMadeTill);

export default router;