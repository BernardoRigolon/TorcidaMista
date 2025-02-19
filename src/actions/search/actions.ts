import prisma from "@/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredPosts(query: string, currentPage: number) {

    const offset = (currentPage - 1) * itemsPerPage

    const posetaxs = await prisma.product.findMany({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}]
        },
        select: {
            id: true,
            title: true,
            description: true,
            image: true,
            price: true
        },
        orderBy: {
            title: "asc"
        },
        take: itemsPerPage,
        skip: offset
    });

    const count = await prisma.product.count({
        where: {
            OR: [{title: { contains: query, mode: "insensitive"}}]
        }
    })

    const totalPages = Math.ceil(count / itemsPerPage)

    return {posetaxs, count, totalPages};
}