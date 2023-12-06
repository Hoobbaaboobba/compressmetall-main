"use client";

import { useSearchParams } from "next/navigation";

const QueryLabel = () => {
  const searchParams = useSearchParams();
  const label = searchParams.get("label");
  return <h1>{label}</h1>;
};

export default QueryLabel;
