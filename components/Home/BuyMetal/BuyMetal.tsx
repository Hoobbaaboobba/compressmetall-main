"use client";

import { partners } from "@/components/AboutCompany/Partners/PartnersContent";
import PartnersCard from "@/components/AboutCompany/Partners/PartnersCard";
import { usePathname } from "next/navigation";

const BuyMetal = () => {
    const pathname = usePathname().split("/");

    return (
        <section className={`w-full ${pathname[3] === "partners" ? "hidden" : "flex"} justify-center items-center`}>
            <div className="max-w-[1200px] w-full text-center flex flex-col justify-center items-center sm:text-start px-4">
                <div className="mb-6 flex justify-center items-center gap-2 flex-wrap w-full">
                    {partners.map((partner) => (
                        <PartnersCard key={partner.label} src={partner.img} label={partner.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuyMetal;
