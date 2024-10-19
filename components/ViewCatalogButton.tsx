"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import useCatalogModal from "@/hooks/useCatalogModal";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "./ui/drawer";
import ViewCatalog from "./ViewCatalog";

const ViewCatalogButton = () => {
  const { isOpenCatalog, openCatalog } = useCatalogModal();

  const showCatalog = () => {
    if (!isOpenCatalog) {
      openCatalog();
    } else {
      openCatalog();
    }
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          onClick={showCatalog}
          className="w-full boxshadow z-50 text-black py-4 bg-orange-bg backdrop-blur-md fixed bottom-[0vh] left-0 xl:hidden"
        >
          Посмотреть каталог{" "}
          <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[95%]">
        <ViewCatalog />
      </DrawerContent>
    </Drawer>
  );
};

export default ViewCatalogButton;
