"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import useRequestModal from "@/hooks/useRequestModal";
import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";

import sliderImageFactory from "../../../public/mainphoto.png";
import sliderImageMap from "../../../public/backgroundMap.png";
import sliderImageMetal from "../../../public/backgroundImage.png";

export const Slider = () => {
  const { onOpen, setDefaultValue } = useRequestModal();

  const showRequest = () => {
    setDefaultValue("request");
    onOpen();
    document.body.style.overflowY = "hidden";
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
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
    <div
      ref={sliderRef}
      className="keen-slider text-white w-full max-w-[1300px]"
    >
      <div className="keen-slider__slide slider1 relative w-full">
        <Image
          src={sliderImageFactory}
          alt="slider_img"
          quality={100}
          fill
          loading="eager"
          sizes="(max-width: 1300px), (height: 350px)"
          style={{
            objectFit: "cover",
            objectPosition: "60% 50%",
          }}
          placeholder="blur"
        />
        <div className="absolute top-[20%] sm:top-[30%] left-[5%] z-10 flex justify-start items-start flex-col gap-2 text-black px-2">
          <h1 className="uppercase text-2xl sm:text-4xl font-bold">
            широкий выбор <br /> металлургической продукции
          </h1>
          <p className="leading-5 font-bold text-sm sm:text-md ml-4 mr-5">
            Ознакомьтесь с нашим ассортиментом прямо сейчас и <br /> приобретите
            идеальные материалы для вашего успеха.
          </p>
          <div onClick={showRequest} className="mt-2">
            <OrangeButton label={"Оставить заявку"} />
          </div>
        </div>
      </div>
      <div className="keen-slider__slide slider2 relative w-full">
        <Image
          src={sliderImageMap}
          alt="slider_img"
          quality={100}
          fill
          loading="eager"
          sizes="(width: 100%), (height: 350px)"
          style={{
            objectFit: "cover",
            objectPosition: "60% 50%",
          }}
          placeholder="blur"
        />
        <div className="absolute top-[30%] left-[5%] z-10 flex justify-start items-start flex-col gap-2">
          <h1 className="uppercase text-2xl sm:text-4xl font-bold">
            Качественный металлопрокат: <br /> ваш надежный партнер
          </h1>
          <p className="leading-5 text-sm sm:text-md ml-4">
            Склад находится в г.Москва, Шоссе энтузиастов на <br /> территории
            компрессорного завода
          </p>
          <div onClick={showRequest} className="mt-2">
            <OrangeButton label={"Оставить заявку"} />
          </div>
        </div>
      </div>
      <div className="keen-slider__slide slider3 relative w-full">
        <Image
          src={sliderImageMetal}
          alt="slider_img"
          quality={100}
          fill
          loading="eager"
          sizes="(width:100%, (height: 350px)"
          style={{
            objectFit: "cover",
            objectPosition: "top right",
          }}
          placeholder="blur"
        />
        <div className="absolute top-[30%] left-[5%] z-10 flex justify-start items-start flex-col gap-2">
          <h1 className="uppercase text-2xl sm:text-4xl font-bold">
            Режем и продаём без остатка <br /> цветной металлопрокат
          </h1>
          <p className="leading-5 text-sm sm:text-md ml-4">
            Доверьтесь качеству и опыту – выберите идеальные <br /> материалы
            для ваших задач.
          </p>
          <div onClick={showRequest} className="mt-2">
            <OrangeButton label={"Оставить заявку"} />
          </div>
        </div>
      </div>
    </div>
  );
};
