"use client";

import { Metadata } from "next";
import MainSection from "./components/Home/MainSection/MainSection";
import Advantages from "./components/Home/advantages/Advantages";

const keywords: string[] = [
  "Компресс металл",
  "Компрессорный завод",
  "Москва",
  "металлопрокат",
  "прокат металла",
  "чёрный металл",
  "цветной металл",
  "нержавеющая сталь",
  "оцинкованная сталь",
  "метизы",
  "трубопроводная арматура",
  "прецензионные сплавы",
  "размотка арматуры",
  "плазменная резка",
  "производство металлических изделий",
  "производство металлопродукции",
  "производство чёрного металла",
  "производство цветного металла",
  "производство нержавеющей стали",
  "производство оцинкованной стали",
  "производство метизов",
  "производство трубопроводной арматуры",
  "производство прецензионных сплавов",
  "размотка арматуры на заказ",
  "плазменная резка металла",
  "металлические изделия",
  "металлические компоненты",
  "металлические детали",
  "профильные трубы",
  "листовой металл",
  "гибка металла",
  "штамповка металла",
  "металлические конструкции",
  "лазерная резка",
  "газовая резка",
  "сварка металла",
  "покрытия для металла",
  "цинкование",
  "гальванизация",
  "пескоструйная обработка",
  "металлообработка",
  "прокатные станы",
  "токарные работы",
  "фрезерные работы",
  "металлорежущий инструмент",
  "пресс-формы",
  "профилирование металла",
  "металлические заготовки",
  "гнутые изделия",
  "рельсовый прокат",
  "металлургическая промышленность",
  "трубопроводы",
  "металлические листы",
  "прокатные валки",
  "углеродистая сталь",
  "кислородная резка",
  "гидроабразивная резка",
  "гибка металла на заказ",
  "сварка металла на заказ",
  "металлические детали на заказ",
  "метизы на заказ",
  "плазменная резка на заказ",
  "производство металлических изделий на заказ",
  "производство металлопродукции на заказ",
  "производство чёрного металла на заказ",
  "производство цветного металла на заказ",
  "производство нержавеющей стали на заказ",
  "производство оцинкованной стали на заказ",
  "производство метизов на заказ",
  "производство трубопроводной арматуры на заказ",
  "производство прецензионных сплавов на заказ",
  "размотка арматуры на заказ",
  "плазменная резка металла на заказ",
  "изготовление металлических изделий на заказ",
  "изготовление металлопродукции на заказ",
  "изготовление чёрного металла на заказ",
  "изготовление цветного металла на заказ",
  "изготовление нержавеющей стали на заказ",
  "изготовление оцинкованной стали на заказ",
  "изготовление метизов на заказ",
  "изготовление трубопроводной арматуры на заказ",
  "изготовление прецензионных сплавов на заказ",
  "размотка арматуры на заказ",
  "плазменная резка металла на заказ",
  "изготовление металлических компонентов",
  "изготовление металлических деталей",
  "изготовление металлических компонентов на заказ",
  "изготовление металлических деталей на заказ",
  "металлические компоненты для машиностроения",
  "металлические компоненты для авиации",
  "металлические компоненты для автомобилестроения",
  "металлические компоненты для электроники",
  "металлические компоненты для медицины",
  "металлические компоненты для энергетики",
  "металлические компоненты для строительства",
  "металлические компоненты для промышленности",
  "металлические компоненты для инфраструктуры",
  "металлические компоненты для нефтегазовой промышленности",
  "изготовление металлических компонентов на заказ",
  "изготовление металлических элементов на заказ",
  "изготовление металлических деталей на заказ",
  "металлические детали для машиностроения",
  "металлические детали для авиации",
  "металлические детали для автомобилестроения",
  "металлические детали для электроники",
  "металлические детали для медицины",
  "металлические детали для энергетики",
  "металлические детали для строительства",
  "металлические детали для промышленности",
  "металлические детали для инфраструктуры",
  "металлические детали для нефтегазовой промышленности",
  "изготовление метизов на заказ",
  "изготовление металлических элементов на заказ",
  "изготовление металлических деталей на заказ",
  "изготовление металлических компонентов",
  "изготовление металлических деталей",
  "производство металлических компонентов на заказ",
  "производство металлических элементов на заказ",
  "производство металлических деталей на заказ",
  "производство металлических компонентов",
  "производство металлических деталей",
];

export const metadata: Metadata = {
  title: "Главная",
  keywords: keywords,
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1050px] w-full">
        <MainSection />
        <Advantages />
      </div>
    </main>
  );
}
