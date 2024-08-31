import { useAppThemeStore } from "@/stores/useAppTheme";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Button({ className, children }: Props) {

  const {theme} = useAppThemeStore();

  return (
    <motion.button
      className={`px-4 py-2 text-lg font-semibold rounded-lg shadow-md ${className}`}
      whileHover={{ backgroundColor: "#37FF0A", scale: 1.01 }}
      style={{ backgroundColor: "#19FF38", color: theme.headingTextColor }}
    >
      {children}
    </motion.button>
  );
}
