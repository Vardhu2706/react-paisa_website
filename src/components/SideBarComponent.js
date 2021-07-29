// Sidebar Component

// Importing Helpers
import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

// Importing Components
import { FaTimes } from "react-icons/fa";

// Style Definitions
// Sidebar Container Definitions
const SidebarContainer = styled.aside`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

// Icon Style Definitions
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

// CloseIcon Style Definitions
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

// Sidebar Wrapper Style Definitions
const SidebarWrapper = styled.div`
  color: #fff;
`;

// Sidebar Menu Style Definitions
const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

// Sidebar Link Style Definitions
const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

// Sidebar Button Wrap Style Definitions
const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

// Sidebar Route Style Definitions
const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

// Functional Component
const SideBarComponent = ({ isOpen, toggleOnHover }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleOnHover}>
      <Icon onClick={toggleOnHover}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleOnHover}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleOnHover}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleOnHover}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleOnHover}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

// Default Export
export default SideBarComponent;
