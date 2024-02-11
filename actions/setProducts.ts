"use server";

import { db } from "@/lib/db";

export const setProducts = async (array: Product[]) => {
  try {
    await db.$transaction(
      array.map((obj) =>
        db.product.create({
          data: {
            image: obj.img,
            label: obj.subLabel,
            marks: obj.id,
            type: obj.type,
            category: obj.category,
            variety: obj.variety,
            isInStock: obj.isInStock,
            price: obj.price,
            description: obj.description,
            metaTitle: obj.title,
            pageTitle: obj.metaType,
            sizes: obj.ENGSize,
            firstTypeOfSize: obj.typeOfSize,
          },
        })
      )
    );
    console.log("Data saved successfully.");
  } catch (error) {
    console.error("Error saving data to the database:", error);
  } finally {
    await db.$disconnect();
  }
};
