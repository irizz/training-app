import React from "react";
// components
import { Sandbox } from "./Sandbox";
import { Progress } from "./Progress";
//context
import { MyContext } from "../MyProvider";
// router
import { LinkContainer } from "react-router-bootstrap";
//style
import { Pager, Button, Panel } from "react-bootstrap";

export class TrainingMode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <Sandbox
              preCode={context.state.currentTask.preCode}
              codeReturn={context.state.currentTask.codeReturn}
              defaultOutput={context.state.defaultOutput}
              sendCodeToParent={context.runTests}
            />
            <Panel>
              <Panel.Body
                className="no-border-panel"
                hidden={context.state.isBtnPanelHidden}
              >
                <Pager>
                  <Pager.Item previous onClick={context.handlePrevBtn}>
                    {" "}
                    &larr; Предыдущая
                  </Pager.Item>{" "}
                  <Pager.Item next onClick={context.handleNextBtn}>
                    Следующая &rarr;{" "}
                  </Pager.Item>
                </Pager>
              </Panel.Body>
            </Panel>
            <Panel
              className="no-border-panel"
              hidden={context.state.isFinishBtnHidden}
            >
              <Panel.Body>
                <LinkContainer to="/train">
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
            <Progress />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
