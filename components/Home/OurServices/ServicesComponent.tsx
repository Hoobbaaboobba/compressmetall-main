"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import OurContacts from "../../../components/Home/OurContacts/OurContacts";
import useRequestModal from "@/hooks/useRequestModal";

const ServicesComponent = () => {
  const { onOpen, setDefaultValue } = useRequestModal();

  const showRequest = () => {
    setDefaultValue("request");
    onOpen();
    document.body.style.overflowY = "auto";
  };

  return (
    <main>
      <div className="w-full p-6 z-50">
        <div className="max-w-[600px] my-4">
          <h1>
            ООО &ldquo;КОМПРЕССМЕТАЛ&rdquo; предлагает к реализации
            невостребованные остатки металла от производства по оптовым ценам.
            Чтобы купить металл по сниженным ценам, ознакомьтесь с Прайсом на:
          </h1>
          <ul className="flex flex-col my-3">
            <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
              обрез металла
            </li>
            <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
              невостребованный металлопрокат
            </li>
            <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
              неликвиды металла
            </li>
          </ul>
          <h2>
            Возможен самовывоз или доставка.Цены ниже рыночных.По каждой позиции
            можно получить консультацию менеджера и оформить заказ в любой
            удобной вам форме:
          </h2>
        </div>
        <div className="z-50">
          <button
            onClick={showRequest}
            className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
          >
            Оставить заявку
            <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
          </button>
        </div>
        <OurContacts />
      </div>
    </main>
  );
};

export default ServicesComponent;
