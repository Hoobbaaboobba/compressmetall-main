import { Metadata } from "next";
import { ProizvodstvoStalnyhDetaleyContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Производство стальных деталей',
  description: 'Компресс Металл предлагает услуги по производству стальных деталей.',
}

export default function ProizvodstvoStalnyhDetaley() {
    return (
        <>
            <ProizvodstvoStalnyhDetaleyContent/>
        </>
    )
}
