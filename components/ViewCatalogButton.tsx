import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "./ui/drawer";
import ViewCatalog from "./ViewCatalog";

interface ViewCatalogButtonProps {
    isCatalog?: boolean
}

const ViewCatalogButton = ({isCatalog}: ViewCatalogButtonProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          className={`w-full ${!isCatalog ? "fixed boxshadow z-50 text-black py-6 bg-orange-bg backdrop-blur-md" : "py-6 font-bold"} bottom-[0vh] left-0 xl:hidden`}
        >
        {isCatalog ? "Каталог" : "Посмотреть каталог"}{" "}
        {!isCatalog &&<CheckCircleOutlineIcon fontSize="small" className="ml-2" />}
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[95%]">
        <ViewCatalog />
      </DrawerContent>
    </Drawer>
  );
};

export default ViewCatalogButton;
