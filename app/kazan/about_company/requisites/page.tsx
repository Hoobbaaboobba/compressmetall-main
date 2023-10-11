import BasicTable from "@/components/AboutCompany/Requisites/Requisites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Реквизиты",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

const Requisites = () => {
  return (
    <main className="w-full flex justify-center items-center">
      <BasicTable />
    </main>
  );
};

export default Requisites;
