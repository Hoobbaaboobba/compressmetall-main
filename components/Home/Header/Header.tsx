import { getProducts } from "@/actions/getProducts";
import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex flex-col justify-center items-center z-50">
      <UpperHeader />
      <hr className="w-full bg-white hidden xl:block" />
      <LowerHeader />
    </header>
  );
};

export default Header;
