import { useState } from "react";
import animalData from "@/data/animals.json";
import { Animal } from "@/types/global";
import { PricingCard } from "./PricingCard";
import { DogSizeBtns } from "@/components/DogPricingSection/DogSizeBtns";


const animal: Animal =
  animalData.find((animal) => animal.type === "Dog") || ({} as Animal);

type Props = {};

export function DogPricingSection({}: Props) {

  const [currDisplayingSizeIndex, setCurrDisplayingSizeIndex] =
    useState<number>(2);

  return (
    <div className="mt-[50px] flex flex-col justify-center items-center px-10">
      <h1 className="flex justify-center w-full px-10 mb-10 text-3xl font-bold">
        Dogs
      </h1>
      <div className="flex">
        <DogSizeBtns
          currDisplayingSizeIndex={currDisplayingSizeIndex}
          setCurrDisplayingSizeIndex={setCurrDisplayingSizeIndex}
          animal={animal}
        />
        <div className="flex flex-col items-center text-stone-100">
          <img
            className="text-black"
            width={300}
            height={450}
            src={animal.sizes[currDisplayingSizeIndex].imgSrc}
            alt={animal.sizes[currDisplayingSizeIndex].size + " dog"}
          />
          <PricingCard currDisplayingSizeIndex={currDisplayingSizeIndex} animal={animal} />
        </div>
      </div>
    </div>
  );
}
