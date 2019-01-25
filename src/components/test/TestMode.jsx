import React from "react";
//components
import { Sandbox } from "../train/Sandbox";
import { BtnPanel } from "./BtnPanel";
import { Progress } from "../train/Progress";
import { Result } from "./Result";
//context
import { MyContext } from "../MyProvider";
//style
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

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
