"use server";

import { db } from "@/lib/db";
import { MenuCategory } from "@prisma/client";
import fs from "fs";
import path from "path";

export const setJsonMenuCategory = async () => {
  try {
    const products: MenuCategory[] = await db.menuCategory.findMany();

    const jsonData = JSON.stringify(products, null, 2);

    const filePath = path.join(__dirname, "menuCategory.json");

    fs.writeFileSync(filePath, jsonData);

    console.log(`Data has been written to ${filePath}`);
    console.log("Успешно");
  } catch (e) {
    throw new Error("Что то пошло не так!");
  }
};
