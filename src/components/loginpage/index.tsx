import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex justify-center">
            <Image
            src = {'/backLogin.png'}
            alt = "Tela de fundo"
            width={3750}
            height = {2560}
            className="w-full"
            />
            <div className="w-1/2 lg:w-1/4 bg-[#E3E3E3] h-[200px] mt-7 md:mt-32 lg:mt-[250px] xl:mt-80 2xl:mt-96 lg:h-[300px] border-[#AB6424] border-[15px] rounded-xl flex flex-col items-center absolute gap-2.5 py-4 lg:py-12">
            <input className="bg-[#E3E3E3] w-5/6 h-[50px] border border-black placeholder:italic placeholder:text-black p-2" placeholder="E-mail" type="text" name="nome"></input>
                <input className="bg-[#E3E3E3] w-5/6 h-[50px] border border-black placeholder:italic placeholder:text-black p-2" placeholder="Senha" type="password" name="email"></input>
                <Link href="/admin" className="bg-[#D5D918] w-5/6 h-[50px] text-black text-3xl border border-black flex justify-center">
                <button>Login</button>
                </Link>
            </div>
        </div>
    )
}