"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useCatalogModal from "@/hooks/useCatalogModal";

const ViewCatalogButton = () => {
  const { isOpenCatalog, openCatalog } = useCatalogModal();

  const showCatalog = () => {
    if (!isOpenCatalog) {
      openCatalog();
      document.body.style.overflowY = "hidden";
    } else {
      openCatalog();
      document.body.style.overflowY = "auto";
    }
  };
  return (
    <button
      onClick={showCatalog}
      className="w-full boxshadow z-50 text-white py-4 bg-orange-bg backdrop-blur-md fixed bottom-[0vh] left-0 xl:hidden underline"
    >
      {isOpenCatalog ? "Закрыть каталог" : "Посмотреть каталог"}
      {isOpenCatalog ? (
        <CancelOutlinedIcon fontSize="small" className="ml-2" />
      ) : (
        <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
      )}
    </button>
  );
};

export default ViewCatalogButton;
