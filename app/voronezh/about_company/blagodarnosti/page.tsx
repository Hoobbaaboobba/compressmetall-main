import { BlagodarnostiComponent } from "@/components/AboutCompany/Blagodarnosti/BlagodarnostiComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Благодарности",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

const BlagodarnostiPage = () => {
  return (
    <main>
      <BlagodarnostiComponent />
    </main>
  );
};

export default BlagodarnostiPage;
