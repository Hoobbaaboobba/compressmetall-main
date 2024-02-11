"use server";

import { db } from "@/lib/db";
import { Product } from "@prisma/client";

export const setJsonData = async () => {
  const products: Product[] = await db.product.findMany();

  const filePath = "../data.ts";

  return products;
};
