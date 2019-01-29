import React from "react";
// router
import { LinkContainer } from "react-router-bootstrap";
//context
import { MyContext } from "./MyProvider";
// style
import {
  Row,
  Col,
  Navbar,
  NavItem,
  Nav,
  NavbarBrand,
  Image
} from "react-bootstrap";

export const Navigation = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <Navbar fluid inverse>
          <Row>
            <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
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
                  <NavItem onClick={context.setModeToTraining}>
                    Тренировка
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/test">
                  <NavItem onClick={context.setModeToTest}>
                    Тестирование
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Col>
          </Row>
        </Navbar>
      )}
    </MyContext.Consumer>
  );
};
