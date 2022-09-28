import { Router } from "express";
import urlRouter from "./url.router.js";

const router = Router();

router.use(urlRouter);

export default router;
