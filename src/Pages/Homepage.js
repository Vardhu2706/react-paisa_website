// Navbar and Sidebar Container

// Importing Helpers
import React, { useState } from "react";

// Importing Components
import NavBarComponent from "../Components/NavBarComponent";
import SideBarComponent from "../Components/SideBarComponent";
import HeroComponent from "../Components/HeroComponent";
import InfoSection from "../Components/InfoComponent";
import { InfoSectionOne, InfoSectionTwo, InfoSectionThree } from "../Data";
import ServicesComponent from "../Components/ServicesComponent";

// Functional Component
const Homepage = () => {
  //State Variables
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Function
  const toggleOnHover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBarComponent isOpen={isOpen} toggleOnHover={toggleOnHover} />
      <NavBarComponent toggleOnHover={toggleOnHover} />
      <HeroComponent />
      <InfoSection {...InfoSectionOne} />
      <InfoSection {...InfoSectionTwo} />
      <ServicesComponent />
      <InfoSection {...InfoSectionThree} />
    </>
  );
};

// Default Export
export default Homepage;
