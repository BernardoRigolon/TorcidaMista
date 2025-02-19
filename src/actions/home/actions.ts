"use server";

import prisma from "@/lib/db"

export default async function getCard() {
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            image: true,
            price: true
        },
        take: 6
    });

    return posts;
}