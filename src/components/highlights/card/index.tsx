import Image from "next/image";
import { Card } from "../../../../types/home/home";
import Link from "next/link";

type HighlightsCardProps = {
    post: Card;
}

export default function HighlightsCard({post}: HighlightsCardProps)
{
    return (
        <div className="bg-[#D9D9D9] w-80 h-[450px] border-black border-[10px]">
            <Link href={`/post/${post?.id}`} className="group">
            <Image 
            src = {post?.image}
            alt = {post?.title}
            width={900}
            height={900}
            className="w-[300px] h-[300px]"
            />
            </Link>
            <div className="py-3 px-6 text-center">
                <p className="text-xl py-3">{post?.title}</p>
                <h1 className="text-4xl">R$ {post?.price}</h1>
            </div>
        </div>
    )
}