import { Service } from "@/types/global";
import { useScroll, motion, Variants } from "framer-motion";
import { useState } from "react";


const cardVariants: Variants = {
  offScreen: {
    y: 20,
    scale: 0.97,
    opacity: 0,
  },

  onScreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    variants={cardVariants}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center w-full h-full p-10 overflow-visible bg-white rounded-lg cursor-pointer hover:bg-stone-100"
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="flex justify-center w-full overflow-visible text-lg font-bold">
        {isHovered ? "Includes" : service.name}
      </h1>
      <p className="w-full overflow-visible text-base text-center">
        {isHovered ? service.includes : service.desc}
      </p>
    </motion.div>
  );
}
