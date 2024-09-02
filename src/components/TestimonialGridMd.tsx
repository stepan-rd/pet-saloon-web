import { TestimonialCard } from "./TestimonialCard";
import testimonials from "@/data/testimonials.json";

type Props = {};

export function TestimonialGridMd({}: Props) {
  return (
    <div className="hidden w-fit xl:hidden md:block ">
      <div className="flex flex-col items-center gap-4 px-10 mt-16">
        <div className="flex items-end gap-6">
          {testimonials.slice(0, 2).map((testimonialDetails) => (
            <TestimonialCard
              name={testimonialDetails.name}
              role={testimonialDetails.role}
              testimonial={testimonialDetails.testimonial}
            />
          ))}
        </div>
        <div className="">
          <TestimonialCard
            width={600}
            name={testimonials[3].name}
            role={testimonials[3].role}
            testimonial={testimonials[3].testimonial}
          />
        </div>
        <div className="flex gap-9">
          {testimonials.slice(6, 8).map((testimonialDetails) => (
            <TestimonialCard
              name={testimonialDetails.name}
              role={testimonialDetails.role}
              testimonial={testimonialDetails.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
