"use client";

import CatalogItem from "./CatalogItem";

import { useState } from "react";
import Link from "next/link";
import OurContacts from "../OurContacts/OurContacts";

import OrangeButton from "@/components/OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";
import useRequestModal from "@/hooks/useRequestModal";
import { usePathname } from "next/navigation";
import Image from "next/image";

export interface ProductsProps {
  label: string;
  buttonImg: string;
  item: {
    name: string;
    img: string;
    items: {
      variant: string;
      img: string;
      items: {
        title: string;
      }[];
    }[];
  }[];
}

const HoverMenuItem: React.FC<ProductsProps> = ({ label, buttonImg, item }) => {
  const [hover, setHover] = useState(false);

  const pathname = usePathname().split("/");

  const { onOpen } = usePriceModal();
  const { onOpen: onOpenRequest } = useRequestModal();

  const showPrice = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };

  const showRequest = () => {
    onOpenRequest(), (document.body.style.overflowY = "hidden");
  };

  return (
    <>
      <div
        className="flex"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link
          href={`/${pathname[1] || "moscow"}/catalog?q=${encodeURI(label)}`}
          onClick={() => setHover(false)}
        >
          <CatalogItem src={buttonImg} label={label} bold="" />
        </Link>
        <div
          className={`${
            hover ? "flex" : "hidden"
          } flex-col fixed top-[137px] bg-white ml-[232px] p-4 w-[1100px] border border-light-gray overflow-y-auto h-[81vh]`}
        >
          <div className="flex w-full justify-between items-center">
            <h1 className="text-4xl font-bold uppercase">{label}</h1>
            <div onClick={showPrice}>
              <OrangeButton label={"Уточнить размер или цены"} mark />
            </div>
          </div>
          <hr className="w-full my-4" />
          {item.length !== 0 ? (
            <div className={`grid grid-cols-4 gap-8`}>
              {item.map((metal) => (
                <Link
                  onClick={() => setHover(false)}
                  href={`/${pathname[1] || "moscow"}/catalog?q=${encodeURI(
                    metal.name
                  )}`}
                  className="hover:shadow-md"
                >
                  <Image
                    src={require(`../../../public/${metal.img}.png`)}
                    alt={label}
                    width={240}
                    height={280}
                    placeholder="blur"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full p-4 flex flex-col gap-4">
              {label === "Резка металла в размер" ? (
                <div className="">
                  <h1 className="text-xl">
                    На нашем предприятии вы можете заказать резку металлопроката
                    в размер, основными направлениями резки являются:
                  </h1>
                  <ul className="mt-4 ml-6 flex flex-col gap-4">
                    <li className="dot">
                      Резка труб в размер (позволяет получить отрезок трубы
                      заданного размера для дальнейшего использования в
                      производстве)
                    </li>
                    <li className="dot">
                      Резка кругов в размер (наше оборудование позволяет резать
                      круги до 420 мм)
                    </li>
                    <li className="dot">
                      Резка проката в размер (в том числе для производства
                      полосы)
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {label === "Покраска" ? (
                <div className="">
                  <h1 className="text-xl">
                    Опытные мастера утверждают, что успех покраски металлических
                    изделий на 80% зависит от качества подготовки поверхности.
                    Мы расскажем о главных тонкостях подготовки металла и сушки
                    краски, чтобы результат радовал вас максимально долго.
                  </h1>
                  <ul className="mt-4 ml-6 flex flex-col gap-4">
                    <li className="dot">Этап 1: Очищение поверхности</li>
                    <li className="dot">Этап 2: Грунтование</li>
                    <li className="dot">Этап 3: Покраска и сушка</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {label === "Размотка арматуры" ? (
                <div className="">
                  <h1 className="text-xl">
                    Размотка арматуры представляет собой технологический
                    процесс, в ходе которого продукция в бухтах (катушках)
                    распускается на прутки необходимой длины. Работы проводятся
                    на специальных станах, рассчитанных на качественную
                    обработку проката различного диаметра. Оборудование
                    исключает повреждение и деформацию металла, в т. ч.
                    скручивание по оси, влияющие на эксплуатационные
                    характеристики, гарантируя оптимальные показатели геометрии.
                    Оборудование для размотки арматуры состоят из таких узлов,
                    как:
                  </h1>
                  <ul className="mt-4 ml-6 flex flex-col gap-4">
                    <li className="dot">
                      Блок управления, который позволяет задать необходимые
                      параметры;
                    </li>
                    <li className="dot">Правильно-отрезной сектор;</li>
                    <li className="dot">
                      Место для приема и упаковывания прутков.
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {label === "Остатки" ? (
                <div className="">
                  <h1 className="text-xl">
                    ООО "КОМПРЕССМЕТАЛ" предлагает к реализации невостребованные
                    остатки металла от производства по оптовым ценам. Чтобы
                    купить металл по сниженным ценам, ознакомьтесь с Прайсом на:
                  </h1>
                  <ul className="mt-4 ml-6 flex flex-col gap-4">
                    <li className="dot">Обрезь металла;</li>
                    <li className="dot">Невостребованный металлопрокат;</li>
                    <li className="dot">Неликвиды металла.</li>
                  </ul>
                  <p className="mt-3">
                    Возможен самовывоз или доставка.Цены ниже рыночных.По каждой
                    позиции можно получить консультацию менеджера и оформить
                    заказ в любой удобной вам форме:
                  </p>
                </div>
              ) : (
                ""
              )}
              <div onClick={showRequest} className="mt-2">
                <OrangeButton label={"Оставить заявку"} />
              </div>
              <OurContacts />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HoverMenuItem;
