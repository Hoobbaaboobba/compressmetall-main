import { Metadata } from "next";
import MainSection from "../components/Home/MainSection/MainSection";
import Advantages from "../components/Home/advantages/Advantages";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого",
  description: "Продажа металлопроката в по всей территории России и СНГ",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл",
    "Металлопрокат",
    "Московский компрессорный завод",
    "металлопрокат",
    "металлические изделия",
    "прокат металла",
    "металлургия",
    "сталь",
    "чугун",
    "алюминий",
    "железо",
    "металлический лист",
    "профиль металлический",
    "трубы",
    "арматура",
    "металлические конструкции",
    "металлический склад",
    "горячекатаный металл",
    "холоднокатаный металл",
    "металлический пресс",
    "металлическая фабрика",
    "металлообработка",
    "металлоизделия",
    "металлоторговля",
    "металлопродукция",
    "металлорежущий инструмент",
    "производство металлопродукции",
    "металлический рынок",
    "металлопокупка",
    "металлоснабжение",
    "склад металла",
    "металлические отходы",
    "металлоконструкции",
    "металлоремонт",
    "Москва",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title:
      "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого",
    description: "Продажа металлопроката в по всей территории России и СНГ",
    url: "https://www.kometal.ru",
    images: {
      url: "https://www.kometal.ru/_next/static/media/stainlessBarMetal.f86f7842.png",
      width: 200,
      height: 200,
    },
  },
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1300px] w-full">
        <Suspense fallback={<Loading />}>
          <MainSection />
        </Suspense>
        <Advantages />
      </div>
    </main>
  );
}
