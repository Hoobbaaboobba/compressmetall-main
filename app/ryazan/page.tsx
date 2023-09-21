import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Копресс металл | Рязань",
  description: "Продажа металлопроката в Рязане и Рязанской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Рязань",
    "Металлопрокат в Рязаньи",
    "Московский компрессорный завод",
    "металлопрокат в Рязаньи",
    "металлические изделия в Рязаньи",
    "прокат металла в Рязаньи",
    "металлургия в Рязаньи",
    "сталь в Рязаньи",
    "чугун в Рязаньи",
    "алюминий в Рязаньи",
    "железо в Рязаньи",
    "металлический лист в Рязаньи",
    "профиль металлический в Рязаньи",
    "трубы в Рязаньи",
    "арматура в Рязаньи",
    "металлические конструкции в Рязаньи",
    "металлический склад в Рязаньи",
    "горячекатаный металл в Рязаньи",
    "холоднокатаный металл в Рязаньи",
    "металлический пресс в Рязаньи",
    "металлическая фабрика в Рязаньи",
    "металлообработка в Рязаньи",
    "металлоизделия в Рязаньи",
    "металлоторговля в Рязаньи",
    "металлопродукция в Рязаньи",
    "металлорежущий инструмент в Рязаньи",
    "производство металлопродукции в Рязаньи",
    "металлический рынок в Рязаньи",
    "металлопокупка в Рязаньи",
    "металлоснабжение в Рязаньи",
    "склад металла в Рязаньи",
    "металлические отходы в Рязаньи",
    "металлоконструкции в Рязаньи",
    "металлоремонт в Рязаньи",
    "Рязань",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title: "Копресс металл | Рязань",
    description: "Продажа металлопроката в Рязане и Рязанской области",
    url: "https://www.kometal.ru/ryazan",
    images: {
      url: "https://www.kometal.ru/ryazan/_next/static/media/stainlessBarMetal.f86f7842.png",
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
