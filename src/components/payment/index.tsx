'use client'

import Link from "next/link"
import { Card } from "../../../types/home/home"
import LojaCard from "../lojapage/card"

export default function Cart({posetaxs, count, totalPages}: {posetaxs: Card[], count: number, totalPages: number}){

        const handleClick = () => {
          alert('Compra realizada com sucesso!');
        };

    return(
        <div className="flex flex-col items-center justify-center py-6 gap-5 lg:gap-10 pb-10">
            <div className="flex flex-wrap gap-5 lg:gap-20 justify-center items-center">
                {posetaxs.map((posetax,index)=>(
                    <div className="flex flex-col items-center mb-4 gp-3">
                        <LojaCard key={index} posetax={posetax} />
                    </div>
                ))}
            </div>
            <h2 className="text-white text-2xl lg:text-5xl">Valor Total: R$10000,00</h2>
            <h3 className="text-white text-xl lg:text-4xl">(24)987654321</h3>
            <Link href={'/'}>
            <button onClick={handleClick} className="bg-[#D5D918] p-1 text-xl lg:text-4xl lg:p-2 rounded-sm">Confirmar Compra</button>
            </Link>
        </div>
    )
}