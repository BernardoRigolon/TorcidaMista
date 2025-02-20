import { editPost } from "@/actions/admin/actions";
import { IndivCard } from "../../../../../types/home/home";

export default async function EditPage({post}: {post: IndivCard}) {

    const updatePost = editPost.bind(null, post?.id)
    
    return (
        <div className="w-full flex justify-center">
            <form className="bg-[#D9D9D9] w-[300px] md:w-2/3 border-black border-[10px] flex flex-col py-10 px-5 gap-10 rounded-xl" action={updatePost}>
                <label className="text-3xl">Título do Produto</label>
                <input
                name="title"
                placeholder="Título"
                defaultValue={post?.title}
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Preço do Produto</label>
                <input
                name="price"
                placeholder="Preço"
                type="number"
                defaultValue={post?.price}
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Descrição do Produto</label>
                <input
                name="description"
                placeholder="Descrição"
                defaultValue={post?.description}
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Imagem do Produto</label>
                <input
                name="image"
                placeholder="Imagem"
                defaultValue={post?.image}
                                className="placeholder:text-black text-2xl"
                />
                <div className="w-full flex justify-center">
                <button className="bg-black w-1/3 text-center border-black border p-1 md:p-2.5 text-4xl rounded-xl text-white cursor-pointer hover:bg-black/50 transition-all duration-200">Editar</button>
                </div>
            </form>
        </div>
    )
}