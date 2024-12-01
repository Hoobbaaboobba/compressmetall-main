import { Metadata } from "next";
import { SverlenieOtversteyVMetalleContent } from "@/app/moscow/services/sverlenie-otverstey-v-metalle/components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Сверление отверстей в металле',
  description: 'Компресс Металл предлагает услуги по сверлению отверстей в металле.',
}

export default function SverlenieOtversteyVMetalle() {
    return (
        <>
            <SverlenieOtversteyVMetalleContent />
        </>
    )
}
