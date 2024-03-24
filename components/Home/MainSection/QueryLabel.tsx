"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const QueryLabel = () => {
  const searchParams = useSearchParams();
  const label = searchParams.get("label");

  useEffect(() => {
    if (!label) {
      throw new Error("Страница не найдена");
    }
  });

  return label && <h1>{decodeURI(label)}</h1>;
};

export default QueryLabel;
