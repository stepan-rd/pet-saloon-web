
type Props = {
  name: string;
  role: string;
  testimonial: string;
  width?: number
};

export function TestimonialCard({ name, role, testimonial, width = 320 }: Props) {
  return (
    <div
      className={`p-8 mb-4 rounded-lg h-fit w-[${width}px]`}
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex items-center gap-4">
        <img className="rounded-full" src="https://placehold.co/50x50?text=PFP" alt="userPfp" />
        <div>
          <h1 className="text-sm font-bold text-stone-900">{name}</h1>
          <h1 className="text-xs text-stone-600">{role}</h1>
        </div>
      </div>
      <p className="mt-4 text-left">{testimonial}</p>
    </div>
  );
}
