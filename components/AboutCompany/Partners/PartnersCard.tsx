import Image from "next/image";

interface PartnersProps {
    src: string;
    label: string;
}

const PartnersCard: React.FC<PartnersProps> = ({ src, label }) => {
    return (
        <div
            className="w-[220px] h-[150px] border border-light-gray rounded-xl overflow-y-hidden bg-white flex justify-center items-center"
        >
            <Image src={`/${src}.png`} alt={label} width={label === "ММК" ? 140 : 180} height={150} />
        </div>
    );
};

export default PartnersCard;
