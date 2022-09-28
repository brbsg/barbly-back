import { Router } from "express";

const urlRouter = Router();

urlRouter.get("/", (req, res) => res.send(""));

export default urlRouter;
