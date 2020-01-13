import React from "react";
import {
  Col,
  Image,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  ASSETS_DIR_PATH,
  HOME_PAGE_PATH,
  TEST_INTRO_PAGE_PATH,
  TRAIN_INTRO_PAGE_PATH
} from "../../constants";
import { MyContext } from "../../provider";

export const Navigation = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <Navbar fluid inverse>
          <Row>
            <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Navbar.Header>
                <NavbarBrand>
                  <LinkContainer to={HOME_PAGE_PATH}>
                    <Image src={ASSETS_DIR_PATH + "notebook64.png"} />
                  </LinkContainer>
                </NavbarBrand>
              </Navbar.Header>
              <Nav>
                <LinkContainer to={TRAIN_INTRO_PAGE_PATH}>
                  <NavItem onClick={context.setModeToTraining}>
                    Тренировка
                  </NavItem>
                </LinkContainer>
                <LinkContainer to={TEST_INTRO_PAGE_PATH}>
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
