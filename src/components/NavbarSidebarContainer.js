// Navbar and Sidebar Container

// Importing Helpers
import React, { useState } from "react";

// Importing Components
import NavBarComponent from "./NavBarComponent";
import SideBarComponent from "./SideBarComponent";
import HeroComponent from "./HeroComponent";

// Functional Component
const NavbarSidebarContainer = () => {
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
    </>
  );
};

// Default Export
export default NavbarSidebarContainer;
