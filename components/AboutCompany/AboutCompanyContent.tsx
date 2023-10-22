"use client";
import { products } from "@/app/api/products/products";
import Image from "next/image";

const AboutCompanyContent = () => {
  return (
    <div className="max-w-[1300px] w-full flex flex-col gap-4">
      <div className="w-full mb-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black text-center xl:text-start">
          О компании
        </h1>
        <div className="bg-black h-[5px] w-[80px] mt-4"></div>
      </div>
      <div className="flex flex-col justify-center items-center text-center lg:flex-row gap-8 xl:gap-12">
        <Image
          src={require(`../../public/aboutComponyPhoto.png`)}
          alt="about_company_image"
          width="600"
          height="520"
          placeholder="blur"
        />
        <div className="flex flex-col gap-2">
          Добро пожаловать в мир «Компресс металл» - вашего идеального партнера
          для всех потребностей в металлопрокате!
          <p>
            Мы знаем, что каждый успешный проект начинается с выбора правильных
            материалов. У нас вы найдете самый широкий ассортимент
            высококачественного металлопроката, который подойдет именно для
            вашего уникального задания. Наше качество безупречно, и мы не делаем
            компромиссов, когда речь заходит о вашей безопасности и успехе.
          </p>
          <p>
            С нами работает команда профессионалов, которая готова превзойти
            ваши ожидания. Наши консультанты всегда на связи, чтобы помочь вам
            подобрать оптимальные решения для вашего проекта. Мы не только
            продаем металлопрокат, мы создаем возможности, которые приводят к
            выдающимся результатам.
          </p>
          <p>
            И самое замечательное - у нас доступные цены! Мы ценим каждого
            клиента и готовы предложить вам гибкие условия сотрудничества.
            Потому что ваш успех - это наш успех.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col">
        {products.map((product) =>
          product.id.map(
            (ids) =>
              `{
                id: ['${product.type}', '${product.category}', '${product.variety}', '${ids}', '${product.ENGSize[0]}']
              },`
          )
        )}
      </div> */}
    </div>
  );
};

export default AboutCompanyContent;
