'use client'

import Image from "next/image";
import { ImageDialog } from "@/components/AboutCompany/Blagodarnosti/ImageDialog";

interface ImageLoaderProps {
    src: any;
    title: string
}

export const ImageLoader = ({src, title}: ImageLoaderProps) => {
  const imageLoader = ({ src, width, quality }: any) => {
      console.log(`http://localhost:3000/${src}?w=${width}&q=${quality || 75}`)
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };

    return (

          <ImageDialog
            width={462}
            height={641}
            image={src}
            title={title}
          >
            <Image
              loader={imageLoader}
              src={src}
              alt={title}
              width={500}
              height={400}
              className="border border-light-gray rounded-md lg:hover:shadow-md transition cursor-zoom-in mt-4"
              placeholder="blur"
            />
          </ImageDialog>
    )
}
