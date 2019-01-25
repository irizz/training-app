import React from "react";
//router
import { LinkContainer } from "react-router-bootstrap";
//context
import { MyContext } from "../MyProvider";
//style
import { Panel, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export class TestModeIntro extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
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
                      onClick={context.handleStartClick}
                    >
                      Начать
                    </Button>
                  </LinkContainer>
                </ListGroupItem>
              </ListGroup>
            </Panel>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
