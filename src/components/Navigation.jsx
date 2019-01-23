import React from "react";
// router
import { LinkContainer } from "react-router-bootstrap";
// style
import { Navbar, NavItem, Nav, NavbarBrand, Image } from "react-bootstrap";

export const Navigation = props => {
  return (
    <Navbar fluid inverse>
      <Navbar.Header>
        <NavbarBrand>
          <LinkContainer to="/">
            <Image
              src="src/icons/notebook64.png"
              alt="Icon made by 
                  Smashicons(https://www.flaticon.com/authors/smashicons) 
                  from www.flaticon.com "
            />
          </LinkContainer>
        </NavbarBrand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/learn">
          <NavItem>Учебник</NavItem>
        </LinkContainer>
        <LinkContainer to="/train">
          <NavItem>Тренировка</NavItem>
        </LinkContainer>
        <LinkContainer to="/test">
          <NavItem>Тестирование</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};
