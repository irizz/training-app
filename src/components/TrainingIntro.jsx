import React from 'react';
//components
import { TaskSelection } from './TaskSelection';
//style
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export class TrainingIntro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Panel>
                    <ListGroup>
                        <ListGroupItem>
                            <h4>Добро пожаловать!</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>Чтобы приступить к решению задач, выберите уровень сложности и/или тему, затем нажмите <strong>"Начать"</strong>. </p>
                            <p>Можно выбрать <strong>1 или несколько</strong> уровней сложности или тем.</p>
                            <p>При отсутствии выбранных критериев будут отображены <strong>все задачи</strong>, присутствующие в базе.</p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <TaskSelection />
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </React.Fragment>
        )
    }
}