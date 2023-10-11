import { Suspense } from "react";
import Loading from "./loading";
import OurContacts from "../../../components/Home/OurContacts/OurContacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Металлопрокат оптом и в розницу в Москве | Купить металл в компании Копресс металл недорого | Компресс металл | Контакты",
  description: "Продажа металлопроката в по всей территории России и СНГ",
};

type Props = {
  params: {
    location: string;
  };
};

export default function OurContactsPage({ params }: Props) {
  return (
    <main className="mt-8">
      <Suspense fallback={<Loading />}>
        <OurContacts />
      </Suspense>
    </main>
  );
}
