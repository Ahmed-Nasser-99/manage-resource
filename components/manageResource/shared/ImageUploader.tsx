"use client";

import { UploadImageIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";

const ImageUploader = () => {
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);

  return (
    <div className="flex justify-center items-center rounded-md h-[140px] w-[100px]">
      {imageSrc ? (
        <label
          htmlFor="image-upload"
          className="cursor-pointer w-full h-full relative"
        >
          <input
            type="file"
            onChange={(event) => uploadImage({ event, setImageSrc })}
            className="hidden"
            id="image-upload"
            accept="image/*"
          />
          <Image
            src={imageSrc}
            alt="resource image"
            fill
            className=" rounded-full w-full h-full object-cover"
            id="output"
          />
        </label>
      ) : (
        <label
          htmlFor="image-upload"
          className="flex items-center bg-[#0771DE] p-3 rounded-full w-full h-full"
        >
          <input
            type="file"
            onChange={(event) => uploadImage({ event, setImageSrc })}
            className="hidden"
            id="image-upload"
            accept="image/*"
          />
          <UploadImageIcon className=" fill-[#fff]" />
        </label>
      )}
    </div>
  );
};

interface ImageUploaderProps {
  event: React.ChangeEvent<HTMLInputElement>;
  setImageSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const uploadImage = ({ event, setImageSrc }: ImageUploaderProps) => {
  if (!event?.target?.files?.[0]) return;
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (function (image) {
    return function (e) {
      setImageSrc(e?.target?.result?.toString()!);
    };
  })(image);
  reader.readAsDataURL(image);
};

export default ImageUploader;
