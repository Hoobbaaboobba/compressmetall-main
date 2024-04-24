"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useCatalogModal from "@/hooks/useCatalogModal";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
          className="w-full boxshadow z-50 text-white py-4 bg-orange-bg backdrop-blur-md fixed bottom-[0vh] left-0 xl:hidden underline"
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
