'use server'

import { db } from "@/lib/db"

export const getUniqueSizes = async () => {
    const items = await db.product.findMany({
        select: {
            sizes: true
        }
    })

    const sizes = items.map(item => item.sizes).flat()
    const uniqueSizes = Array.from(new Set(sizes))

    console.log(uniqueSizes)

}
