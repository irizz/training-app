import React from "react";
import { Button, Panel, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../MyProvider";

export const BtnPanel = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <Panel
            className="no-border-panel"
            hidden={context.state.isBtnPanelHidden}
          >
            <Panel.Body>
              <ButtonGroup className="right-align-btn">
                <Button
                  bsStyle="warning"
                  onClick={context.handleSkipBtn}
                  disabled={context.state.isBtnDisabled}
                >
                  {" "}
                  Пропустить{" "}
                </Button>
                <Button
                  bsStyle="success"
                  onClick={context.handleContinueBtn}
                  disabled={!context.state.isBtnDisabled}
                >
                  {" "}
                  Продолжить{" "}
                </Button>
              </ButtonGroup>
            </Panel.Body>
          </Panel>
          <Panel
            className="no-border-panel"
            hidden={context.state.isFinishBtnHidden}
          >
            <Panel.Body>
              <LinkContainer to="/test">
                <Button
                  bsSize="large"
                  bsStyle="success"
                  className="right-align-btn"
                  onClick={context.clearPrevSession}
                >
                  Завершить
                </Button>
              </LinkContainer>
            </Panel.Body>
          </Panel>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};
