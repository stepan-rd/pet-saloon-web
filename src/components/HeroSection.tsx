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

  @media (min-width: 809px}) {
    width: 100%;
  }
`;

const DogImage = styled.img`
  width: 400px;
  height: 815px;
  margin-top: 30px;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const TextContainer = styled.div`
  width: 475px;


  @media (max-width: 809px) {
  
    width: 100%
  }



`;

export default function HeroSection({}: Props) {
  const { theme } = useAppThemeStore();

  return (
    <HeroContainer>
      <TextContainer
        className="flex flex-col items-center px-4 pt-20 w-fit" 
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
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-4 text-4xl font-bold text-center"
          style={{ color: theme.paragraphTextColor }}
        >
          Expert care, gentle hands, and a happy pet every time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button className="mt-10">Book your appointment today</Button>
        </motion.div>
      </TextContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <DogImage src="landingPageDogNoD.png" alt="happyDawg" />
      </motion.div>
    </HeroContainer>
  );
}
