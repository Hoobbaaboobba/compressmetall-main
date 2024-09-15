import Image from "next/image"
import { ServicesHeader } from "./Header"
import { MenuData } from "./MenuData"
import Link from "next/link"
import OrangeButton from "@/components/OrangeButton"

export const ServicesContent = () => {
    return (
        <>
            <ServicesHeader title="Услуги"/>
            <div className="my-6 w-full min-w-[400px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MenuData.map((item, index) => (
                    <div key={index} className="relative">
                        <Link className="absolute inset-0"  href={`/moscow/services/${item.link}`} key={index}/>
                        <div className="flex flex-col text-center w-full h-full justify-between items-center border border-light-gray p-[10px] md:p-[20px] gap-3 rounded-lg">
                            <Image
                                src={`/${item.image}.png`}
                                alt={item.name}
                                width={160}
                                height={128}
                            />
                            <h3 className="text-sm">{item.name}</h3>
                            <OrangeButton label={"Подробнее"} mark />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
