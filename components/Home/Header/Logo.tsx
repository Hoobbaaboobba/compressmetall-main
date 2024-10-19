import useCatalogModal from "@/hooks/useCatalogModal";
import useLocationModal from "@/hooks/useLocationModal";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { link } = useLocationModal();
  const { setCatalog } = useCatalogModal();

  return (
    <Link href={`/${link}`} onClick={setCatalog}>
      <Image src="/km-logo.jpg" alt="logo" width={160} height={77.5} priority />
    </Link>
  );
};

export default Logo;
