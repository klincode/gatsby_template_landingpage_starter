import React from "react";
import styled from "styled-components";
import { Container } from "../global";
//import Img from "gatsby-image";
const Header = () => {
  return (
    <HeaderWrapper id='top'>
      <Container>
        <HeaderTextGroup>
          <h1>Lorem ipsum dolor sit amet . Eligendi, quam?</h1>
          <h2>Lorem ipsum dolor sit amet consectetur. </h2>
        </HeaderTextGroup>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  /* background-color: ${(props) => props.theme.color.white.whiteRegular}; */
  background-color: green;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw)); */
`;

const HeaderTextGroup = styled.div`
  background-color: lightblue;
`;
