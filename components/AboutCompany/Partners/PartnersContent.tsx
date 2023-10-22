import PartnersCard from "./PartnersCard";

const partners = [
  {
    label: "Северсталь",
    img: "SEVER",
    href: "https://www.severstal.com/rus",
  },
  {
    label: "Амет",
    img: "AMET",
    href: "https://www.amet.ru",
  },
  {
    label: "Евраз",
    img: "EVRAS",
    href: "http://www.evraz.com/ru/",
  },
  {
    label: "Мечел",
    img: "MECHEL",
    href: "http://www.mechel.ru/",
  },
  {
    label: "ММК",
    img: "MMK",
    href: "http://mmk.ru/",
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
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersContent;
