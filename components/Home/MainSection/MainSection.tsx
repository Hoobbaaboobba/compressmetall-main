"use client";

import { Slider } from "./Slider";

const MainSection = () => {
  return (
    <section className="flex mt-16 relative justify-end items-center text-white bg-white">
      <main className="max-w-[1300px] h-[350px] w-full flex items-center">
        <Slider />
      </main>
    </section>
  );
};

export default MainSection;
