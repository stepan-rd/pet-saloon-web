import { Animal } from "@/types/global";
import React, { SetStateAction } from "react";

type Props = {
  currDisplayingSizeIndex: number;
  setCurrDisplayingSizeIndex: React.Dispatch<SetStateAction<number>>;
  animal: Animal;
};

export function DogSizeBtns({
  currDisplayingSizeIndex,
  setCurrDisplayingSizeIndex,
  animal,
}: Props) {
  return (
    <div className="flex flex-col items-start mt-[50px]">
      {animal.sizes.map((size, sizeIndex) => (
        <button
          onClick={() => setCurrDisplayingSizeIndex(sizeIndex)}
          key={size.weight}
          className={`mb-2 transition-all duration-150 text-lg hover:text-[#27e841] font-medium ${sizeIndex === currDisplayingSizeIndex && "text-[#27e841]"} `}
        >
          {size.size}
        </button>
      ))}
    </div>
  );
}
