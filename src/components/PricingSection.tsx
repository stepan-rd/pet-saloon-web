import React from "react";
import { Heading } from "./Heading";
import { DogPricingSection } from "./DogPricingSection/DogPricingSection";
import { PricingCard } from "./DogPricingSection/PricingCard";
import { Animal } from "@/types/global";
import { OtherPetsSection } from "./OtherPetsSection";

type Props = {};



export function PricingSection({}: Props) {
  return (
    <div className="mt-[100px] flex h-fit flex-col w-full items-center">
      <Heading className="px-4">Estimated Pricing Based On Your Pet's Size</Heading>
      <hr className="mt-[50px]"></hr>
      <div className="flex flex-col lg:gap-[200px] gap-[20px] lg:flex-row">
        <DogPricingSection />
        <OtherPetsSection />
      </div>
    </div>
  );
}
