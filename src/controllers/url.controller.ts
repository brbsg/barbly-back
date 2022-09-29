import { Request, Response } from "express";
import urlService from "../services/url.service.js";

async function shortenUrl(req: Request, res: Response) {
  const { url } = req.body as { url: string };

  const shortUrl = await urlService.shortenUrl(url);

  res.send(shortUrl);
}

async function getLongUrl(req: Request, res: Response) {
  const { shortUrl } = req.params;

  const longUrl = await urlService.getLongUrl(shortUrl);

  res.send(longUrl);
}

async function topVisitedSites(req: Request, res: Response) {
  const topVisitedSites = await urlService.getTopVisitedSites();

  res.send(topVisitedSites);
}

export default { shortenUrl, getLongUrl, topVisitedSites };
