import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface AdvantagesCardProps {
  image: string;
  topic: string;
  description: string;
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  image,
  topic,
  description,
}) => {
  return (
    <Card className="flex flex-col justify-center items-center gap-2 text-center w-full px-2 py-4 xl:hover:shadow-md transition duration-300">
      <div className="w-[60px] h-[60px]">
        <Image
          src={`/${image}.png`}
          alt={topic}
          width={60}
          height={60}
          priority
        />
      </div>
      <CardContent>
        <h3 className="text-xl font-medium">{topic}</h3>
        <p className="opacity-80 leading-5 text-md">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AdvantagesCard;
