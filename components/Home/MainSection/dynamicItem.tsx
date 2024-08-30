import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";
import { LinkButton } from "./Link";

interface DynamicProps {
  img: string;
  label: string;
  sublabel: string;
  topic?: string[];
  href: string;
  category?: string;
  variety?: string;
  id?: string;
  size?: string;
}

const DynamicItem = ({
  img,
  label,
  topic,
  sublabel,
  href,
  category,
  variety,
  id,
  size,
}: DynamicProps) => {
  return (
    <div className="relative">
      <LinkButton
        catalog
        type={href}
        category={category}
        id={id}
        size={size}
        variety={variety}
      />
      <div className="flex flex-col text-center w-full h-full justify-between items-center border border-light-gray p-[10px] md:p-[20px] gap-3 rounded-lg">
        <Image
          src={`/${img}.png`}
          alt={label}
          width={160}
          height={128}
        />
        <h3 className="text-sm">{sublabel}</h3>
        <OrangeButton label={"Подробнее"} mark />
      </div>
    </div>
  );
};

export default DynamicItem;
