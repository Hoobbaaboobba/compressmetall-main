"use server";

import { db } from "@/lib/db";

export const getProducts = async (
  type?: string,
  category?: string,
  variety?: string,
  marks?: string,
  sizes?: string
) => {
  try {
    if (!type) {
      await db.product.findMany({});
    }
    const products = await db.product.findMany({
      where: {
        type,
        category,
        variety,
      },
    });

    return products;
  } catch (error) {
    throw new Error("Произошла ошибка при получении товаров!");
  }
};
