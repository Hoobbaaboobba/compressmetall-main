import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface OurMetalCardProps {
  src: string;
  name: string;
  description: string;
  href: string;
}

const OurMetalCard: React.FC<OurMetalCardProps> = ({
  src,
  name,
  description,
  href,
}) => {
  const pathname = usePathname().split("/");

  return (
    <Link href={`/${pathname[1] || "moscow"}/catalog${href}`}>
      <div className="border border-light-gray h-[320px] w-[250px] rounded-xl flex flex-col justify-between items-center text-center gap-2 p-[20px] transitionr">
        <div className="relative">
          <div className="bg-orange-bg text-center text-white text-sm absolute -top-2 -left-2 px-1 rounded">
            хит
          </div>
          <Image src={`/${src}.png`} alt={name} width={160} height={160} />
        </div>
        <div>
          <p className="opacity-60 text-sm">{name}</p>
          <h2 className="text-sm ">{description}</h2>
        </div>
        <OrangeButton label={"Подробнее"} mark />
      </div>
    </Link>
  );
};

export default OurMetalCard;
