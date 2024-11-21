import { ServicesHeader } from "@/app/moscow/services/components/Header"
import { TypographyP } from "@/components/Global/Typography/TypographyP";
import { TypographyList } from "@/components/Global/Typography/TypographyList";

const Advantages = [
    "Точность рубки и высокий уровень производительности",
    "Чистота резки, сохранение ровности края металла по резу",
    "Металлический лист не требует дополнительной обработки, например, шлифовки",
    "Минимизация расхода материалов, т.к. отсутствует металлическая стружка.",
    "Металл не нагревается, что упрощает дальнейший процесс обработки изделия",
]

export const RubkaMetallaGilotinojContent = () => {
    return (
        <div className="w-full">
            <ServicesHeader title="Рубка металла гилотиной"/>
            <TypographyP>Рубка металла гильотиной – это технология раскроя металла одним резом, которая обладает следующими преимуществами:</TypographyP>
            <TypographyList list={Advantages}/>
        </div>
    )
}
