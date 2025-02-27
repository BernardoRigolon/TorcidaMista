"use client"

import Image from "next/image";
import Link from "next/link"
import { IndivCard } from "../../../types/home/home";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default function IndivPostPage({post}: {post: IndivCard}) {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not provided!");
  }

  const { handleAddToCart } = cartContext;

  const addToCart = async () => {
    handleAddToCart(post)
  }

    return (
        <div className="bg-[#D9D9D9] w-[300px] md:w-2/3 border-black border-[10px] flex flex-wrap lg:flex-nowrap">
            <Image 
            src = {post?.image || '/logo.png'}
            alt = {post?.title || "Placeholder"}
            width={900}
            height={900}
            className="w-full lg:w-1/2 border-black border"
            />
            <div className="py-10 lg:py-12 xl:py-14 2xl:py-16 mx-auto flex flex-col items-center gap-5 xl:gap-8 2xl:gap-10 border-black border w-full lg:w-1/2">
                <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{post?.title}</p>
                <span className="flex items-center justify-center">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">R$ {post?.price}</h1>
                </span>
                    <div className="flex flex-col gap-y-5 mx-auto w-5/6">
                        <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Detalhes:</span>
                        <span className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex flex-wrap">{post?.description}</span>
                    </div>
          <Link href="/cart" className="flex gap-2 items-center flex-col">
            <button onClick={addToCart} className="bg-[#D5D918] p-1 text-xl lg:text-4xl lg:p-2 rounded-sm flex flex-col">
                    <div className="flex items-center gap-2">Comprar <span><ShoppingCart/></span></div>
            </button>
          </Link>
            </div>
        </div>
    )
}