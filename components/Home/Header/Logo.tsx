import useCatalogModal from "@/hooks/useCatalogModal";
import useLocationModal from "@/hooks/useLocationModal";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { link } = useLocationModal();
  const { setCatalog } = useCatalogModal();

  return (
    <Link href={`/${link}`} onClick={setCatalog}>
      <Image src="/logo.png" alt="logo" width={135} height={68} priority />
    </Link>
  );
};

export default Logo;
