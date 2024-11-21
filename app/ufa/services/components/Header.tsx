export const ServicesHeader = ({title}: {title: string}) => {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
            {title}
        </h1>
        <div>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
      </div>
    )
}
