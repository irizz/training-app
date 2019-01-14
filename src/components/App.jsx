import React from 'react';
//components
import { Navigation } from './Navigation';
import { Main } from './Main';
//style
import { Grid, Row, Col } from 'react-bootstrap';

export const App = () => {
    return (
        <Grid>
            <Row >
                <Col
                    md={8}
                    mdOffset={2}
                    lg={10}
                    lgOffset={1} >
                    <Navigation />
                </Col>
            </Row>
            <Row >
                <Col
                    md={8}
                    mdOffset={2}
                    lg={10}
                    lgOffset={1} >
                    <Main />
                </Col>
            </Row>
        </Grid>
    )
}