import { BackArrow, TrashIcon } from "@/public/icons";
import React from "react";
import ToggleButton from "./shared/ToggleButton";

const PageHeader = () => {
  return (
    <div className="flex justify-between w-full ">
      <div
        className="flex
      justify-start
      items-center
      gap-7"
      >
        <button className="flex justify-center items-center w-14 h-14 rounded-lg bg-[#E7EAED] ">
          <BackArrow />
        </button>
        <div className="text-2xl">Add new recourses</div>
      </div>
      <div className="flex justify-center items-center gap-6 ">
        <ToggleButton defaultIsChecked={true} label="Active" />
        <button className="px-7 py-4 rounded-md bg-[#1C1C28] text-white">
          Save changes
        </button>
        <button className="flex gap-3 border-[#FF4B55] border px-7 py-4 rounded-md bg-[#FFF6F6] text-[#FF4B55]">
          <TrashIcon />
          Delete resource
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
