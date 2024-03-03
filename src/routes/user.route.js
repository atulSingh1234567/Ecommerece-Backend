import express from "express";
import {registerUserController, showUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.route('/users').post(registerUserController).get(showUsers);

export default router;