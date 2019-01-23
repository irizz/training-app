import React from "react";
//style
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export class TutorialMode extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Panel>
          <ListGroup>
            <ListGroupItem>
              <h3>Глава</h3>
            </ListGroupItem>
            <ListGroupItem>
              <p> Теория </p>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </React.Fragment>
    );
  }
}