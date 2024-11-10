"use client";

import Image from "next/image";
import { useState } from "react";

interface CatalogItemProps {
    src: string;
    label: string;
    bold: string;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ src, label, bold }) => {
    const [imgHover, setImgHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(false)}
            className="flex cursor-pointer h-[50px] md:h-[80px] relative"
        >
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex justify-center items-center bg-light-gray transition duration-200">
                <Image
                    src={require(`../../../public/${src}.png`)}
                    alt={`${label}`}
                    width={50}
                    height={50}
                    priority
                    className={`${imgHover ? "xl:scale-150" : "xl:scale-100"
                        } transition duration-200`}
                    placeholder="blur"
                />
            </div>
            <div className="w-[120px] xl:w-[150px] h-[50px] md:h-[80px] text-[14px] flex justify-center items-center text-center px-2">
                <h1 className={`${bold}`}>{label}</h1>
            </div>
        </div>
    );
};

export default CatalogItem;
