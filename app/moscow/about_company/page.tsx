import { Suspense } from "react";
import AboutCompanyContent from "../../../components/AboutCompany/AboutCompanyContent";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | О компании",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

export default function AboutCompany() {
  return (
    <main className="px-4 w-full flex justify-center items-center">
      <Suspense fallback={<Loading />}>
        <AboutCompanyContent />
      </Suspense>
    </main>
  );
}
