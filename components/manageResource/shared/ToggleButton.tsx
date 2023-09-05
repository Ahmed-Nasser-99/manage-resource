"use client";

import { useState } from "react";

interface ToggleButtonProps {
  defaultIsChecked: boolean;
  label: React.ReactNode;
  onChange?: () => void;
}

const ToggleButton = ({
  defaultIsChecked,
  label,
  onChange,
}: ToggleButtonProps) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange();
  };

  return (
    <label className="inline-flex cursor-pointer gap-6">
      <input
        type="checkbox"
        checked={isChecked}
        className="sr-only"
        onChange={handleCheckboxChange}
      />
      <span
        className={` flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-[#0771DE]" : "bg-[#8F9BBA]"
        }`}
      >
        <span
          className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
            isChecked ? "rtl:-translate-x-[28px] ltr:translate-x-[28px]" : ""
          }`}
        ></span>
      </span>
      <span className="label flex items-center text-sm font-medium text-black">
        {label}
      </span>
    </label>
  );
};

export default ToggleButton;
