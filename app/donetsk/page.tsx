import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Копресс металл | Донетск",
  description: "Продажа металлопроката в Донетске и Донетской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Донетск",
    "Металлопрокат в Донетске",
    "Московский компрессорный завод",
    "металлопрокат в Донетске",
    "металлические изделия в Донетске",
    "прокат металла в Донетске",
    "металлургия в Донетске",
    "сталь в Донетске",
    "чугун в Донетске",
    "алюминий в Донетске",
    "железо в Донетске",
    "металлический лист в Донетске",
    "профиль металлический в Донетске",
    "трубы в Донетске",
    "арматура в Донетске",
    "металлические конструкции в Донетске",
    "металлический склад в Донетске",
    "горячекатаный металл в Донетске",
    "холоднокатаный металл в Донетске",
    "металлический пресс в Донетске",
    "металлическая фабрика в Донетске",
    "металлообработка в Донетске",
    "металлоизделия в Донетске",
    "металлоторговля в Донетске",
    "металлопродукция в Донетске",
    "металлорежущий инструмент в Донетске",
    "производство металлопродукции в Донетске",
    "металлический рынок в Донетске",
    "металлопокупка в Донетске",
    "металлоснабжение в Донетске",
    "склад металла в Донетске",
    "металлические отходы в Донетске",
    "металлоконструкции в Донетске",
    "металлоремонт в Донетске",
    "Донетск",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title: "Копресс металл | Донетск",
    description: "Продажа металлопроката в Донетске и Донетской области",
    url: "https://www.kometal.ru/donetsk",
    images: {
      url: "https://www.kometal.ru/donetsk/_next/static/media/stainlessBarMetal.f86f7842.png",
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
