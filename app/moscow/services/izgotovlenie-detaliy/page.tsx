import { Metadata } from "next";
import { IzgotovlenieDetaliyContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Изготовление деталей',
  description: 'Компресс Металл предлагает услуги по изготовлению деталей.',
}

export default function IzgotovlenieDetaliy() {
    return (
        <>
            <IzgotovlenieDetaliyContent />
        </>
    )
}
