import React from "react";
//context
import { MyContext } from "../MyProvider";
// style
import { Button, Panel, ButtonGroup } from "react-bootstrap";

export const BtnPanel = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <Panel className="no-border-panel">
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
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};
