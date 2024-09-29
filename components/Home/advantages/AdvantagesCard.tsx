import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { AdvantagesLink } from "./AdvantagesLink";

interface AdvantagesCardProps {
  image: string;
  topic?: string;
  description?: string;
  widthImg?: number;
  heightImg?: number;
  big?: boolean;
  link: string;
  price?: boolean
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  image,
  topic,
  description,
  widthImg,
  heightImg,
  big,
  link,
  price
}) => {
  return (
    <Card className={`flex flex-col gap-2 relative ${big && "xl:items-end sm:justify-center"} cursor-pointer w-full h-full bg-light-gray p-6 border-none hover:shadow-md hover:bg-white hover:border transition duration-500`}>
      <div className={`w-[60px] h-[60px] ${big && "md:absolute top-8 right-8"} `}>
        <Image src={image} alt="advantages" width={widthImg} height={heightImg} />
      </div>
      <CardContent className={!big ? "p-0" : "p-0 sm:p-auto"}>
        <h3 className={`${big ? "text-2xl xl:text-3xl": "text-lg"} font-bold`}>{topic}</h3>
        <p className={`opacity-80 leading-5 text-sm xl:text-md`}>{description}</p>
      </CardContent>
      <AdvantagesLink link={link} price={price || false}/>
    </Card>
  );
};

export default AdvantagesCard;
