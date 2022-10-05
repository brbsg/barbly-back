import { prisma } from "../config/database.js";

async function createUser(id: string) {
  return prisma.user.create({
    data: { id },
  });
}

export default { createUser };
