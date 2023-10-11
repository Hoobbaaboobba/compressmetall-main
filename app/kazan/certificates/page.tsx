import { Metadata } from "next";
import CertifiictesContent from "../../../components/Home/Certificates/CertifiictesContent";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Сертификаты",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

export default function CertificatesPage() {
  return (
    <main className="w-full mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-6 px-2">
        <CertifiictesContent />
      </div>
    </main>
  );
}
