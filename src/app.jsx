import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Navigation } from "./modules/navigation";
import { MyRouter } from "./router";
import { MyProvider } from "./provider";

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
