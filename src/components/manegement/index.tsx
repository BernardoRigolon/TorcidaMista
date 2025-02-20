import Link from "next/link"
import { Card } from "../../../types/home/home"
import { DeleteButton, EditButton, ViewButton } from "./buttons"

export default function Management({posts, count}: {posts: Card[], count: number}) {
    return (
        <div className="w-full flex flex-col items-center py-20 gap-y-20">
            <div className="flex w-5/6 justify-end">
        <Link href={'/admin/create'}>
            <button className="bg-[#D5D918] w-full h-[50px] text-center border-black border p-2.5 text-3xl rounded-xl text-black cursor-pointer hover:bg-[#D5D918]/50 transition-all duration-200">
                Criar Produto
            </button>
        </Link>
            </div>
            <table className="w-5/6">           
            <thead className="w-full bg-gradient-radial from-[#038C00] to-black border-black border-[5px]">
            <tr className="flex w-full py-7 px-1 gap-1 md:px-5 text-lg md:text-3xl lg:px-20 justify-between lg:text-4xl text-[#D5D918]">
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Imagem</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
            </tr>
            </thead>           
            <tbody className="bg-[#E3E3E3] w-full border-black border-[5px]">
                {posts.map((post, index)=> (
                    <tr className="flex w-full flex-col lg:flex-row items-center text-xl lg:text-2xl 2xl:text-3xl xl justify-between px-5 md:px-10 py-10 border-black border lg:border-none lg:gap-7">
                    <th>{post?.id}</th>
                    <th>{post?.title}</th>
                    <th>R$ {post?.price}</th>
                    <th>{post?.image}</th>
                    <th>{post?.description}</th>
                    <th className="flex flex-col items-center py-4 lg:py-0 gap-y-4 lg:gap-y-2">
                        <span className="w-full lg:w-full"><EditButton id={post?.id} /></span>
                        <span className="w-full"><ViewButton id={post?.id} /></span>
                        <span className="w-full"><DeleteButton id={post?.id} /></span>
                    </th>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}