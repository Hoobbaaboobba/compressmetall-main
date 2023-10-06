import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Уфе | Купить металл в компании Копресс металл недорого",
  description: "Продажа металлопроката в Уфе и в Башкортастане",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Уфа",
    "Металлопрокат в Уфе",
    "Московский компрессорный завод",
    "металлопрокат в Уфе",
    "металлические изделия в Уфе",
    "прокат металла в Уфе",
    "металлургия в Уфе",
    "сталь в Уфе",
    "чугун в Уфе",
    "алюминий в Уфе",
    "железо в Уфе",
    "металлический лист в Уфе",
    "профиль металлический в Уфе",
    "трубы в Уфе",
    "арматура в Уфе",
    "металлические конструкции в Уфе",
    "металлический склад в Уфе",
    "горячекатаный металл в Уфе",
    "холоднокатаный металл в Уфе",
    "металлический пресс в Уфе",
    "металлическая фабрика в Уфе",
    "металлообработка в Уфе",
    "металлоизделия в Уфе",
    "металлоторговля в Уфе",
    "металлопродукция в Уфе",
    "металлорежущий инструмент в Уфе",
    "производство металлопродукции в Уфе",
    "металлический рынок в Уфе",
    "металлопокупка в Уфе",
    "металлоснабжение в Уфе",
    "склад металла в Уфе",
    "металлические отходы в Уфе",
    "металлоконструкции в Уфе",
    "металлоремонт в Уфе",
    "Казань",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title:
      "Металлопрокат оптом и в розницу в Уфе | Купить металл в компании Копресс металл недорого",
    description: "Продажа металлопроката в Уфе и в Башкортастане",
    url: "https://www.kometal.ru/ufa",
    images: {
      url: "https://www.kometal.ru/ufa/_next/static/media/stainlessBarMetal.f86f7842.png",
      width: 200,
      height: 200,
    },
  },
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1050px] w-full">
        <Suspense fallback={<Loading />}>
          <MainSection />
        </Suspense>
        <Advantages />
      </div>
    </main>
  );
}
