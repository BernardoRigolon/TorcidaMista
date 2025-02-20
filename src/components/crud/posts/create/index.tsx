import { createPost } from "@/actions/admin/actions";

export default function CreatePosts() {
    return(
        <div className="w-full flex justify-center">
            <form className="bg-[#D9D9D9] w-[300px] md:w-2/3 border-black border-[10px] flex flex-col py-10 px-5 gap-10 rounded-xl" action={createPost}>
                <label className="text-3xl">Título do Produto</label>
                <input
                name="title"
                placeholder="Título"
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Preço do Produto</label>
                <input
                name="price"
                placeholder="Preço"
                type="number"
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Descrição do Produto</label>
                <input
                name="description"
                placeholder="Descrição"
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Imagem do Produto</label>
                <input
                name="image"
                placeholder="Imagem"
                                className="placeholder:text-black text-2xl"
                />
                <div className="w-full flex justify-center">
                <button className="bg-black w-1/3 text-center border-black border p-1 md:p-2.5 text-4xl rounded-xl text-white cursor-pointer hover:bg-black/50 transition-all duration-200">Criar</button>
                </div>
            </form>
        </div>
    )
}