import { Router } from "express";
import urlController from "../controllers/url.controller.js";
import { ensureAuthentication } from "../middlewares/ensure-authentication.middleware.js";
import { validateSchema } from "../middlewares/validate-schema.middleware.js";
import urlSchema from "../schemas/url.schema.js";

const urlRouter = Router();

urlRouter.get("/:shortUrl", urlController.getLongUrl);

urlRouter.post(
  "/urls/shorten",
  validateSchema(urlSchema),
  urlController.shortenUrl
);

urlRouter.get("/urls/top", urlController.topVisitedSites);

urlRouter.get(
  "/urls/top/user",
  ensureAuthentication,
  urlController.getUserLinks
);

urlRouter.delete(
  "/urls/:id",
  ensureAuthentication,
  urlController.deleteOneLink
);

export default urlRouter;
