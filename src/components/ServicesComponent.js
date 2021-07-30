// Services Component
// Importing Helpers
import React from "react";
import styled from "styled-components";

// Importing Components
import icon1 from "../Media/svg-5.svg";
import icon2 from "../Media/svg-6.svg";
import icon3 from "../Media/svg-4.svg";

// Style Definitions
// Services-Container Style Definitions
const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

// Services-Wrapper Style Definitions
const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

// Services-Card Style Definitions
const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

// Services-Icon Style Definitions
const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

// Services-H1 Style Definitions
const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Services-H2 Style Definitions
const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

// ServicesP Style Definitions
const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

// Functional Component
const ServicesComponent = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fee and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership that returns 5% cashback.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

// Export Default
export default ServicesComponent;
