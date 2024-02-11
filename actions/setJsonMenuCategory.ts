"use server";

import { db } from "@/lib/db";
import { MenuCategory } from "@prisma/client";

export const setJsonMenuCategory = async () => {
  const products: MenuCategory[] = await db.menuCategory.findMany();

  return products;
};
