'use client'

import { deletePost } from "@/actions/admin/actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export function EditButton({id}: {id:number | undefined}) {
    return (
        <Link href={`admin/edit/${id}`}>
            <button className="bg-[#D5D918] text-black text-xl py-1 md:py-0 md:text-3xl border border-black w-full rounded-xl cursor-pointer hover:bg-[#D5D918]/50 transition-all duration-200">
                Editar
            </button>
        </Link>
    )
}

export function ViewButton({id}: {id:number | undefined}) {
    return (
        <Link href={`admin/view/${id}`}>
            <button className="bg-[#D5D918] text-black py-1 md:py-0 text-xl md:text-3xl border border-black w-full rounded-xl px-2 cursor-pointer hover:bg-[#D5D918]/50 transition-all duration-200">
                Visualizar
            </button>
        </Link>
    )
}

export function DeleteButton({id}: {id:number | undefined}) {
    return (
            <button onClick={() => deletePost(id)} className="bg-[#D5D918] text-black text-xl py-1 md:py-0 md:text-3xl border border-black w-full rounded-xl cursor-pointer hover:bg-[#D5D918]/50 transition-all duration-200">
                Deletar
            </button>
    )
}