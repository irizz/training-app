import React from 'react';
//components
import { Navigation } from './Navigation';
import { Main } from './Main';
import { MyProvider } from './MyProvider';
//style
import { Grid, Row, Col } from 'react-bootstrap';

export const App = () => {
    return (
        <MyProvider>
            <Grid fluid>
                <Row >
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <Main />
                    </Col>
                </Row>
            </Grid>
        </MyProvider>
    )
}