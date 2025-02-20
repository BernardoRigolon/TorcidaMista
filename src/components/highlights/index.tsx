import { Card } from "../../../types/home/home";
import HighlightsCard from "./card";

type CardProps = {
    posts: Card[]
}

export default function Highlights({posts}: CardProps){
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-[#05FF00] text-4xl md:text-6xl py-[140px]">Em Destaque</h1>
            <div className="flex flex-col lg:flex-row gap-[70px] lg:gap-[120px] pb-[70px] md:pb-[130px] flex-wrap justify-center">
                {posts.map((post,index)=>(
                    <HighlightsCard key={index} post={post} />
                ))}
            </div>
        </div>
    )
}