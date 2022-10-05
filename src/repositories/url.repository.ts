import { prisma } from "../config/database.js";

async function createShortUrl(
  uid: string,
  longUrl: string,
  shortUrl: string,
  thumbnail: string,
  title: string,
  description: string
) {
  return prisma.url.create({
    data: { userId: uid, longUrl, shortUrl, thumbnail, title, description },
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

async function getTopVisitedSites() {
  return prisma.url.findMany({
    take: 10,
    orderBy: { visitCount: "desc" },
  });
}

async function getUserLinks(uid: string) {
  return prisma.url.findMany({
    where: { userId: uid },
    orderBy: { id: "desc" },
  });
}

async function deleteOneLink(id: number) {
  return prisma.url.delete({
    where: { id },
  });
}

export default {
  createShortUrl,
  incrementVisitCount,
  getByShortUrl,
  deleteShortUrl,
  getTopVisitedSites,
  getUserLinks,
  deleteOneLink,
};
