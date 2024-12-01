"use server";

import { db } from "@/lib/db";

export const getMenuLinks = async (id: number) => {
    try {
        const links = db.menuCategoryLinks.findMany({
            where: {
                id: id,
            },
        });

        return links;
    } catch (error) {
        throw new Error("Что-то пошло не так!");
    }
}

export const getAllMenuLinks = async () => {
    try {
        const links = db.menuCategoryLinks.findMany();
        return links;
    } catch (error) {
        throw new Error("Не удлучить меню линкс");
    }
}
