import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-0 py-6 px-4">
      <div className="w-full mb-4 flex flex-col justify-center items-center">
        <Skeleton animation="wave" width={300} height={80} />
      </div>
      <div className="w-full flex gap-2 justify-start items-center mb-4">
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <div className="flex gap-2 justify-start items-start rounded-md px-3 py-4">
          <Skeleton animation="wave" width={80} height={30} />
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />
        </div>
        <div className="flex gap-2 justify-start items-start rounded-md px-3 py-4">
          <Skeleton animation="wave" width={80} height={30} />
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="w-full flex flex-col border border-light-gray rounded-md">
        <div className="w-full hidden h-[70px] md:grid grid-cols-4 px-4 rounded-t-md border-b">
          <div className="w-full h-full flex justify-center items-center">
            <Skeleton animation="wave" width={200} height={40} />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Skeleton animation="wave" width={100} height={40} />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Skeleton animation="wave" width={100} height={40} />
          </div>
        </div>
        <div className="w-full flex flex-col border-b md:flex-row justify-between items-start md:items-center px-4 h-[200px] md:h-[120px]">
          <Skeleton animation="wave" width={300} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <div className="hidden md:block">
            <Skeleton animation="wave" width={150} height={70} />
          </div>
          <div className="block md:hidden w-full">
            <Skeleton animation="wave" width="100%" height={70} />
          </div>
        </div>
        <div className="w-full flex flex-col border-b md:flex-row justify-between items-start md:items-center px-4 h-[200px] md:h-[120px]">
          <Skeleton animation="wave" width={300} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <div className="hidden md:block">
            <Skeleton animation="wave" width={150} height={70} />
          </div>
          <div className="block md:hidden w-full">
            <Skeleton animation="wave" width="100%" height={70} />
          </div>
        </div>
        <div className="w-full flex flex-col border-b md:flex-row justify-between items-start md:items-center px-4 h-[200px] md:h-[120px]">
          <Skeleton animation="wave" width={300} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <div className="hidden md:block">
            <Skeleton animation="wave" width={150} height={70} />
          </div>
          <div className="block md:hidden w-full">
            <Skeleton animation="wave" width="100%" height={70} />
          </div>
        </div>
        <div className="w-full md:flex hidden flex-col border-b md:flex-row justify-between items-start md:items-center px-4 h-[200px] md:h-[120px]">
          <Skeleton animation="wave" width={300} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <div className="hidden md:block">
            <Skeleton animation="wave" width={150} height={70} />
          </div>
          <div className="block md:hidden w-full">
            <Skeleton animation="wave" width="100%" height={70} />
          </div>
        </div>
        <div className="w-full md:flex hidden flex-col border-b md:flex-row justify-between items-start md:items-center px-4 h-[200px] md:h-[120px]">
          <Skeleton animation="wave" width={300} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <Skeleton animation="wave" width={100} height={70} />
          <div className="hidden md:block">
            <Skeleton animation="wave" width={150} height={70} />
          </div>
          <div className="block md:hidden w-full">
            <Skeleton animation="wave" width="100%" height={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
