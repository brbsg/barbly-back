import { Router } from "express";
import urlController from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.get("/oi", urlController.getShortUrl);

export default urlRouter;
