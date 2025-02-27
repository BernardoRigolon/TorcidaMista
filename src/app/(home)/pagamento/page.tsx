'use client'

import getCard from "@/actions/home/actions";
import { fetchFilteredPosts } from "@/actions/search/actions";
import CartCard from "@/components/cart/card";
import Payment from "@/components/payment";
import { CartContext, CartItem } from "@/context/cart";
import Link from "next/link";
import { useContext } from "react";

export default function Pagamento() {

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext is not provided!");
    }

    const { count, cartItems } = cartContext;

    const cardItemCount = count();

    const totalValue = cartItems.reduce((acc, item) => acc + item.product?.price, 0);

    const handleClick = () => {
        alert('Compra realizada com sucesso!');
      };

    return(
        <div className="bg-gradient-to-b from-black to-[#038C00] w-full min-h-screen">
            <div className="flex flex-col items-center justify-center py-6 gap-5 lg:gap-10 pb-10">
            <div className="flex flex-wrap gap-5 lg:gap-20 justify-center items-center">
                {cartItems.map((item: CartItem, index: number)=>(
                                    <div key={index}>
                                        <CartCard post={item.product} />
                                    </div>
                                ))}
            </div>
            <h2 className="text-white text-2xl lg:text-5xl">Valor Total: R${totalValue.toFixed(2)}</h2>
            <h3 className="text-white text-xl lg:text-4xl">(24)987654321</h3>
            <Link href={'/'}>
            <button onClick={handleClick} className="bg-[#D5D918] p-1 text-xl lg:text-4xl lg:p-2 rounded-sm">Confirmar Compra</button>
            </Link>
        </div>
        </div>
    )
}