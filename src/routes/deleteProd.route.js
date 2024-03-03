import { Router } from "express";
import { deleteProdCart } from "../controllers/cart.controller.js";

const router = Router();

router.route('/delete-product').post(deleteProdCart)

export default router;