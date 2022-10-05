import { Request, Response } from "express";
import { firebaseAdmin } from "../config/firebase.js";
import urlService from "../services/url.service.js";

async function shortenUrl(req: Request, res: Response) {
  const { url } = req.body as { url: string };

  const { authorization } = req.headers;
  let token: string;

  if (authorization) {
    token = authorization.replace("Bearer ", "");
  }
  try {
    var { uid } = await firebaseAdmin.auth().verifyIdToken(token);
  } catch (error) {}

  console.log(uid);

  const shortUrl = await urlService.shortenUrl(url, uid);

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

async function getUserLinks(req: Request, res: Response) {
  const { uid } = res.locals.user;

  const userLinks = await urlService.getUserLinks(uid);

  res.send(userLinks);
}

async function deleteOneLink(req: Request, res: Response) {
  const { id } = req.params;

  await urlService.deleteOneLink(Number(id));

  res.sendStatus(200);
}

export default {
  shortenUrl,
  getLongUrl,
  topVisitedSites,
  getUserLinks,
  deleteOneLink,
};
