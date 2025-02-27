'use client'

import Image from "next/image";
import ButtonLogin from "../buttonLogin";

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
            <ButtonLogin />
        </div>
    )
}