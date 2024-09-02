import styled from "styled-components";

type Props = {};

const IntroductionContainer = styled.div`
  height: 275px;
  background-color: #1c1917;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 809px) {
    height: 445px;
  }
`;

export function IntroductionSection({}: Props) {
  return (
    <IntroductionContainer>
      <h1 className="flex justify-center w-full text-4xl font-bold text-white ">
        Introduction
      </h1>
      <div className="flex justify-center w-full">
        <p
          className="w-1/2 mt-10 text-base font-bold text-center text-stone-200"
        >
          At PetSaloon, we treat your pet like family. Our expert grooming
          services ensure your furry friend looks and feels their best. From
          soothing baths to stylish cuts, we offer a stress-free, enjoyable
          experience for all pets, with a special focus on dogs.
        </p>
      </div>
    </IntroductionContainer>
  );
}
