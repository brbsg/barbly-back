import { prisma } from "../config/database.js";

async function createShortUrl(
  longUrl: string,
  shortUrl: string,
  thumbnail: string,
  title: string,
  description: string
) {
  return prisma.url.create({
    data: { longUrl, shortUrl, thumbnail, title, description },
  });
}

async function getTopVisitedSites() {
  return prisma.url.findMany({
    take: 10,
    orderBy: { visitCount: "desc" },
  });
}

async function incrementVisitCount(shortUrl: string) {
  return prisma.url.update({
    where: { shortUrl },
    data: { visitCount: { increment: 1 } },
  });
}

async function getByShortUrl(shortUrl: string) {
  return prisma.url.findUnique({
    where: { shortUrl },
  });
}

async function deleteShortUrl(shortUrl: string) {
  return prisma.url.deleteMany({});
}

export default {
  createShortUrl,
  getTopVisitedSites,
  incrementVisitCount,
  getByShortUrl,
  deleteShortUrl,
};
