"use server";

import { db } from "@/lib/db";
import { Product } from "@prisma/client";

export const searchProducts = async (query: string) => {
  try {
    const result: Product[] = await db.product.findMany({
      where: {
        label: {
          has: query,
        },
      },
    });

    return result;
  } catch (e) {
    throw new Error("поиск");
  }
};
