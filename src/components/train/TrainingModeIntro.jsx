import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { MyContext } from "../MyProvider";
import { TasksSelection } from "./TasksSelection";

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
                Чтобы отобразить <strong>все задачи</strong>, присутствующие в базе, можно
                пропустить выбор критериев.
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
