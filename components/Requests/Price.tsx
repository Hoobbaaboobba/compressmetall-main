"use client";

import usePriceModal from "@/hooks/usePriceModal";
import OrderCall from "../Home/Header/OrderCall";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Price = () => {
  const { onClose, isOpen } = usePriceModal();

  const hidePrice = () => {
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
        onClick={hidePrice}
        className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
      ></div>
      <div className="relative z-50">
        <OrderCall
          placeHolder1={"Ваш номер телефона"}
          placeHolder2={"Товар"}
          firstType={"Номер телефона"}
          secondType={"Товар"}
        />
        <div onClick={hidePrice}>
          <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Price;
