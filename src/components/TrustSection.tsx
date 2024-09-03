import styled from "styled-components";
import { Heading } from "./Heading";
import { TrustCard } from "./TrustCard";
import trustCardData from "@/data/trustCardsData.json";

type Props = {};

const cardStyles = [
  "md:top-[0px] md:left-[15px] top-0 left-0",
  "md:top-[25px] md:left-[400px] top-0px left-0px",
  "md:bottom-[60px] md:left-[0px] bottom-0px left-0px",
  "md:bottom-[100px] md:left-[440px] bottom-0px left-0px",
];

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px @media (min-width: 1899px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const appearAnimationProperties = [
  { initialX: -100, delay: 0 },
  { initialX: 98, delay:  0.3},
  { initialX: -74, delay: 0.7},
  {initialX: 123, delay: 1.1},
];

export function TrustSection({}: Props) {
  return (
    <div className="md:mt-[100px] mt-[30px] h-fit w-full flex flex-col items-center">
      <Heading className=" text-stone-800 flex-justify-center md:w-fit w-[400px] mb-[40px]">
        Why Pet Owners Trust Us
      </Heading>
      <ContentContainer>
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center h-fit md:w-[730px] md:flex-row flex-col gap-4">
            {trustCardData.map((card, index) => (
              <TrustCard
                initialX={appearAnimationProperties[index].initialX}
                appearAnimationDelay={appearAnimationProperties[index].delay}
                key={index}
                className={`relative md:absolute ${cardStyles[index]}`}
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
              />
            ))}
            <img
              width={320}
              height={389}
              className="z-10 hidden md:block"
              src="catTrust.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center w-full pt-16 font-medium text-stone-700">
          <h1 className="text-lg md:w-[70%] w-[90%] text-justify text-pretty">
            Founded with a deep passion for animals, our pet grooming journey
            began in a small home-based studio, where we dedicated ourselves to
            providing personalized care to every pet that walked through our
            doors. Over the years, our love for grooming and commitment to the
            well-being of pets have driven us to expand our services, growing
            into the trusted and beloved grooming business we are today. Our
            team of experienced groomers takes pride in creating a stress-free,
            safe, and nurturing environment, ensuring every pet leaves us
            looking and feeling their best. We’re honored to be a part of your
            pet's life and cherish every moment we spend making them happy and
            healthy.
          </h1>
        </div>
      </ContentContainer>
    </div>
  );
}
