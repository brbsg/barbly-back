import { Router } from "express";
import urlController from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.get("/:shortUrl", urlController.getLongUrl);

urlRouter.post("/urls/shorten", urlController.shortenUrl);

urlRouter.get("/urls/top", urlController.topVisitedSites);

export default urlRouter;
