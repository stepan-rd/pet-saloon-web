import { Heading } from "./Heading";
import { TestimonialGridXl } from "./TestimonialGridXl";
import { TestimonialGridMd } from "./TestimonialGridMd";
import { TestimonialGridMobile } from "./TestimonialsGridMoblie";

type Props = {};

export function TestimonialsSection({}: Props) {
  return (
    <div className="md:mt-[100px] mt-[50px] flex flex-col items-center">
      <Heading className="md:w-fit w-[400px]">What Our Happy Clients Say</Heading>
      <TestimonialGridXl />
      <TestimonialGridMd />
      <TestimonialGridMobile />
    </div>
  );
}
