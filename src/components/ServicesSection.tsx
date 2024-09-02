import styled from "styled-components";
import { Heading } from "./Heading";
import services from "@/data/services.json";
import { ServiceCard } from "./ServiceCard";

type Props = {};

const ServicesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 300px);
  gap: 20px;
  padding: 40px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-template-rows: repeat(2, 300px);
  }

  @media (max-width: 809px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    grid-template-rows: repeat(4, 300px);
  }
`;

export function ServicesSection({}: Props) {
  return (
    <div className="w-full overflow-visible mt-[100px]">
      <Heading className="flex justify-center w-full">Our Services</Heading>
      <ServicesContainer>
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </ServicesContainer>
    </div>
  );
}
