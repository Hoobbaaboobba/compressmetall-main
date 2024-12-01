import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";
import { LinkButton } from "./Link";
import { PricePopup } from "./Price/PricePopup";
import { LogInIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface DynamicProps {
    img: string;
    label: string;
    sublabel: string;
    topic?: string[];
    href: string;
    category?: string;
    variety?: string;
    id?: string;
    size?: string;
    variant?: string | string[];
    price?: string
}

const DynamicItem = ({
    img,
    label,
    variant,
    sublabel,
    href,
    category,
    variety,
    id,
    size,
    price,
}: DynamicProps) => {
    return (
        <div className="relative rounded-lg hover:shadow-md transition duration-300">
            <LinkButton
                catalog
                type={href}
                category={category}
                id={id}
                size={size}
                variety={variety}
            >
                <div className={`flex bg-white  ${variant === "list" ? "flex-row p-2" : "flex-col p-[10px] md:p-[20px]"} text-center w-full h-full justify-between items-center border border-light-gray gap-3 rounded-lg`}>
                    <Image
                        src={`/${img}.png`}
                        alt={label}
                        width={variant === "list" ? 64 : 128}
                        height={variant === "list" ? 64 : 128}
                        className="rounded-md"
                    />
                    <h3 className="text-md">{sublabel}</h3>
                    <Separator className="w-full my-1" />
                    <div className="flex flex flex-col">
                        <div className="flex text-slate-400 text-sm gap-1 items-center w-full">
                            <span>Цена</span>
                            <PricePopup />
                        </div>
                        <div className="flex justify-between items-center w-full gap-4">
                            <span className="font-medium">{price}</span>
                            <button className="bg-orange-bg hover:bg-orange-bg/90 rounded-md p-[6px] text-black">
                                <LogInIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </LinkButton>
        </div>
    );
};

export default DynamicItem;
