"use client";

import { useEffect, useState } from "react";
import CityButton from "../Header/CityButton";

const LocationProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CityButton />
    </>
  );
};

export default LocationProvider;
