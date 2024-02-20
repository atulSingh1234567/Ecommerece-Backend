import express from "express";
import {getUser, registerUserController } from "../controllers/user.controllers.js";

const router = express.Router();

router.route('/profile').get(getUser).post(registerUserController);

export default router;