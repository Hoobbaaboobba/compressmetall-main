import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Твери | Купить металл в компании Копресс металл недорого",
  description: "Продажа металлопроката в Твери и Тверской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Тверь",
    "Металлопрокат в Твери",
    "Московский компрессорный завод",
    "металлопрокат в Твери",
    "металлические изделия в Твери",
    "прокат металла в Твери",
    "металлургия в Твери",
    "сталь в Твери",
    "чугун в Твери",
    "алюминий в Твери",
    "железо в Твери",
    "металлический лист в Твери",
    "профиль металлический в Твери",
    "трубы в Твери",
    "арматура в Твери",
    "металлические конструкции в Твери",
    "металлический склад в Твери",
    "горячекатаный металл в Твери",
    "холоднокатаный металл в Твери",
    "металлический пресс в Твери",
    "металлическая фабрика в Твери",
    "металлообработка в Твери",
    "металлоизделия в Твери",
    "металлоторговля в Твери",
    "металлопродукция в Твери",
    "металлорежущий инструмент в Твери",
    "производство металлопродукции в Твери",
    "металлический рынок в Твери",
    "металлопокупка в Твери",
    "металлоснабжение в Твери",
    "склад металла в Твери",
    "металлические отходы в Твери",
    "металлоконструкции в Твери",
    "металлоремонт в Твери",
    "Тула",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title:
      "Металлопрокат оптом и в розницу в Твери | Купить металл в компании Копресс металл недорого",
    description: "Продажа металлопроката в Твери и Тверской области",
    url: "https://www.kometal.ru/tver",
    images: {
      url: "https://www.kometal.ru/saratov/_next/static/media/stainlessBarMetal.f86f7842.png",
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
