import React from "react";
//router
import { LinkContainer } from "react-router-bootstrap";
//style
import { Panel, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export class TestModeIntro extends React.Component {
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
              <LinkContainer to="/test/session">
                <Button
                  type="submit"
                  bsStyle="primary"
                  className="center-align-btn"
                >
                  Начать
                </Button>
              </LinkContainer>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </React.Fragment>
    );
  }
}
