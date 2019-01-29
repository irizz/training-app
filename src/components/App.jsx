import React from "react";
//components
import { Navigation } from "./Navigation";
import { MyRouter } from "./MyRouter";
import { MyProvider } from "./MyProvider";
//style
import { Grid, Row, Col } from "react-bootstrap";

export const App = () => {
  return (
    <MyProvider>
      <Grid fluid>
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
            <MyRouter />
          </Col>
        </Row>
      </Grid>
    </MyProvider>
  );
};
