"use client"

import { useState } from "react";
import { CatalogButton } from "./CatalogButton";
import { ChevronDown, Globe } from "lucide-react";

export const CatalogPopUp = () => {
    const [popUp, setPopUp] = useState(false);
    return (
        <div
            onMouseLeave={() => setPopUp(false)}
            onMouseEnter={() => setPopUp(true)}
            className="relative"
        >
            <CatalogButton href="about_company">
                <Globe className="w-[18px] h-[18px]" />
                Компания
                <ChevronDown className={`w-4 h-4 ${popUp ? "rotate-180" : "rotate-0"} transition`} />
            </CatalogButton>
            <div className="absolute top-[25px] w-[160px] left-0 bg-transparent">
                <div
                    className={`${popUp ? "block" : "hidden"
                        } bg-white rounded-lg mt-2 text-black text-start flex flex-col py-2 shadow-lg`}
                >
                    <CatalogButton href="about_company/requisites">
                        Реквизиты
                    </CatalogButton>
                    <CatalogButton href="about_company/partners">
                        Партнеры
                    </CatalogButton>
                    <CatalogButton href="about_company/blagodarnosti">
                        Благодарности
                    </CatalogButton>
                </div>
            </div>
        </div>
    )
}
