import React, { Component } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from "react-scrollspy";
import { Menu, X } from "react-feather";
import styled from "styled-components";
import { Container } from "../global";
import LINKS from "../const";

class Navigation extends Component {
  state = {
    mobileMenuIsOpen: false,
    hasScrolled: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 200) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuIsOpen: !prevState.mobileMenuIsOpen,
    }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuIsOpen) {
      this.setState({ mobileMenuIsOpen: false });
    }
  };

  navLinks = ({ mobile = false }) => (
    <NavLinksWrapper mobile={mobile}>
      <Scrollspy
        items={LINKS.map((item) => item.url.toLowerCase())}
        mobile={mobile}
        offset={-64}>
        {LINKS.map((item) => (
          <NavItem key={item.id} onClick={this.closeMobileMenu}>
            <AnchorLink to={`${item.url.toLowerCase()}`}>
              {item.text}
            </AnchorLink>
          </NavItem>
        ))}
      </Scrollspy>
    </NavLinksWrapper>
  );

  render() {
    const { mobileMenuIsOpen } = this.state;

    return (
      <Nav scrolled={this.state.hasScrolled}>
        <Flex>
          <Logo>
            <AnchorLink to='/#top' onClick={this.closeMobileMenu}>
              Logo
            </AnchorLink>
          </Logo>

          {/* menu mobilne  */}
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}>
              {this.state.mobileMenuIsOpen ? (
                <X size={24} alt='close menu' />
              ) : (
                <Menu size={24} alt='open menu' />
              )}
            </button>
          </Mobile>

          {/* hide = ukryj menu mobilne */}
          <Mobile hide>{this.navLinks({})}</Mobile>
        </Flex>

        <Mobile>
          {mobileMenuIsOpen && (
            <MobileMenu>
              <Container>{this.navLinks({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navigation;

const Nav = styled.nav`
  /* padding: ${(props) => (props.scrolled ? `40px 0` : `30px 0`)}; */
  position: fixed;

  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${(props) => (props.scrolled ? `white` : null)};
  transition: 0.4s cubic-bezier(0.3, 0.8, 0.2, 1);
  border: 1px solid green;

  background-color: red;
`;

const Flex = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fbff00;
  height: ${(props) => props.theme.other.navigationHeight};
`;

const Logo = styled.div`
  text-decoration: none;
  margin: 0;
  a {
    color: ${(props) => props.theme.color.black.grey};
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    display: block;
  }
  ${(props) =>
    props.hide &&
    `
    display: block;
    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`;

const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${(props) => props.theme.color.black.greyDark};
  background: yellow;
`;
const NavLinksWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;
        > ${NavItem} {
          margin: 0;
        }
      `};
  }
`;

const NavItem = styled.li`
  margin: 0 0.75em;

  a {
    color: ${(props) => props.theme.color.black.greyDarker};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;
