import { getProducts } from "@/actions/getProducts";
import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 shadow-md w-full flex flex-col bg-white justify-center items-center px-4 z-50">
            <UpperHeader />
            <LowerHeader />
        </header>
    );
};

export default Header;
