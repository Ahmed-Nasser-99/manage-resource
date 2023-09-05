import React from "react";
import ImageUploader from "../shared/ImageUploader";

const ResourceMainInfo = () => {
  return (
    <div className="flex justify-center items-center bg-[#FAF9F9] p-5 w-full gap-5">
      <ImageUploader />
      <div className="flex flex-col gap-2 w-full ">
        <label>Resource name</label>
        <input
          type="text"
          className="w-full h-10 border rounded-md px-4 bg-[#F4EEEE] border-[#B2A6A6]"
        />
      </div>
    </div>
  );
};

export default ResourceMainInfo;
