import { Router } from "express";
import { getexistingUser } from "../controllers/user.controllers.js";

const router = Router();
router.route('/existinguser').post(getexistingUser);

export default router;