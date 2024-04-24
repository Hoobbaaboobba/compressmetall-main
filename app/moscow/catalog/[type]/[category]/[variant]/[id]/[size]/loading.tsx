import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="relative w-full lg:h-[350px] flex flex-col-reverse lg:flex-row justify-center lg:justify-between text-center sm:items-start px-6 xl:px-12">
        <div className="w-full h-full flex flex-col gap-6 justify-center items-start">
          <div className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-auto justify-center sm:justify-start items-center w-full">
            <Skeleton className="h-[50px] w-[250px]" />
            <Skeleton className="h-[50px] w-[100px]" />
            <Skeleton className="h-[50px] w-[100px]" />
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start gap-4 border border-light-gray rounded-md">
            <div className="hidden lg:block">
              <Skeleton className="h-[30px] w-[150px]" />
            </div>
            <Skeleton className="h-[30px] w-[100px]" />
            <Skeleton className="h-[50px] w-[200px]" />
            <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-center sm:flex-row gap-4">
              <Skeleton className="h-[50px] w-[192px]" />
              <Skeleton className="h-[50px] w-[192px]" />
            </div>
          </div>
        </div>
        <div className="mt-4 hidden lg:block">
          <Skeleton className="h-[380px] w-[550px]" />
        </div>
        <div className="mt-4 block lg:hidden">
          <Skeleton className="h-[277px] w-full" />
        </div>
      </div>
      {/* <hr className="border border-light-gray my-2" /> */}
      <div className="w-full flex justify-center items-center flex-col gap-1 px-6 xl:px-12 mt-10 lg:mt-24">
        <Skeleton className="h-[50px] w-[150px] my-4" />
        <div className="w-full flex flex-col gap-1">
          <Skeleton className="h-[20px] w-[92%]" />
          <Skeleton className="h-[20px] w-[99%]" />
          <Skeleton className="h-[20px] w-[95%]" />
          <Skeleton className="h-[20px] w-full" />
          <Skeleton className="h-[20px] w-[92%]" />
          <Skeleton className="h-[20px] w-[94%]" />
          <Skeleton className="h-[20px] w-[90%]" />
        </div>
      </div>
    </>
  );
}
