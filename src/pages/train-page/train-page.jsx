import React from "react";
import { Pager, Button, Panel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Progress } from "../../modules/progress";
import { Sandbox } from "../../modules/sandbox";
import { TRAIN_INTRO_PAGE_PATH } from "../../constants";
import { MyContext } from "../../provider";

export class TrainPage extends React.Component {
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
                className="train-button-panel"
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
              className="train-button-panel"
              hidden={context.state.isFinishBtnHidden}
            >
              <Panel.Body>
                <LinkContainer to={TRAIN_INTRO_PAGE_PATH}>
                  <Button
                    bsSize="large"
                    bsStyle="success"
                    className="train-button-panel__button"
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
