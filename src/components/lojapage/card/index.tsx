'use client'

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "../../../../types/home/home";



export default function LojaCard({posetax}: {posetax: Card})
{

    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => setIsNavOpen(!isNavOpen)

    const toggleNavO = () => {
        if(isNavOpen) {
            toggleNav()
        }
    }

    return (
        <div className="bg-[#D9D9D9] w-80 border-black border-[10px]">
            <Link href={`/post/${posetax?.id}`}>
            <Image 
            src = {posetax?.image}
            alt = {posetax?.title}
            width={900}
            height={900}
            className="w-[300px] h-[300px]"
            />
            </Link>
            <div className="py-3 px-6">
                <p className="text-xl text-center py-3">{posetax?.title}</p>
                <span className="flex items-center justify-end gap-14">
                    <h1 className="text-4xl text-center pb-4">R$ {posetax?.price}</h1>
                    {isNavOpen ?
                    <Minus 
                    onClick={toggleNavO}
                    className="cursor-pointer"
                    />
                    :
                    <div>
                        <Plus 
                        onClick={toggleNav}
                        className="cursor-pointer"
                        />
                    </div>
                    }
                </span>
                {isNavOpen && (
                    <div className="flex flex-col py-5 gap-y-5">
                        <span className="text-2xl">Detalhes:</span>
                        <span className="text-xl">{posetax?.description}</span>
                        <Link href={`/post/${posetax?.id}`} className="justify-center flex">
                        <button className="bg-black w-5/6 text-center border-black border p-2.5 text-3xl rounded-xl text-white cursor-pointer hover:bg-black/50 transition-all duration-200">Ver Mais</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}