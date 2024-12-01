import PartnersCard from "./PartnersCard";

export const partners = [
    {
        label: "Северсталь",
        img: "SEVER",
    },
    {
        label: "Амет",
        img: "AMET",
    },
    {
        label: "Евраз",
        img: "EVRAS",
    },
    {
        label: "Мечел",
        img: "MECHEL",
    },
    {
        label: "ММК",
        img: "MMK",
    },
];

const PartnersContent = () => {
    return (
        <section className="max-w-[1300px] w-full flex flex-col gap-6">
            <div className="w-full mb-8 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-black text-center xl:text-start">
                    Наши основные партнеры
                </h1>
                <div className="bg-black h-[5px] w-[80px] mt-4"></div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-center lg:justify-start lg:items-start">
                {partners.map((card, index) => (
                    <PartnersCard
                        key={index}
                        src={card.img}
                        label={card.label}
                    />
                ))}
            </div>
        </section>
    );
};

export default PartnersContent;
