"use server";

import { db } from "@/lib/db";
import { MenuCategoryLinks } from "@prisma/client";
import fs from "fs";
import path from "path";

export const setJsonMenuCategoryLinks = async () => {
  try {
    const products: MenuCategoryLinks[] = await db.menuCategoryLinks.findMany(
      {}
    );

    const jsonData = JSON.stringify(products, null, 2);

    const filePath = path.join(__dirname, "menuCategoryLinks.json");

    fs.writeFileSync(filePath, jsonData);

    console.log(`Data has been written to ${filePath}`);
    console.log("Успешно");
  } catch (e) {
    throw new Error("Что то пошло не так!");
  }
};
