import { TestimonialCard } from "./TestimonialCard";
import testimonials from "@/data/testimonials.json";

type Props = {};

export function TestimonialGridXl({}: Props) {
  return (
    <div className="w-[1000px] xl:block hidden ">
      <div className="flex gap-4 px-10 mt-16">
        <div>
          {testimonials.slice(0, 3).map((testimonialDetails) => (
            <TestimonialCard
              name={testimonialDetails.name}
              role={testimonialDetails.role}
              testimonial={testimonialDetails.testimonial}
            />
          ))}
        </div>
        <div className="">
          {testimonials.slice(3, 6).map((testimonialDetails) => (
            <TestimonialCard
              name={testimonialDetails.name}
              role={testimonialDetails.role}
              testimonial={testimonialDetails.testimonial}
            />
          ))}
        </div>
        <div>
          {testimonials.slice(6, 9).map((testimonialDetails) => (
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
