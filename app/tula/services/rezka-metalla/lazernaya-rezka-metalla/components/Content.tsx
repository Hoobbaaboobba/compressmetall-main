import { TypographyP } from "@/components/Global/Typography/TypographyP"
import { ServicesHeader } from "@/app/moscow/services/components/Header"
import { TypographyList } from "@/components/Global/Typography/TypographyList"
import { TypographyH2 } from "@/components/Global/Typography/TypographyH2"

const Analytics = [
    "серийное производство в промышленных масштабах",
    "высокая скорость обработки",
    "автоматизация процессов",
    "малая погрешность до 0,05 мм",
    "возможность обработки различных видов металлов",
    "изготовление простых и сложных изделий",
    "отсутствие дефектов в резе и деформации материала",
]

const Disadvantages = [
    "высокая стоимость",
    "ограничения по толщине металлического листа",
]

export const LazernayaRezkaMetallaContent = () => {
    return (
        <>
            <ServicesHeader title="Лазерная резка металла"/>
            <TypographyP>Лазерная резка металла – это современная технология обработки металла, основанная на прямонаправленном воздействии мощного лазерного луча. Весь процесс фокусировки и направления луча автоматизирован, что исключает возможность неточности и порчи обрабатываемого листа. Вне зависимости от первоначальных свойств листового металла, процесс резки лазером проходит качественно и предсказуемо в относительно краткие сроки.</TypographyP>
            <TypographyH2 className="mt-6">Преимущества лазерной резки:</TypographyH2>
            <TypographyList list={Analytics}/>
            <TypographyH2 className="mt-6">Недостатки лазерной резки:</TypographyH2>
            <TypographyList list={Disadvantages}/>
        </>
    )
}
