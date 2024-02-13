import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface ImageDialogProps {
  children: React.ReactNode;
  image: string;
  title: string;
  width: number;
  height: number;
}

export const ImageDialog = ({
  children,
  image,
  title,
  width,
  height,
}: ImageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Image src={`/${image}`} alt={title} width={height} height={width} />
      </DialogContent>
    </Dialog>
  );
};
