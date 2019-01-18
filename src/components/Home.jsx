import React from 'react';
//components
import { TaskSelection } from './TaskSelection';
//style
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <p>
                    Welcome
                </p>
            </React.Fragment>
        )
    }
}