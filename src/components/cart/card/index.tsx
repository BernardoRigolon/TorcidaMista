'use client'

import { useContext } from "react";
import { Card } from "../../../../types/home/home";
import { CartContext } from "@/context/cart";
import Image from "next/image";
import { XIcon } from "lucide-react";

export default function CartCard({post}: {post: Card})
{
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext is not provided!");
    }
    
    const { handleRemoveFromCart } = cartContext;

    const handleRemoveClick = () => {
        if (post && post.id !== undefined) {
            handleRemoveFromCart(post.id);
        } else {
            console.error("Product or product ID is undefined");
        }
    };

    return(
        <div>
        <div onClick={handleRemoveClick} className="flex flex-col items-center mb-4 gp-3 cursor-pointer">
        <XIcon className="text-white"/>
        </div>
        <div className="bg-[#D9D9D9] w-80 border-black border-[10px]">
            <Image 
            src = {post?.image}
            alt = {post?.title}
            width={900}
            height={900}
            className="w-[300px] h-[300px]"
            />
            <div className="py-3 px-6">
                <p className="text-xl text-center py-3">{post?.title}</p>
                <span className="flex items-center justify-end gap-14">
                    <h1 className="text-4xl text-center pb-4">R$ {post?.price}</h1>
                </span>
            </div>
        </div>
        </div>
    )
}