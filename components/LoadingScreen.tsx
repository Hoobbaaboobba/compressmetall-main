"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    setLogo(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div
      className={`${
        loading ? "opacity-100 z-[200]" : "opacity-0"
      } fixed top-0 left-0 bg-white transition duration-500 w-full h-full px-8 flex justify-center items-center`}
    >
      <Image
        src="/loadingLogo.png"
        alt="loadingLogo"
        width={632}
        height={545}
        className={`${logo ? "scale-100" : "scale-0"} transition duration-300`}
      />
    </div>
  );
};

export default LoadingScreen;
