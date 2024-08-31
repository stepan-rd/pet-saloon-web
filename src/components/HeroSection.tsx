import { useAppThemeStore } from "@/stores/useAppTheme";
import { Button } from "./Button";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {};

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 7rem;
  width: fit-content;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const DogImage = styled.img`
  width: 400px;
  height: 815px;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export default function HeroSection({}: Props) {
  const { theme } = useAppThemeStore();

  return (
    <HeroContainer>
      <div
        className="flex flex-col items-center pt-20 w-fit"
        style={{ width: "475px" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full text-5xl font-bold text-center"
          style={{ color: theme.headingTextColor }}
        >
          Pamper Your Pet with Professional Grooming{" "}
        </motion.h1>
        <p
          className="mt-4 text-4xl font-bold"
          style={{ color: theme.paragraphTextColor }}
        >
          Expert care, gentle hands, and a happy pet every time.
        </p>
        <Button className="mt-10">Book your appointment today</Button>
      </div>
      <DogImage src="/landingPageDogNoD.png" alt="happyDawg" />
    </HeroContainer>
  );
}
