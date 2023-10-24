import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <div className="max-w-[1300px] w-full flex flex-col gap-2 justify-center items-center sm:justify-start sm:items-start">
      <div className="w-full h-[400px] bg-light-gray px-6 xl:px-12 flex flex-col justify-center items-center sm:items-start gap-2 sm:gap-8">
        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-0 sm:gap-12">
          <Skeleton variant="text" animation="wave" height={70} width={200} />
          <Skeleton variant="text" animation="wave" height={70} width={100} />
          <Skeleton variant="text" animation="wave" height={70} width={100} />
        </div>
        <Skeleton
          variant="text"
          animation="wave"
          height={90}
          width="60%"
          className="hidden sm:block"
        />
        <Skeleton variant="text" animation="wave" height={40} width={100} />
        <Skeleton variant="rounded" animation="wave" height={40} width={192} />
      </div>
      <div className="mx-2 sm:mx-12 flex-col sm:flex-row flex gap-4">
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={44}
          width={200}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={44}
          width={200}
        />
      </div>
    </div>
  );
}
