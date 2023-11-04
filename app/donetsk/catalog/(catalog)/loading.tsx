import Image from "next/image";

export default function Loading() {
  return (
    <div className="max-w-[900px] w-full flex justify-center items-center">
      <Image src="/loading.gif" alt="loading_gif" width={100} height={100} />
    </div>
  );
}
