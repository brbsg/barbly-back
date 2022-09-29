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

async function incrementVisitCount(id: number) {
  return prisma.url.update({
    where: { id },
    data: { visitCount: { increment: 1 } },
  });
}

async function getByShortUrl(shortUrl: string) {
  return prisma.url.findUnique({
    where: { shortUrl },
  });
}

export default {
  createShortUrl,
  getTopVisitedSites,
  incrementVisitCount,
  getByShortUrl,
};
