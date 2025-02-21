import { getSession, signIn } from "next-auth/react"
import ButtonLogout from "../buttonLogout";

export default async function ButtonLogin()
{
    const session = await getSession();

    return (
        <div className="w-1/2 lg:w-1/4 bg-[#E3E3E3] h-[200px] mt-7 md:mt-32 lg:mt-[250px] xl:mt-80 2xl:mt-96 lg:h-[150px] border-[#AB6424] border-[15px] rounded-xl flex flex-col items-center absolute gap-2.5 py-4 lg:py-12 justify-center">
            {!session ? (
            
            <button className="bg-[#D5D918] w-5/6 h-[50px] text-black text-3xl border border-black flex justify-center" onClick={() => signIn('github', { callbackUrl: '/loja'})}>Login</button>
            ) : (
                <ButtonLogout />
            )}
        </div>
    )
}