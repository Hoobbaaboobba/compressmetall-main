"use client";

import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname().split("/");
  return (
    <div className="relative">
      <Link
        href={`/${pathname[1]}/catalog/${href}/${category || ""}/${
          variety || ""
        }/${id || ""}/${size || ""}`}
        className="absolute top-0 left-0 w-full h-full"
      ></Link>
      <div className="flex flex-col text-center w-full h-full justify-between items-center border border-light-gray p-[10px] md:p-[20px] gap-4 rounded-lg">
        <Image
          src={require(`../../../public/${img}.png`)}
          alt={label}
          width={160}
          height={128}
          placeholder="blur"
        />
        <h3>{sublabel}</h3>
        <OrangeButton label={"Подробнее"} mark />
      </div>
    </div>
  );
};

export default DynamicItem;
