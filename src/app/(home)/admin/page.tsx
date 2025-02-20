import fetchPosts from "@/actions/admin/actions";
import Management from "@/components/manegement";

export default async function Page() {

    const {posts,count} = await fetchPosts()

    return (
        <div className="bg-gradient-to-b from-black to-[#038C00] w-full">
            <Management posts={posts} count={count} />
        </div>
    )
}