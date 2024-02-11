import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface ImageDialogProps {
  children: React.ReactNode;
  image: string;
  title: string;
}

export const ImageDialog = ({ children, image, title }: ImageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Image src={`/${image}`} alt={title} width={462} height={641} />
      </DialogContent>
    </Dialog>
  );
};
