"use client";

import CatalogItem from "./Home/MainSection/CatalogItem";
("./Home/MainSection/productsData");

import OurContacts from "./Home/OurContacts/OurContacts";
import useCatalogModal from "@/hooks/useCatalogModal";
import OrangeButton from "./OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";
import Link from "next/link";
import useRequestModal from "@/hooks/useRequestModal";
import { usePathname } from "next/navigation";
import { metalArray } from "./Home/MainSection/data";

import Image from "next/image";

const ViewCatalog = () => {
  const {
    isOpenCatalog,
    onCloseCatalog,
    typeOfMenu,
    changeTypeOfMenu,
    onCloseMenu,
  } = useCatalogModal();

  const pathname = usePathname().split("/");
  const { onOpen } = usePriceModal();
  const { onOpen: onOpenRequest } = useRequestModal();

  const showPrice = () => {
    onOpen();
    document.body.style.overflowY = "hidden";
  };

  const showRequest = () => {
    onOpenRequest();
    document.body.style.overflowY = "hidden";
  };

  const onClickLink = () => {
    changeTypeOfMenu("");
    onCloseCatalog();
    onCloseMenu();
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div
        className={`fixed ${
          isOpenCatalog ? "translate-y-0" : "translate-y-[-120%]"
        } left-0 top-
        0 h-[100dvh] w-full bg-white z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-auto p-5 pb-[160px] sm:px-8 transition duration-200 xl:hidden gap-1`}
      >
        {metalArray.map((card, index) => (
          <>
            <div key={index} onClick={() => changeTypeOfMenu(card.label)}>
              <CatalogItem src={card.img} label={card.label} bold="" />
            </div>
            <div
              className={`bg-white left-0 top-0 ml-0 ${
                typeOfMenu === card.label
                  ? "translate-y-0"
                  : "translate-y-[-120%]"
              } fixed z-50 p-4 pb-[150px] lg:pb-12 border w-full h-full overflow-x-hidden overflow-y-auto transition duration-200`}
            >
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h1 className="text-3xl font-bold uppercase">{card.label}</h1>
                <div onClick={showPrice}>
                  <OrangeButton label={"Уточнить размер или цены"} />
                </div>
              </div>
              <hr className="w-full my-4" />
              {card.items.length !== 0 ? (
                <div
                  className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 `}
                >
                  {card.items.map((metal) => (
                    <Link
                      onClick={onClickLink}
                      href={`/${pathname[1] || "moscow"}/catalog?q=${encodeURI(
                        metal.name
                      )}`}
                      className="hover:shadow-md"
                    >
                      <Image
                        src={require(`../public/${metal.img}.png`)}
                        alt={card.label}
                        width={240}
                        height={280}
                        placeholder="blur"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="w-full p-4 flex flex-col gap-4">
                  {card.label === "Резка металла в размер" ? (
                    <div className="">
                      <h1 className="text-xl">
                        На нашем предприятии вы можете заказать резку
                        металлопроката в размер, основными направлениями резки
                        являются:
                      </h1>
                      <ul className="mt-4 ml-6 flex flex-col gap-4">
                        <li className="dot">
                          Резка труб в размер (позволяет получить отрезок трубы
                          заданного размера для дальнейшего использования в
                          производстве)
                        </li>
                        <li className="dot">
                          Резка кругов в размер (наше оборудование позволяет
                          резать круги до 420 мм)
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
                  {card.label === "Покраска" ? (
                    <div className="">
                      <h1 className="text-xl">
                        Опытные мастера утверждают, что успех покраски
                        металлических изделий на 80% зависит от качества
                        подготовки поверхности. Мы расскажем о главных тонкостях
                        подготовки металла и сушки краски, чтобы результат
                        радовал вас максимально долго.
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
                  {card.label === "Размотка арматуры" ? (
                    <div className="">
                      <h1 className="text-xl">
                        Размотка арматуры представляет собой технологический
                        процесс, в ходе которого продукция в бухтах (катушках)
                        распускается на прутки необходимой длины. Работы
                        проводятся на специальных станах, рассчитанных на
                        качественную обработку проката различного диаметра.
                        Оборудование исключает повреждение и деформацию металла,
                        в т. ч. скручивание по оси, влияющие на эксплуатационные
                        характеристики, гарантируя оптимальные показатели
                        геометрии. Оборудование для размотки арматуры состоят из
                        таких узлов, как:
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
                  {card.label === "Остатки" ? (
                    <div className="">
                      <h1 className="text-xl">
                        ООО "КОМПРЕССМЕТАЛ" предлагает к реализации
                        невостребованные остатки металла от производства по
                        оптовым ценам. Чтобы купить металл по сниженным ценам,
                        ознакомьтесь с Прайсом на:
                      </h1>
                      <ul className="mt-4 ml-6 flex flex-col gap-4">
                        <li className="dot">Обрезь металла;</li>
                        <li className="dot">Невостребованный металлопрокат;</li>
                        <li className="dot">Неликвиды металла.</li>
                      </ul>
                      <p className="mt-3">
                        Возможен самовывоз или доставка.Цены ниже рыночных.По
                        каждой позиции можно получить консультацию менеджера и
                        оформить заказ в любой удобной вам форме:
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
          </>
        ))}
      </div>
    </>
  );
};

export default ViewCatalog;
