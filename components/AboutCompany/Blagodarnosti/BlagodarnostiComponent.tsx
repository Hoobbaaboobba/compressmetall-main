import Image from "next/image";
import { ImageDialog } from "./ImageDialog";

export const BlagodarnostiComponent = () => {
  return (
    <section>
      <div className="w-full mb-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black text-center xl:text-start">
          Благодарности от наших клиентов
        </h1>
        <div className="bg-black h-[5px] w-[80px] mt-4"></div>
      </div>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        <ImageDialog
          width={462}
          height={641}
          image={"blagodarnosti.jpeg"}
          title={"Благодарность Шнайдер Станистлаву"}
        >
          <Image
            src="/blagodarnosti.jpeg"
            alt="Благодарность Станистлаву Шнайдеру"
            className=" cursor-zoom-in hover:shadow-md transition"
            width={252}
            height={350}
          />
        </ImageDialog>
      </div>
    </section>
  );
};
