import AdvantagesCard from "./AdvantagesCard";

const Advantages = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-12 px-6 lg:px-auto">
        <AdvantagesCard
          image={"advantageHome"}
          topic={"Конкурентные цены"}
          description={
            "Компания предлагает конкурентоспособные цены на металлопрокат."
          }
        />
        <AdvantagesCard
          image={"advantageMetal"}
          topic={"Надежное партнерство"}
          description={
            "Длительные и успешные отношения c клиентами и партнерами."
          }
        />
        <AdvantagesCard
          image={"advatageStock"}
          topic={"Индивидуальный подход"}
          description={
            "Компания готова предложить индивидуальные решения для каждого клиента."
          }
        />
        <AdvantagesCard
          image={"advantageClock"}
          topic={"Быстрая доставка"}
          description={
            "Компания обеспечивает оперативную доставку заказанных товаров. "
          }
        />
        <AdvantagesCard
          image={"advantageCar"}
          topic={"Широкий выбор продукции "}
          description={
            "Компания предлагает разнообразные виды и размеры металлических изделий и конструкций."
          }
        />
        <AdvantagesCard
          image={"advantageMedal"}
          topic={"Контроль качества"}
          description={
            "Компания предлагает только качественную металлическую продукцию, которая соответствует всем стандартам и требованиям."
          }
        />
      </div>
    </section>
  );
};

export default Advantages;
