"use server"

import prisma from "@/lib/db"

export async function fetchPostById(id:number) {
    const post = await prisma.product.findUnique({
        where: {id},
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            image: true
        }
    });
    
    return post;
}