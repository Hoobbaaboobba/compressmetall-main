export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center pt-6">
      <div className="max-w-[1300px] w-full flex flex-col gap-4 justify-center items-center">
        <div className="bg-light-gray rounded w-[200px] h-[80px]"></div>
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
          <div className="w-[240px] h-[220px] bg-light-gray rounded-lg"></div>
          <div className="w-[240px] h-[220px] bg-light-gray rounded-lg"></div>
          <div className="w-[240px] h-[220px] bg-light-gray rounded-lg"></div>
          <div className="w-[240px] h-[220px] bg-light-gray rounded-lg"></div>
          <div className="w-[240px] h-[220px] bg-light-gray rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
