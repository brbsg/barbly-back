import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { ensureAuthentication } from "../middlewares/ensure-authentication.middleware.js";

const authRouter = Router();

authRouter.get("/auth/check-token", ensureAuthentication, (req, res) =>
  res.sendStatus(200)
);

authRouter.post("/auth/sign-up", authController.signUp);

authRouter.post("/auth/sign-in", authController.signIn);

authRouter.post("/auth/reset-password", authController.resetPassword);

export default authRouter;
