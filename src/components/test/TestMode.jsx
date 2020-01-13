import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { MyContext } from "../MyProvider";
import { Progress } from "../train/Progress";
import { Sandbox } from "../train/Sandbox";
import { BtnPanel } from "./BtnPanel";
import { Result } from "./Result";

export class TestMode extends React.Component {
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
            <BtnPanel />
            <Progress />
            <Result />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
