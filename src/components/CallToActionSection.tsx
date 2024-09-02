import { Heading } from "./Heading";
import { Button } from "./Button";

type Props = {};

export function CallToActionSection({}: Props) {
  return (
    <div className="mt-[100px] px-10 gap-8 flex flex-col items-center ">
      <Heading className="font-bold">
        Ready to Give Your Pet the Royal Treatment?
      </Heading>
      <p className="w-full text-lg font-medium text-center text-stone-700">Book an appointment today and let us take care of the rest!</p>
      <Button>Schedule Now</Button>
    </div>
  );
}
