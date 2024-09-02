import { PricingCard } from "./DogPricingSection/PricingCard";
import { Animal } from "@/types/global";
import animalData from "@/data/animals.json";

type Props = {};

const catData: Animal =
  animalData.find((animal) => animal.type === "Cat") || ({} as Animal);

export function OtherPetsSection({}: Props) {
  return (
    <div>
      <h1 className="text-3xl h-fit font-bold mb-5 mt-[50px] w-full flex justify-center">
        Other
      </h1>
      <div className="flex h-[300px] flex-col items-center">
        <PricingCard currDisplayingSizeIndex={0} animal={catData} />
        <p className="w-[200px] text-center mt-10">
          If you have any other pet please{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={() => window.scrollTo({ top: 99999, behavior: "smooth" })}
          >
            contact us
          </span>{" "}
          before scheduling.
        </p>
      </div>
    </div>
  );
}
