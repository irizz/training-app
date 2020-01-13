import React from "react";
import { Button, Panel, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { TEST_INTRO_PAGE_PATH } from "../../../constants";
import { MyContext } from "../../../provider";

export const ButtonPanel = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <Panel
            className="button-panel"
            hidden={context.state.isBtnPanelHidden}
          >
            <Panel.Body>
              <ButtonGroup className="button-panel__button">
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
            className="button-panel"
            hidden={context.state.isFinishBtnHidden}
          >
            <Panel.Body>
              <LinkContainer to={TEST_INTRO_PAGE_PATH}>
                <Button
                  bsSize="large"
                  bsStyle="success"
                  className="button-panel__button"
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
