"use client";

import OrangeButton from "@/components/OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";

const ShowButtonPrice = () => {
  const { onOpen } = usePriceModal();

  const showPrice = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };

  return (
    <div onClick={showPrice}>
      <OrangeButton label={"Запросить прайс"} />
    </div>
  );
};

export default ShowButtonPrice;
