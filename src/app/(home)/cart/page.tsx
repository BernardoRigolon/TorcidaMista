import getCard from "@/actions/home/actions";
import { fetchFilteredPosts } from "@/actions/search/actions";
import Cart from "@/components/cart";

export default async function Page({searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const {posetaxs, count, totalPages} = await fetchFilteredPosts(query, currentPage || 6)

    const posts = await getCard()
    return(
        <div className="bg-gradient-to-b from-black to-[#038C00] w-full min-h-screen">
            <Cart posetaxs={posetaxs} count={count} totalPages={totalPages} />
        </div>
    )
}