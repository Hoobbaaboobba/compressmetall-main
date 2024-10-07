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
  variant?: string | string[];
}

const DynamicItem = ({
  img,
  label,
  variant,
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
      <div className={`flex ${variant === "list" ? "flex-row p-2" : "flex-col p-[10px] md:p-[20px]"} text-center w-full h-full justify-between items-center border border-light-gray gap-3 rounded-lg`}>
        <Image
          src={`/${img}.png`}
          alt={label}
          width={variant === "list" ? 64 : 128}
          height={variant === "list" ? 64 : 128}
        />
        <h3 className="text-sm">{sublabel}</h3>
        <OrangeButton label={"Подробнее"} mark />
      </div>
    </div>
  );
};

export default DynamicItem;
