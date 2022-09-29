import { nanoid } from "nanoid";
import urlMetadata from "url-metadata";
import urlRepository from "../repositories/url.repository.js";

async function shortenUrl(url: string) {
  let shortUrl = nanoid(6);

  let dbUrl = await urlRepository.getByShortUrl(shortUrl);

  while (dbUrl) {
    shortUrl = nanoid(6);
    dbUrl = await urlRepository.getByShortUrl(shortUrl);
  }

  const urlMetaData = await urlMetadata(url);
  const title = urlMetaData.title;
  const description = urlMetaData.description;
  const thumbnail = urlMetaData.image;

  console.log(urlMetaData);

  await urlRepository.createShortUrl(
    url,
    shortUrl,
    thumbnail,
    title,
    description
  );

  return shortUrl;
}

async function getLongUrl(shortUrl: string) {
  const dbLongUrl = await urlRepository.getByShortUrl(shortUrl);

  return dbLongUrl.longUrl;
}

async function getTopVisitedSites() {
  const topVisitedSites = await urlRepository.getTopVisitedSites();

  return topVisitedSites;
}

export default { shortenUrl, getLongUrl, getTopVisitedSites };
