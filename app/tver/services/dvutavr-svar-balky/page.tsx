import { Metadata } from "next";
import { DvutavrSvarBalkyContent } from "@/app/moscow/services/dvutavr-svar-balky/components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Двутавровые сварные балки',
  description: 'Компресс Металл предлагает услуги по производству и поставке двутавровых сварных балок.',
}

export default function DvutavrSvarBalky() {
    return (
        <>
            <DvutavrSvarBalkyContent />
        </>
    )
}
