"use server";

import { db } from "@/lib/db";

export const getMenuCategory = async (href: string) => {
  try {
    const menuCategories = await db.menuCategory.findFirst({
      where: {
        href,
      },
      include: {
        links: true,
      },
    });
    return menuCategories?.links;
  } catch (e) {
    throw new Error("Не удалось получить menuCategory!");
  }
};
