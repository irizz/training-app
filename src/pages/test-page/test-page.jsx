import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { Progress } from "../../modules/progress";
import { Sandbox } from "../../modules/sandbox";
import { MyContext } from "../../provider";
import { ButtonPanel } from "./modules/button-panel";
import { Result } from "./modules/result";

export class TestPage extends React.Component {
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
            <ButtonPanel />
            <Progress />
            <Result />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
