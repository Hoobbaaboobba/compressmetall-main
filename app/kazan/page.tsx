import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Казани | Купить металл в компании Копресс металл недорого",
  description: "Продажа металлопроката в Казани и в Татрстане",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Казань",
    "Металлопрокат в Казане",
    "Московский компрессорный завод",
    "металлопрокат в Казане",
    "металлические изделия в Казане",
    "прокат металла в Казане",
    "металлургия в Казане",
    "сталь в Казане",
    "чугун в Казане",
    "алюминий в Казане",
    "железо в Казане",
    "металлический лист в Казане",
    "профиль металлический в Казане",
    "трубы в Казане",
    "арматура в Казане",
    "металлические конструкции в Казане",
    "металлический склад в Казане",
    "горячекатаный металл в Казане",
    "холоднокатаный металл в Казане",
    "металлический пресс в Казане",
    "металлическая фабрика в Казане",
    "металлообработка в Казане",
    "металлоизделия в Казане",
    "металлоторговля в Казане",
    "металлопродукция в Казане",
    "металлорежущий инструмент в Казане",
    "производство металлопродукции в Казане",
    "металлический рынок в Казане",
    "металлопокупка в Казане",
    "металлоснабжение в Казане",
    "склад металла в Казане",
    "металлические отходы в Казане",
    "металлоконструкции в Казане",
    "металлоремонт в Казане",
    "Казань",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title:
      "Металлопрокат оптом и в розницу в Казани | Купить металл в компании Копресс металл недорого",
    description: "Продажа металлопроката в Казани и в Татрстане",
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
