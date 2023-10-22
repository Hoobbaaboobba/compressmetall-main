import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Туле | Купить металл в компании Копресс металл недорого",
  description: "Продажа металлопроката в Туле и Тульской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Тула",
    "Металлопрокат в Туле",
    "Московский компрессорный завод",
    "металлопрокат в Туле",
    "металлические изделия в Туле",
    "прокат металла в Туле",
    "металлургия в Туле",
    "сталь в Туле",
    "чугун в Туле",
    "алюминий в Туле",
    "железо в Туле",
    "металлический лист в Туле",
    "профиль металлический в Туле",
    "трубы в Туле",
    "арматура в Туле",
    "металлические конструкции в Туле",
    "металлический склад в Туле",
    "горячекатаный металл в Туле",
    "холоднокатаный металл в Туле",
    "металлический пресс в Туле",
    "металлическая фабрика в Туле",
    "металлообработка в Туле",
    "металлоизделия в Туле",
    "металлоторговля в Туле",
    "металлопродукция в Туле",
    "металлорежущий инструмент в Туле",
    "производство металлопродукции в Туле",
    "металлический рынок в Туле",
    "металлопокупка в Туле",
    "металлоснабжение в Туле",
    "склад металла в Туле",
    "металлические отходы в Туле",
    "металлоконструкции в Туле",
    "металлоремонт в Туле",
    "Тула",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title:
      "Металлопрокат оптом и в розницу в Туле |Саратов Купить металл в компании Копресс металл недорого",
    description: "Продажа металлопроката в Туле и Тульской области",
    url: "https://www.kometal.ru/tula",
    images: {
      url: "https://www.kometal.ru/tula/_next/static/media/stainlessBarMetal.f86f7842.png",
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
