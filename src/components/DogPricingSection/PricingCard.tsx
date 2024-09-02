import { Animal } from "@/types/global";

type Props = {
  currDisplayingSizeIndex: number;
  animal: Animal;
};

export function PricingCard({ currDisplayingSizeIndex, animal }: Props) {
  return (
    <div className="flex flex-col items-center px-16 py-8 rounded-lg shadow-md w-fit bg-stone-900">
      <h1 className="flex justify-center w-full mb-4 text-lg font-bold text-stone-100">
        {animal.sizes[currDisplayingSizeIndex].weight}
      </h1>
      <div className="flex flex-col gap-3">
        {Object.entries(animal.sizes[currDisplayingSizeIndex].priceStart).map(
          ([key, value]) => (
            <p>
              <span className="font-bold text-stone-100">{key}</span>:{" "}
              <span className="text-stone-100">starting at ${value}</span>
            </p>
          )
        )}
      </div>
    </div>
  );
}
