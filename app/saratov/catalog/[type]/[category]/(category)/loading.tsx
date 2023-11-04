"use client";

import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center pt-6">
      <div className="max-w-[1300px] w-full flex flex-col gap-4 justify-center items-center">
        <Skeleton animation="wave" width={200} height={80} />
        <div className="w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ml-4 mr-4">
          <Skeleton animation="wave" width="100%" height={325} />
          <Skeleton animation="wave" width="100%" height={325} />
          <Skeleton animation="wave" width="100%" height={325} />
          <Skeleton animation="wave" width="100%" height={325} />
          <Skeleton animation="wave" width="100%" height={325} />
        </div>
      </div>
    </div>
  );
}
