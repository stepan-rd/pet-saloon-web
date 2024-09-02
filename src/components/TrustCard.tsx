import { Variants, motion } from "framer-motion";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  iconSrc: string;
  title: string;
  description: string;
  initialX?: number;
  appearAnimationDelay?: number;
};

export function TrustCard({
  className,
  style,
  iconSrc,
  title,
  description,
  initialX = -50,
  appearAnimationDelay = 0.3
}: Props) {
  const cardVariants: Variants = {
    offScreen: {
      x: initialX,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: appearAnimationDelay,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col items-center bg-trust-card-bg-gradient from-[#12FF88] to-[#3DFF9E] gap-3 rounded-lg shadow-md p-7 w-fit h-fit ${className}`}
      style={{ ...style }}
    >
      <img src={iconSrc} alt="trust-icon" />
      <h1 className="text-xl font-bold text-stone-900">{title}</h1>
      <p
        className="text-base font-medium text-center w-60"
        style={{ color: "#1A1A1A" }}
      >
        {description}
      </p>
    </motion.div>
  );
}
