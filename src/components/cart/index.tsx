import { ShoppingCart, XIcon } from "lucide-react"
import { Card } from "../../../types/home/home"
import LojaCard from "../lojapage/card"
import Link from "next/link"
import { getServerSession } from "next-auth"

export default async function Cart({posetaxs, count, totalPages}: {posetaxs: Card[], count: number, totalPages: number}){

    const session = await getServerSession()

    return(
        <div className="flex flex-col items-center justify-center py-6 gap-5 lg:gap-10 pb-10">
            <h1 className="text-center text-white text-xl">Olá {session?.user?.name}</h1>
            <h1 className="text-white text-2xl flex items-center justify-center gap-4 lg:text-[50px]">Carrinho <span className="lg:text-[50px]"><ShoppingCart/></span></h1>
            <div className="flex flex-wrap gap-5 lg:gap-20 justify-center items-center">
                {posetaxs.map((posetax,index)=>(
                    <div className="flex flex-col items-center mb-4 gp-3">
                        <XIcon className="text-white"/>
                        <LojaCard key={index} posetax={posetax} />
                    </div>
                ))}
            </div>
            <h2 className="text-white text-2xl lg:text-5xl">Valor Total: R$10000,00</h2>
            <button className="bg-[#D5D918] p-1 text-xl lg:text-4xl lg:p-2 rounded-sm">
                <Link href="/pagamento">
                    Finalizar Compra
                </Link>
            </button>
        </div>
    )
}