import Image from "next/image"
import { ServicesHeader } from "@/app/moscow/services/components/Header"
import { TypographyH3 } from "@/components/Global/Typography/TypographyH3"
import { TypographyP } from "@/components/Global/Typography/TypographyP"
import { TypographyList } from "@/components/Global/Typography/TypographyList"

export const GibkaMetallaContent = () => {
    return (
        <>
            <ServicesHeader title="Гибка металла" />
            <Image
                src="/gibka-metalla.png"
                className="mt-6"
                width={400}
                height={400}
                alt="Компресс Металл | Услуги | Гибка металла"
            />
            <TypographyP><strong>Гибка металла</strong> — это процесс деформации металлического листа или профильного материала с целью придания ему заданной формы без разрушения. Этот процесс широко используется в различных отраслях промышленности, таких как машиностроение, строительство, производство металлических конструкций, автомобильная и авиационная промышленность.</TypographyP>
            <TypographyP>Гибка металла является одним из основных методов обработки, который позволяет создавать детали и элементы сложной формы, такие как углы, изгибы, дуги и другие геометрические формы. В отличие от других методов, например, резки или сварки, гибка сохраняет однородность материала, минимизирует его потерю и обеспечивает прочность.</TypographyP>
            <TypographyH3>Принцип работы процесса гибки металла</TypographyH3>
            <TypographyP>Во время гибки металл подвергается воздействию внешней силы, которая изменяет его форму, заставляя материал изгибаться вокруг оси. Важно, чтобы при этом не произошел разрыв материала или его пластическая деформация за пределы упругости. Гибочный процесс может происходить при комнатной температуре (холодная гибка) или при нагреве материала (горячая гибка).</TypographyP>
            <TypographyH3>Виды гибки металла</TypographyH3>
            <TypographyList list={[
                "Холодная гибка",
                "Горячая гибка",
            ]}/>
            <TypographyH3>Оборудование для гибки металла</TypographyH3>
            <TypographyList list={[
                "Гибочные прессы",
                "Ручные и механические гибочные станки",
                "Гибочные вальцы",
                "Трубогибочные машины",
                "Шарнирные прессы",
            ]}/>
            <TypographyH3>Процесс гибки металла</TypographyH3>
            <TypographyList list={[
                "Подготовка материала",
                "Расчет угла и радиуса гибки",
                "Гибка металла",
                "Охлаждение или фиксация формы",
                "Проверка качества"
            ]}/>
            <TypographyP>Гибка металла — это один из важнейших процессов в современной металлургии и машиностроении. Она позволяет эффективно производить детали и элементы сложной формы, которые используются в самых разных отраслях. С помощью гибки можно создавать конструкции, которые обеспечивают как эстетическую привлекательность, так и прочностные характеристики.</TypographyP>
        </>
    )
}
