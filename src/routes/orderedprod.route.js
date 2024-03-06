import { Router } from "express";
import { userViseOrder } from "../controllers/order.controller.js";

const router = Router();
router.route('/ordered-products').post(userViseOrder);

export default router;