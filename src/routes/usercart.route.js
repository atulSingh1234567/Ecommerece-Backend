import { Router } from "express";
import { getUsersCart } from "../controllers/cart.controller.js";

const router = Router();

router.route('/getcartitem').get((req,res)=>{res.send("inside getcartitem")}).post(getUsersCart)

export default router