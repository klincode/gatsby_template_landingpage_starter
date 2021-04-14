import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";
import LINKS from "../const";
import { Section, Container, Footer } from "../global";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Services = () => {
  const [footerData, setFooterData] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/klincode/klincode_footer/main/footer.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setFooterData(data);
      });
    return () => {
      // cleanup
    };
  }, []);

  const navLinks = () => (
    <NavLinksWrapper>
      {LINKS.map((item) => (
        <NavItem key={item.id}>
          <AnchorLink to={`${item.url.toLowerCase()}`}>{item.text}</AnchorLink>
        </NavItem>
      ))}
    </NavLinksWrapper>
  );
  return (
    <Footer>
      <Container>
        <h4>Footer</h4>
        {navLinks()}
      </Container>
    </Footer>
  );
};

export default Services;

const NavLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const NavItem = styled.div`
  border: 1px solid red;
`;
