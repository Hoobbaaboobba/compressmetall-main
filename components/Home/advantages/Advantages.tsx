import AdvantagesCard from "./AdvantagesCard";

const Advantages = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[1300px] flex flex-col xl:flex-row w-full px-4 xl:px-0 gap-4 pt-16 mx-6">
        <div className="flex flex-col w-full xl:max-w-[500px] gap-4">
            <div className="w-full sm:h-[200px]">
                <AdvantagesCard link="/services" big image="/service-icon.svg" topic="Наши услуги" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={60} heightImg={60}/>
            </div>
            <div className="w-full sm:h-[200px] flex flex-col sm:flex-row gap-4">
                <AdvantagesCard link="/about_company/partners" image="/partners-icon.svg" topic="Партнеры" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={50} heightImg={50}/>
                <AdvantagesCard link="/about_company/requisites"image="/details-icon.svg" topic="Реквизиты" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={50} heightImg={50}/>
            </div>
        </div>
        <div className="w-full flex flex-col gap-4">
            <div className="w-full md:h-[200px] flex flex-col md:flex-row gap-4">
                <AdvantagesCard price link="/services"image="/price-icon.svg" widthImg={50} topic="Прайс" description="Оставьте заявку, и наши менеджеры свяжутся с вами" heightImg={50}/>
                <AdvantagesCard link="/directory/marki_stali"image="/book-icon.svg" topic="Справочник КМ" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={50} heightImg={50}/>
                <AdvantagesCard link="/contacts"image="/contacts-icon.svg" topic="Наши контакты" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={50} heightImg={50}/>
            </div>
            <div className="w-full gap-4 flex flex-col sm:flex-row sm:h-[200px]">
                <AdvantagesCard link="/about_company/vacancies"image="/work-icon.svg" topic="Трудоустройство" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={50} heightImg={50}/>
                <AdvantagesCard link="/about_company"image="/company-icon.svg" topic="Наша компания" description="Услуги для физических лиц и компаний в строительной индустрии" widthImg={50} heightImg={50}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
