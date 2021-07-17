import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import NavLink from "./NavLink";
import "../styles/headers.css";
import useScrollPosition from "@react-hook/window-scroll";
import className from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons/faSlidersH";

const Header = (props) => {
  const [opend, setOpend] = useState(true);
  const scrollY = useScrollPosition();

  let isHomepage;

  if (typeof window !== "undefined") {
    isHomepage = window.location.pathname === "/";
  }
  const hasScrollBreakpointExceed = scrollY > 100;
  const shouldChangeNavbarStyle = !isHomepage || hasScrollBreakpointExceed;
  const showNavbarLogo =
    !isHomepage || (isHomepage && hasScrollBreakpointExceed);

  const toggle = () => setOpend(!opend);

  return (
    <Navbar
      sticky="top"
      color="white"
      expand="md"
      className={className({
        shouldChangeNavbarStyle,
      })}
      light
    >
      <Container>
        <div className="Navbar">
          {!showNavbarLogo && (
            <NavbarBrand href="/">
              <h2 className="Navbar__title">Wikee</h2>
            </NavbarBrand>
          )}
        </div>

        <NavbarToggler className="mr-auto" onClick={toggle}>
          {opend ? (
            <FontAwesomeIcon
              className="icons-times"
              color="black"
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon
              className="icons-times"
              color="black"
              icon={faTimes}
            />
          )}
        </NavbarToggler>

        <Collapse isOpen={!opend} navbar>
          <Nav className="Navbar-list" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Pages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Women</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Men</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {opend && (
          <div className="headers-icons">
            <FontAwesomeIcon
              className="icons-font"
              color="wheate"
              icon={faSearch}
            />
            <FontAwesomeIcon className="icons-font" icon={faLock} />
            <FontAwesomeIcon className="icons-font" icon={faUser} />
            <FontAwesomeIcon className="icons-font" icon={faSlidersH} />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
