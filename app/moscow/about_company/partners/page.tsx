import PartnersContent from "@/components/AboutCompany/Partners/PartnersContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Партнеры",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

const Pertners = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col gap-6">
      <PartnersContent />
    </main>
  );
};

export default Pertners;
