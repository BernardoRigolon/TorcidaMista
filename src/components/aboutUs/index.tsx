'use client'
import { useEffect, useState } from "react";
import AboutUsCard from "./card";
import getApi from "@/api/get-secao";

type ApiProps = {
    id: number,
    title: string,
    text: string
}

export default function AboutUs() {

    const [cards, setCards] = useState<ApiProps[]>([]);

    useEffect(() => {

        const fetchData = async () =>{
            try{

                const {identities} = await getApi();
                setCards(identities);

            }catch{
                console.error('ERRO')
            }
        }
        fetchData();
    })

    return (
        <div className="flex flex-col lg:flex-row items-center gap-[70px] py-[70px] justify-center lg:py-40 lg:px-[30px] lg:gap-[120px]">
            {(cards.map((card) => (
                <AboutUsCard
                id = {card.id}
                title = {card.title}
                text = {card.text}
                />
            )))}
        </div>
    )
}