"use client";

import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface OurServicesCard {
  image: string;
  name: string;
  link: string;
  description: string;
}

const OurServicesCard: React.FC<OurServicesCard> = ({
  image,
  name,
  link,
  description,
}) => {
  const pathname = usePathname().split("/")

  return (
    <Link href={`/${pathname[1] || "moscow"}/services/${link}`} className="w-full hover:bg-white hover:shadow-md transition duration-300 flex flex-col bg-light-gray rounded-lg gap-4 p-6">
        <Image src={`${image}.png`} alt={`${name}`} className="rounded-md" width={100} height={60} />
        <div className="">
          <h1 className="text-lg font-bold text-dark">{name}</h1>
          <p className="opacity-80 text-sm">{description}</p>
        </div>
    </Link>
  );
};

export default OurServicesCard;
