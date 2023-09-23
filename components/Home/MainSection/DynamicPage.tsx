"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import OrangeButton from "@/components/OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";

interface DynamicPageProps {
  category: string;
  id: string;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ category, id }) => {
  const { onOpen } = usePriceModal();

  const showPrice = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };

  const params = useSearchParams();
  const image = params.get("i") || "";
  const isInStock = params.get("q") || "";
  const amount = params.get("amount") || "";
  return (
    <div className="max-w-[1000px] w-full flex flex-col gap-4 px-4">
      <h1 className="text-xl font-bold text-center md:text-start text-gray-bg">
        {category}
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 ">
        <Image
          src={require(`../../../public/${image}.png`)}
          alt={category}
          width={400}
          height={250}
          className="border border-light-gray rounded-[15px]"
          placeholder="blur"
        />
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <h1 className="text-lg max-w-[400px] text-center">{id}</h1>
          <h2 className="opacity-60">
            {isInStock} (<span className="text-orange-bg">{amount}</span>)
          </h2>
          <div onClick={showPrice}>
            <OrangeButton label={"Запросить прайс"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
