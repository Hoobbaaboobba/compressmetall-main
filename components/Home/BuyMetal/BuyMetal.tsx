"use client";

import Image from "next/image";
import OrangeButton from "@/components/OrangeButton";
import useRequestModal from "@/hooks/useRequestModal";

const BuyMetal = () => {
  const { onOpen } = useRequestModal();

  const showRequest = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };
  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-[1000px] w-full text-center flex flex-col justify-center items-center sm:text-start px-4">
        <div>
          <div className="w-full mb-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-black text-center xl:text-start">
              Порядок покупки металлопроката
            </h2>
            <div className="bg-black h-[5px] w-[80px] my-4"></div>
          </div>
          <div className="mb-6">
            <Image
              src="/buyProcess1.jpg"
              alt="buy-process"
              className="hidden sm:block"
              width={1000}
              height={60}
            />
            <Image
              src="/buyProcess2.png"
              alt="buy-process"
              className="block sm:hidden"
              width={500}
              height={600}
            />
          </div>
        </div>
        <div
          onClick={showRequest}
          className="w-full flex justify-center items-center text-white"
        >
          <OrangeButton label={"Оставить заявку"} />
        </div>
      </div>
    </section>
  );
};

export default BuyMetal;
