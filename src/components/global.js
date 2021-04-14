import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  border: 1px solid green;

  /* @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1200px;
  } */
`;

export const Button = styled.button(
  (props) => `
    border: 1px solid transparent;
  outline: none;
  padding: 5px 25px;
  cursor: pointer;
  border-radius: 50px;
  text-transform:uppercase;
  font-size:${props.theme.font.size.xxsmall};
  ${
    props.primary &&
    `

    background-color:${props.theme.color.black.grey};
    color:${props.theme.color.white.whiteRegular};
  `
  }

${
  props.secondary &&
  `
    background-color:${props.theme.color.white.whiteRegular};
    color:${props.theme.color.black.grey};
  `
}
`
);

export const Section = styled.section`
  padding: 50px 0px;
  overflow: hidden;
  border: 1px solid lightcoral;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 30px 0px;
  }
`;

export const Aside = styled.aside`
  padding: 10px 0px;
  overflow: hidden;
  border: 1px solid purple;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 30px 0px;
  }
`;

export const Footer = styled.footer`
  padding: 50px 0px;
  overflow: hidden;
  border: 1px solid greenyellow;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 30px 0px;
  }
`;
