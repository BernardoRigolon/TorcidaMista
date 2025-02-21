'use cliente'

import { signOut } from "next-auth/react"

export default function ButtonLogout() {
    return (
        <button className="bg-[#D5D918] w-5/6 h-[50px] text-black text-3xl border border-black flex justify-center" onClick={() => signOut()}>Logout</button>
    )
}