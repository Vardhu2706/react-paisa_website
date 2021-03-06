// Sign In Component

// Importing Helpers
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Style Definitions
// Container Style Definitions
const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

// Form Wrap Style Definitions
const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

// Form Icon Style Definitions
const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

// Form Content Style Definition
const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

// Form Style Definitions
const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and(max-width: 400px) {
    padding: 32px 32px;
  }
`;

// Form H1 Style Definitions
const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

// Form Label Style Definitions
const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

// Form Input Style Definitions
const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

// Form Button Style Definitions
const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

// Const Text Style Definitions
const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #ffffff;
  font-size: 14px;
`;

// Functional Component
const SignInComponent = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Paisa</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account.</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

// Default Export
export default SignInComponent;
