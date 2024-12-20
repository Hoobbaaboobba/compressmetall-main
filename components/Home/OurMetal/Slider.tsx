"use client";

import OurMetalCard from "./OurMetalCard";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

interface SliderProps {
  amountSlides: number;
}

const brandNew = [
  {
    title: "Лента бронзовая",
    label: "БрАМц9-2",
    img: "lentaBronze",
    isInStock: "Имеется в наличии",
    href: "/tsvetnoi-prokat/bronze/lenta/БрАМц9-2/0.05mm?label=Лента%20бронзовая",
  },
  {
    title: "Алюминий",
    label: "Труба алюминиевая 1050",
    img: "pipeAlum",
    isInStock: "Имеется в наличии",
    href: "/tsvetnoi-prokat/aluminum/pipe/1050/6mm?label=Труба%20алюминиевая",
  },
  {
    title: "Медь",
    label: "Лента медная",
    img: "lentaCopper",
    isInStock: "Имеется в наличии",
    href: "/tsvetnoi-prokat/copper/lenta/М0б/0.05mm?label=Лента%20медная",
  },
  {
    title: "Латунь",
    label: "Шестигранник латунный",
    img: "hexagonBrass",
    isInStock: "Имеется в наличии",
    href: "/tsvetnoi-prokat/brass/hexagon/Л59/3mm?label=Шестигранник%20латунный",
  },
  {
    title: "Трубы нержавеющие",
    label: "Труба нержавеющая AISI 201",
    img: "trubaNershav",
    isInStock: "Имеется в наличии",
    href: "/nershav-prokat/truba-nershav/pipe/AISI%20201/6mm?label=Трубы%20нержавеющие",
  },
  {
    title: "Оцинкованная сетка",
    label: "Сетка оцинкованная сварная",
    img: "gridZinc",
    isInStock: "Имеется в наличии",
    href: "/cherniy-prokat/zinc/grid-svar/08пс/0.4х0.4mm?label=Сетка%20оцинкованная%20сварная",
  },
];

const Slider: React.FC<SliderProps> = ({ amountSlides }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: amountSlides,
        spacing: 40,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider px-4 overflow-x-hidden">
      {brandNew.map((card, index) => (
        <div key={index} className={`keen-slider__slide number-slide${index}`}>
          <OurMetalCard
            src={card.img}
            name={card.title}
            description={card.label}
            href={card.href || ""}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
