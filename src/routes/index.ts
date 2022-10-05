import { Router } from "express";
import authRouter from "./auth.router.js";
import urlRouter from "./url.router.js";

const router = Router();

router.use(urlRouter);
router.use(authRouter);

export default router;
