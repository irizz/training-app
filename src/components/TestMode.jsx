import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";
export class TestMode extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Panel>
          <ListGroup>
            <ListGroupItem>
              <h3>Режим тестирования</h3>
            </ListGroupItem>
            <ListGroupItem>
              <p>Описание</p>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </React.Fragment>
    );
  }
}
