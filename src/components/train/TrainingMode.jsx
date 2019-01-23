import React from "react";
// components
import { Sandbox } from "./Sandbox";
import { BtnPanel } from "./BtnPanel";
import { Progress } from "./Progress";
import { Result } from "./Result";
//context
import { MyContext } from "../MyProvider";

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
            <BtnPanel />
            <Progress />
            <Result />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
