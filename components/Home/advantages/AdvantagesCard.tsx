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
    <div className="flex flex-col justify-center items-center gap-2 text-center w-full border-b-2 border-b-zinc-400 py-4">
      <div className="w-[60px] h-[60px]">
        <Image
          src={`/${image}.png`}
          alt={topic}
          width={60}
          height={60}
          priority
        />
      </div>
      <h3 className="text-xl font-medium">{topic}</h3>
      <p className="opacity-80 leading-5 text-md">{description}</p>
    </div>
  );
};

export default AdvantagesCard;
