import { TestimonialCard } from "./TestimonialCard";
import testimonials from "@/data/testimonials.json";

type Props = {};

export function TestimonialGridMobile({}: Props) {
  return (
    <div className="block w-full md:hidden">
      <div className="flex flex-col items-center px-10 mt-10">
          {testimonials.slice(0, 4).map((testimonialDetails) => (
            <TestimonialCard
              name={testimonialDetails.name}
              role={testimonialDetails.role}
              testimonial={testimonialDetails.testimonial}
            />
          ))}
      </div>
    </div>
  );
}
