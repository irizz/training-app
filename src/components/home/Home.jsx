import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { ModesDescription } from "./ModesDescription";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Panel>
          <ListGroup>
            <ListGroupItem>
              <h3>Добро пожаловать в интерактивный задачник JavaScript</h3>
              <p>Выберите нужный режим:</p>
            </ListGroupItem>
            <ListGroupItem>
              <ModesDescription />
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </React.Fragment>
    );
  }
}
