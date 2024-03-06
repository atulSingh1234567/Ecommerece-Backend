import { Router } from "express";
import { showBestDeal } from "../controllers/bestdeal.controller.js";

const router = Router();

router.route('/best-deals').get(showBestDeal);

export default router;