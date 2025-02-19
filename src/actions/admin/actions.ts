"use server";

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function fetchPosts() {
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            image: true,
            price: true
        },
        orderBy:{
            id: "asc"
        }
    });

    const count = await prisma.product.count()

    return {posts, count};
}

export async function deletePost(id: number | undefined) {
    await prisma.product.delete({
        where: {id},
    });

    revalidatePath('/admin')
}

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const priceString = formData.get("price") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;

    const price = parseFloat(priceString)

    await prisma.product.create({
        data: {
            title,
            price,
            description,
            image
        }
    })

    redirect("/admin")
}

export async function editPost(id: number | undefined, formData: FormData) {
    const title = formData.get("title") as string;
    const priceString = formData.get("price") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;

    const price = parseFloat(priceString)

    await prisma.product.update({
        where: {id},
        data: {
            title,
            price,
            description,
            image
        }
    })
    redirect("/admin")
}