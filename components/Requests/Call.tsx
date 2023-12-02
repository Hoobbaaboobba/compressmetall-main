"use client";

import useCallModal from "@/hooks/useCallModal";
import OrderCall from "../Home/Header/OrderCall";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Call = () => {
  const { onClose, isOpen } = useCallModal();

  const hideCall = () => {
    onClose();
    document.body.style.overflowY = "auto";
  };
  return (
    <div
      className={` ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center fixed top-0 left-0 z-[100] px-6 w-full h-[100vh]`}
    >
      <div
        onClick={hideCall}
        className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
      ></div>
      <div className="relative z-50">
        <OrderCall
          placeHolder1={"Ваше имя / Ваша компания"}
          placeHolder2={"Ваш номер телефона"}
          firstType={"Имя"}
          secondType={"Номер телефона"}
        />
        <div onClick={hideCall}>
          <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Call;
