import React from 'react';
//style
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Panel>
                    <Panel.Body>
                        Welcome
                    </Panel.Body>
                </Panel>
            </React.Fragment>
        )
    }
}