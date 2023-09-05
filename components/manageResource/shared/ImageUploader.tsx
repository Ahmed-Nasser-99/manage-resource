"use client";

import { UploadImageIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";

interface ImageUploaderProps {
  image?: string;
}

const ImageUploader = ({ image }: ImageUploaderProps) => {
  return (
    <div className="flex justify-center w-[100px] items-center">
      <div className="flex justify-center items-center rounded-md">
        {image ? (
          <Image
            src={image}
            alt="resource image"
            width={100}
            height={160}
            className="rounded-md"
          />
        ) : (
          <label
            htmlFor="image-upload"
            className="flex items-center bg-[#0771DE] p-3 rounded-full w-10/12"
          >
            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files);
              }}
              className="hidden"
              id="image-upload"
            />
            <UploadImageIcon className="w-full fill-[#fff]" />
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
