'use client'

import { HomeIcon, LogInIcon, Menu, PhoneIcon, ShoppingCart, StoreIcon, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const links = [
    {href: '/', label: <HomeIcon />},
    {href: '/contato', label: <PhoneIcon />},
    {href: '/loja', label: <ShoppingCart />},
    {href: '/admin', label: <StoreIcon />},
    {href: '/login', label: <LogInIcon />}
]

export default function Header()
{

    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => setIsNavOpen(!isNavOpen)

    const toggleNavO = () => {
        if(isNavOpen) {
            toggleNav()
        }
    }

    return(
        <header className="bg-black sticky top-0 z-20 w-full mx-auto md:p-0">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto px-4">
            <Link href='/' className="flex gap-4 items-center">
                <Image
                src={'/logo.png'}
                alt = "Logo do site"
                width = {904}
                height = {904}
                className = "h-14 w-14"
                />
            <span className="text-white hidden lg:block text-3xl">Torcida Mista</span>
                </Link>
            <nav className="flex justify-end">
                <div className="hidden w-full lg:flex justify-end items-center gap-16">
                    {links.map((link, index) => 
                    <Link href = {link.href} key={index}>
                        <span className="text-white text-2xl p-2 rounded-xl">{link.label}</span>
                    </Link>
                    )}
                </div>
                <div className="lg:hidden">
                    {isNavOpen ?
                    <X 
                    onClick={toggleNavO}
                    className="w-12 h-12 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                    />
                    :
                    <div>
                        <Menu 
                        onClick={toggleNav}
                        className="w-12 h-12 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                        />
                    </div>
                    }
                </div>
            </nav>
            {isNavOpen && (
                <div className="lg:hidden flex basis-full flex-col items-center gap-6 mt-10">
                                        {links.map((link, index) => 
                    <Link href = {link.href} key={index}>
                        <span className="text-white text-2xl p-2 rounded-xl">{link.label}</span>
                    </Link>
                    )}
                </div>
            )}
            </div>
            <div className="bg-[#038C00] w-full h-5 border-y border-black"></div>
        </header>
    )
}