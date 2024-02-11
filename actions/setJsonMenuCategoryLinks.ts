"use server";

import { db } from "@/lib/db";
import { MenuCategoryLinks } from "@prisma/client";

export const setJsonMenuCategoryLinks = async () => {
  const products: MenuCategoryLinks[] = await db.menuCategoryLinks.findMany({});

  return products;
};
