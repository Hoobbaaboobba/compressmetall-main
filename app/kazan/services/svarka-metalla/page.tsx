import { Metadata } from "next";
import { SvarkaMetallaContent } from "@/app/moscow/services/svarka-metalla/components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Сварка металла',
  description: 'Компресс Металл предлагает услуги по сварке металла.',
}

export default function SvarkaMetalla() {
    return (
        <>
            <SvarkaMetallaContent/>
        </>
    )
}
