import React from "react";
// router
import { LinkContainer } from "react-router-bootstrap";
// style
import { Navbar, NavItem, Nav, NavbarBrand } from "react-bootstrap";

export const Navigation = props => {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <NavbarBrand>
          <LinkContainer to="/">
            <img
              src="src/icons/notebook64.png"
              width="34"
              height="34"
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
