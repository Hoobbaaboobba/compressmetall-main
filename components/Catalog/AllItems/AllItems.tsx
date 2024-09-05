import {
  blackMetal,
  colorMetal,
  metiza,
  nershav,
  truba,
  zincMetal,
} from "../../Home/MainSection/productsData";
import PageComponent from "../PageComponent";

const datas = [
  {
    data: blackMetal,
  },
  {
    data: colorMetal,
  },
  {
    data: zincMetal,
  },
  {
    data: nershav,
  },
  {
    data: truba,
  },
  {
    data: metiza,
  },
];

const AllItems = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 relative">
      {datas.map((data, index) => (
        <PageComponent key={index} data={data.data} />
      ))}
    </div>
  );
};

export default AllItems;
