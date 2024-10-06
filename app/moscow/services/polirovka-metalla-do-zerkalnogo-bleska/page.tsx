import { Metadata } from "next";
import { PolirovkaMetallaDoZerkalnogoBleskaContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Полировка металла до зеркального блеска',
  description: 'Компресс Металл предлагает услуги по производству и поставке полировки металла до зеркального блеска.',
}

export default function PolirovkaMetallaDoZerkalnogoBleska() {
    return (
        <>
            <PolirovkaMetallaDoZerkalnogoBleskaContent />
        </>
    )
}
