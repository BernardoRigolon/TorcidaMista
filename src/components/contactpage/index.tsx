import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full items-center gap-9 py-16">
            <h1 className="text-[#05FF00] text-4xl md:text-5xl text-center">Quer Entrar em Contato Conosco?</h1>
            <p className="text-white text-2xl md:text-3xl text-center">Se interessou por algo? Gostou do que viu? Surgiu alguma dúvida?</p>
            <h2 className="text-white text-3xl md:text-4xl text-center">Não Perca Tempo!</h2>
            
            <div className="flex justify-center">
            <div className="text-center text-white pt-10 w-5/6">
                <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">Algumas Formas de Nos Encontrar</h1>
                <div className="flex flex-col text-xl md: text-2xl gap-5 py-5 xl:text-4xl 2xl:text-5xl">
                    <span>Telefone: (32)987654321</span>
                    <span>Email: TorcidaMista@gmail.com</span>
                    <span>Instagram: @TorcidaMista</span>
                </div>
            </div>
            </div>
        </div>
    )
}