import { IndivCard } from "../../../../../types/home/home";

export default async function ViewPage({post}: {post: IndivCard}) {
    
    return (
        <div className="w-full flex justify-center">
            <form className="bg-[#D9D9D9] w-[300px] md:w-2/3 border-black border-[10px] flex flex-col py-10 px-5 gap-10 rounded-xl">
                <label className="text-3xl">Título do Produto</label>
                <input
                name="title"
                placeholder={post?.title}
                readOnly
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Preço do Produto</label>
                <input
                name="price"
                placeholder={post?.price}
                readOnly
                type="number"
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Descrição do Produto</label>
                <input
                name="description"
                placeholder={post?.description}
                readOnly
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Imagem do Produto</label>
                <input
                name="image"
                placeholder={post?.image}
                readOnly
                                className="placeholder:text-black text-2xl"
                />
            </form>
        </div>
    )
}