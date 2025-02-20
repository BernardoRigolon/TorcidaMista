import { fetchPostById } from "@/actions/home/indiv-post/actions";
import IndivPostPage from "@/components/indiv-post";

export default async function Page({params}: {params: {id: string}}) {

    const id = parseInt(params.id,10);

    const post = await fetchPostById(id);

    return (
        <div className="bg-gradient-to-b from-black to-[#038C00] w-full flex justify-center py-40">
        <IndivPostPage post={post}/>
        </div>
    )
}