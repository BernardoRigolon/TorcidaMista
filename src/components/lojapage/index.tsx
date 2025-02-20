'use client'

import { SearchIcon } from "lucide-react";
import LojaCard from "./card";
import { Card } from "../../../types/home/home";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../pagination";

export default function LojaPage({posetaxs, count, totalPages}: {posetaxs: Card[], count: number, totalPages: number})
{

    const searchParams = useSearchParams()

    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if (!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/loja/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    useEffect(() => {
        setSearchTerm(searchParams.get('query') || '')
    }, [searchParams])

    return (
        <div className="flex flex-col items-center gap-[50px] md:gap-[70px]">
            <div className="bg-black w-[300px] md:w-3/4 h-[50px] border-[#299E00] border-[5px] rounded-3xl mt-[50px] md:mt-[70px] py-1 px-3">
            <form onSubmit={handleSubmit} autoComplete="off">
            <span className="text-[#299E00] flex items-center text-2xl gap-2">
                <SearchIcon />
                <input className="bg-black w-full placeholder:text-[#299E00] placeholder:italic border-reset outline-0" placeholder="Pesquisar" type = "text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </span>
                </form>
                </div>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-[50px] md:gap-[80px] lg:gap-[115px]">
        {posetaxs.map((posetax,index)=>(
                    <LojaCard key={index} posetax={posetax} />
                ))}
                {totalPages > 1 && (
                    <Pagination totalPages={totalPages} />
                )}
        </div>
        </div>
    )
}