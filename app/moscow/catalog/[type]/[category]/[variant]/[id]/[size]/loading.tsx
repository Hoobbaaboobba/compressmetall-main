import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <>
      <div className="relative w-full lg:h-[350px] flex flex-col-reverse lg:flex-row justify-center lg:justify-between text-center sm:items-start px-6 xl:px-12">
        <div className="w-full h-full flex flex-col gap-6 justify-center items-start">
          <div className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-auto justify-center sm:justify-start items-center w-full">
            <Skeleton
              variant="rounded"
              animation="wave"
              height={50}
              width={250}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={50}
              width={100}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={50}
              width={100}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start gap-4 border border-light-gray rounded-md">
            <div className="hidden lg:block">
              <Skeleton
                variant="rounded"
                animation="wave"
                height={30}
                width={150}
              />
            </div>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={30}
              width={100}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={50}
              width={200}
            />
            <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-center sm:flex-row gap-4">
              <Skeleton
                variant="rounded"
                animation="wave"
                height={50}
                width={192}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                height={50}
                width={192}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 hidden lg:block">
          <Skeleton
            variant="rounded"
            animation="wave"
            width={550}
            height={380}
          />
        </div>
        <div className="mt-4 block lg:hidden">
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height={277}
          />
        </div>
      </div>
      {/* <hr className="border border-light-gray my-2" /> */}
      <div className="w-full flex justify-center items-center flex-col gap-1 px-6 xl:px-12 mt-10 lg:mt-24">
        <Skeleton
          variant="rounded"
          animation="wave"
          height={50}
          width={150}
          className="my-4"
        />
        <div className="w-full flex flex-col gap-1">
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="97%"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="99%"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="95%"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="100%"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="92%"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="92%"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width="90%"
          />
        </div>
      </div>
    </>
  );
}
