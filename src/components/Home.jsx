import React from 'react';
//components
import { TaskSelection } from './TaskSelection';
//style
import { Panel } from 'react-bootstrap';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Panel>
                    <Panel.Body>
                        <h4>Добро пожаловать!</h4>
                    </Panel.Body>
                </Panel>
                <TaskSelection />
            </React.Fragment>
        )
    }
}