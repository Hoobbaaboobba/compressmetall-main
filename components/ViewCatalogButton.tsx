"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useCatalogModal from "@/hooks/useCatalogModal";

const ViewCatalogButton = () => {
  const { typeOfMenu, onOpenCatalog, changeTypeOfMenu, isOpenCatalog } =
    useCatalogModal();

  const showCatalog = () => {
    if (typeOfMenu === "") {
      onOpenCatalog();
      document.body.style.overflowY = "auto";
    }
    if (typeOfMenu) {
      changeTypeOfMenu("");
      document.body.style.overflowY = "auto";
    }
  };
  return (
    <button
      onClick={showCatalog}
      className="w-full boxshadow z-[11] text-white py-4 bg-orange-bg backdrop-blur-md fixed bottom-[0vh] left-0 xl:hidden underline"
    >
      {isOpenCatalog && typeOfMenu && "Назад"}
      {isOpenCatalog && typeOfMenu === "" && "Закрыть каталог"}
      {isOpenCatalog === false && typeOfMenu === "" && "Посмотреть каталог"}
      {isOpenCatalog ? (
        <CancelOutlinedIcon fontSize="small" className="ml-2" />
      ) : (
        <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
      )}
    </button>
  );
};

export default ViewCatalogButton;
