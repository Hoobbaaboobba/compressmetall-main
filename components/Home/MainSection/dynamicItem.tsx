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
    secondsize?: string
    thirdsize?: string
    fourthsize?: string
    fifthsize?: string
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
    secondsize,
    thirdsize,
    fourthsize,
    fifthsize
}: DynamicProps) => {
    return (
        <div className="relative rounded-lg hover:shadow-md transition duration-300">
            <LinkButton
                catalog
                type={href}
                category={category}
                id={id}
                label={label}
                size={size}
                variety={variety}
                secondsize={secondsize}
                thirdsize={thirdsize}
                fourthsize={fourthsize}
                fifthsize={fifthsize}
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
                    <div className="flex w-full">
                        <div className="flex flex-col w-full justify-start">
                            <div className="flex w-full gap-1 text-slate-400 text-sm">
                                <span>Цена</span>
                                <PricePopup />
                            </div>
                            <span className="font-medium text-start">{price}</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
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
