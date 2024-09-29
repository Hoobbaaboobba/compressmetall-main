import OurAdvantagesCard from "./OurAdvantagesCard";

const OurAdvantages = () => {
  return (
    <section className="bg-gray-bg w-full px-8 py-[50px] text-white flex justify-center items-center">
      <div className="flex flex-col max-w-[1300px]">
        <div className="my-[50px] flex flex-col gap-4 text-center xl:text-start">
          <h1 className="text-4xl font-bold">Наши преимущества</h1>
          <p className="text-center xl:text-start">
            Осуществляем плазменную порезку металлопроката любой марки и сплава{" "}
            <br />
            на высокоточном станке ЧПУ
          </p>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-between items-center gap-16 md:gap-4">
          <OurAdvantagesCard
            icon={"consultant"}
            name={"Личный консультант"}
            description={
              "За каждым клиентом закреплен персональный менеджер, который поможет разобраться в номенклатуре металлопроката, правильно определить потребность, оформить и завершить сделку"
            }
          />
          <OurAdvantagesCard
            icon={"garant"}
            name={"Гарантия высокого качества продукции"}
            description={
              "Металлопрокат проходит все стадии контроля качества и соответствия установленным нормам, имеет подтверждающие сертификаты, прилагаемые к каждой партии изделий"
            }
          />
          <OurAdvantagesCard
            icon={"delivery"}
            name={"Быстрая перевозка"}
            description={
              "Доставка металлопроката по Санкт Петербургу, Ленинградской области и Северо-Западному региону осуществляется своим грузовым транспортом, что существенно экономит время поставки"
            }
          />
          <OurAdvantagesCard
            icon={"sclad"}
            name={"Большой выбор металлопроката"}
            description={
              "Особые условия для оптовых и постоянных клиентов, привлекательные условия оплаты и расчет с отсрочкой"
            }
          />
          <OurAdvantagesCard
            icon={"orient"}
            name={"Ориентированность на клиента"}
            description={
              "Ассортимент наименований продукции включает более 10 000 позиций товара. Каждый найдет искомый сортамент металлопроката в списке доступных изделий"
            }
          />
          <OurAdvantagesCard
            icon={"like"}
            name={"Прозрачность и открытость"}
            description={
              "Отсутствие скрытых платежей и дополнительных условий, прозрачные условия сотрудничества, закрепленные договором."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
