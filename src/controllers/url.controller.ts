import { Request, Response } from "express";
import urlService from "../services/url.service.js";

async function getShortUrl(req: Request, res: Response) {
  const shortUrl = await urlService.getShortUrl();

  res.send("oi");
}

export default { getShortUrl };
