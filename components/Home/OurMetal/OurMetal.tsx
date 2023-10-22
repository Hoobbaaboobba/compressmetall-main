import Slider from "./Slider";

const OurMetal = () => {
  return (
    <section className="flex flex-col justify-start items-center w-full">
      <div className="w-full flex flex-col">
        <div className="w-full mb-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-black text-center xl:text-start">
            Хиты продаж
          </h2>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
        <div className="hidden lg:block">
          <Slider amountSlides={4} />
        </div>
        <div className="lg:hidden w-full sm:flex hidden justify-center items-center">
          <Slider amountSlides={2.5} />
        </div>
        <div className="flex sm:hidden justify-center items-center">
          <Slider amountSlides={1.75} />{" "}
        </div>
      </div>
    </section>
  );
};

export default OurMetal;
