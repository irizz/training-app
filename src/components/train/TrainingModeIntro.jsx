import React from "react";
//components
import { TasksSelection } from "./TasksSelection";
//style
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export class TrainingModeIntro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Panel>
          <ListGroup>
            <ListGroupItem>
              <h3>Режим тренировки</h3>
            </ListGroupItem>
            <ListGroupItem>
              <p>
                Чтобы приступить к решению задач, выберите уровень сложности
                и/или тему, затем нажмите <strong>"Начать"</strong>.{" "}
              </p>
              <p>
                Можно выбрать <strong>1 или несколько</strong> уровней сложности
                или тем.
              </p>
              <p>
                При отсутствии выбранных критериев будут отображены{" "}
                <strong>все задачи</strong>, присутствующие в базе.
              </p>
            </ListGroupItem>
            <ListGroupItem>
              <TasksSelection />
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </React.Fragment>
    );
  }
}
