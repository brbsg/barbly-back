import { nanoid } from "nanoid";

async function getShortUrl() {
  console.log(nanoid(6));
}

export default { getShortUrl };
