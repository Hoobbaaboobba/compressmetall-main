"use client";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import Image from "next/image";
import OrangeButton from "@/components/OrangeButton";
import useCallModal from "@/hooks/useCallModal";
import { addresses } from "@/addresses";
import { usePathname } from "next/navigation";

const OurContacts = () => {
  const { onOpen } = useCallModal();

  const pathname = usePathname().split("/");

  const showCall = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center px-4 xl:px-0">
        <div className="max-w-[1000px] w-full flex flex-col-reverse lg:flex-row gap-8 justify-center items-center lg:justify-between my-8">
          <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start">
            <h3 className="text-gray-bg font-bold text-xl">Наши контакты</h3>
            <div className="max-w-[350px] flex flex-col justify-center items-center xl:justify-start xl:items-start gap-4 my-4">
              {addresses.map((address) => {
                return (
                  <>
                    {pathname[1] === address.id && (
                      <div className="flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
                        <PlaceOutlinedIcon className="text-orange-bg" />
                        <p className="text-gray-bg text-center xl:text-start">
                          {address.address}
                        </p>
                      </div>
                    )}
                  </>
                );
              })}
              <div className="flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
                <LocalPhoneOutlinedIcon className="text-orange-bg" />
                <div className="flex flex-col text-center xl:text-start">
                  <p className="font-bold text-gray-bg">+7 (495) 116-66-86</p>
                  <p className="text-gray-bg">Пн. – Пт.: с 9:00 до 18:00</p>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
                <EmailOutlinedIcon className="text-orange-bg" />
                <p className="font-bold text-gray-bg text-center xl:text-start">
                  info@kometal.ru
                </p>
              </div>
              <div onClick={showCall}>
                <OrangeButton label={"Заказать звонок"} />
              </div>
            </div>
          </div>
          <Image
            src={require("../../../public/mapImage.png")}
            alt={"карта завода компресс металл"}
            width={690}
            height={308}
            placeholder="blur"
          />
          {/* <YMaps>
          <Map
            defaultState={{ center: [55.750449, 37.730967], zoom: 11 }}
            width={350}
            height={350}
          >
            <Placemark defaultGeometry={[55.750449, 37.730967]} />
          </Map>
        </YMaps> */}
        </div>
        <hr />
      </section>
    </>
  );
};

export default OurContacts;
