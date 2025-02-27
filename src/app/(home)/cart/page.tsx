"use client"

import CartCard from "@/components/cart/card";
import LojaCard from "@/components/lojapage/card";
import { CartContext, CartItem } from "@/context/cart";
import { ShoppingCart } from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Page() {

    const { data: session, status } = useSession();
  const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
    
        if (!session) {
          router.push("/login");
        }
      }, [session, status, router]);

    console.log(CartContext);
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext is not provided!");
    }

    const { count, cartItems } = cartContext;

    const cardItemCount = count();

    const totalValue = cartItems.reduce((acc, item) => acc + item.product?.price, 0);

    return(
        <div className="bg-gradient-to-b from-black to-[#038C00] w-full min-h-screen">
            <div className="flex flex-col items-center justify-center py-16 gap-5 lg:gap-10 pb-10">
            <h1 className="text-white text-2xl flex items-center justify-center gap-4 lg:text-[50px]">Carrinho <span className="lg:text-[50px]"><ShoppingCart/></span></h1>
            <div className="flex flex-wrap gap-5 lg:gap-20 justify-center items-center">
                {cartItems.map((item: CartItem, index: number)=>(
                    <div key={index}>
                        <CartCard post={item.product} />
                    </div>
                ))}
            </div>
            <h2 className="text-white text-2xl lg:text-5xl">Valor Total: R${totalValue.toFixed(2)}</h2>
            <button className="bg-[#D5D918] p-1 text-xl lg:text-4xl lg:p-2 rounded-sm">
                <Link href="/pagamento">
                    Finalizar Compra
                </Link>
            </button>
        </div>
        </div>
    )
}