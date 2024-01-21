import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full animate-spin h-full transition duration-1000 flex justify-center items-center flex-col gap-8">
      <LoaderIcon className="w-8 h-8" />
    </div>
  );
}
