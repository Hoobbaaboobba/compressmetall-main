import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Ярославле | Купить металл в компании Копресс металл недорого",
  description: "Продажа металлопроката в Ярославле и в Ярославской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Ярославль",
    "Металлопрокат в Ярославле",
    "Московский компрессорный завод",
    "металлопрокат в Ярославле",
    "металлические изделия в Ярославле",
    "прокат металла в Ярославле",
    "металлургия в Ярославле",
    "сталь в Ярославле",
    "чугун в Ярославле",
    "алюминий в Ярославле",
    "железо в Ярославле",
    "металлический лист в Ярославле",
    "профиль металлический в Ярославле",
    "трубы в Ярославле",
    "арматура в Ярославле",
    "металлические конструкции в Ярославле",
    "металлический склад в Ярославле",
    "горячекатаный металл в Ярославле",
    "холоднокатаный металл в Ярославле",
    "металлический пресс в Ярославле",
    "металлическая фабрика в Ярославле",
    "металлообработка в Ярославле",
    "металлоизделия в Ярославле",
    "металлоторговля в Ярославле",
    "металлопродукция в Ярославле",
    "металлорежущий инструмент в Ярославле",
    "производство металлопродукции в Ярославле",
    "металлический рынок в Ярославле",
    "металлопокупка в Ярославле",
    "металлоснабжение в Ярославле",
    "склад металла в Ярославле",
    "металлические отходы в Ярославле",
    "металлоконструкции в Ярославле",
    "металлоремонт в Ярославле",
    "Казань",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title:
      "Металлопрокат оптом и в розницу в Ярославле | Купить металл в компании Копресс металл недорого",
    description: "Продажа металлопроката в Ярославле и в Ярославской области",
    url: "https://www.kometal.ru/yaroslavl",
    images: {
      url: "https://www.kometal.ru/yaroslavl/_next/static/media/stainlessBarMetal.f86f7842.png",
      width: 200,
      height: 200,
    },
  },
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full">
        <Suspense fallback={<Loading />}>
          <MainSection />
        </Suspense>
        <Advantages />
      </div>
    </main>
  );
}
