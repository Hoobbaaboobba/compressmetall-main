import OrangeButton from "@/components/OrangeButton";
import OurServicesCard from "./OurServicesCard";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center">
      <div className="">
        <div className="w-full mb-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-black text-center xl:text-start">
            Наши услуги
          </h2>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
        <div className="flex flex-col w-full gap-4 justify-center items-center">
            <div className="flex gap-4 flex-col md:flex-row">
          <OurServicesCard
            image={"/rezka-metalla"}
            name={"Резка металла"}
            link={"rezka-metalla"}
            description={
              "Осуществляем плазменную порезку металлопроката любой марки и сплава на высокоточном станке ЧПУ"
            }
          />
          <OurServicesCard
            image={"/struynaya-obrabotka-metalla"}
            name={"Струйная обработка металла"}
            link={"struynaya-obrabotka-metalla"}
            description={
              "Гильотинная рубка листового проката различной толщины на профессиональном оборудовании TRUMPF (пр-во Германия)"
            }
          />
          <OurServicesCard
            image={"/polirovka-metalla-do-zerkalnogo-bleska"}
            name={"Полировка металла до зеркального блеска"}
            link={"polirovka-metalla-do-zerkalnogo-bleska"}
            description={
              "Механизированная размотка, правка в линейную форму и порезка на стержни утвержденной длины проволоки и арматуры"
            }
          />
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
          <OurServicesCard
            image={"/pokraska-metalla"}
            name={"Покраска металла"}
            link={"pokraska-metalla"}
            description={
              "Механизированная размотка, правка в линейную форму и порезка на стержни утвержденной длины проволоки и арматуры"
            }
          />
          <OurServicesCard
            image={"/gibka-metalla"}
            name={"Гибка металла"}
            link={"gibka-metalla"}
            description={
              "Механизированная размотка, правка в линейную форму и порезка на стержни утвержденной длины проволоки и арматуры"
            }
          />
          <OurServicesCard
            image={"/sverlenie-otverstyy-v-metalle"}
            name={"Сверление отверстей в металле"}
            link={"sverlenie-otverstey-v-metalle"}
            description={
              "Механизированная размотка, правка в линейную форму и порезка на стержни утвержденной длины проволоки и арматуры"
            }
          />
          </div>
          <Link className="mt-4" href={"/moscow/services"}>
            <OrangeButton label="Все услуги"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
