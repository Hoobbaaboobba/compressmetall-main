"use client";

import useLocationModal from "@/hooks/useLocationModal";
import { certificates } from "./certificatesData";
import Image from "next/image";
import Link from "next/link";

const CertifiictesContent = () => {
  return (
    <>
      {certificates.map((certificate, index) => (
        <Link key={index} href={`/${certificate}`} target="_blank">
          <div className="cursor-pointer w-full h-full flex flex-col items-center hover:scale-105 transition duration-200">
            <Image
              src="/certificate.svg"
              alt={certificate}
              width={130}
              height={130}
            />
            <h1 className="text-md text-gray-bg font-bold text-center">
              {certificate}
            </h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CertifiictesContent;
