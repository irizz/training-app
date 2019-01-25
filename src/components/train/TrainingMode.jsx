import React from "react";
// components
import { Sandbox } from "./Sandbox";
import { Progress } from "./Progress";
//context
import { MyContext } from "../MyProvider";
//style
import { Pager } from "react-bootstrap";

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
            <Pager>
              <Pager.Item previous onClick={context.handlePrevBtn}>
                {" "}
                &larr; Предыдущая
              </Pager.Item>{" "}
              <Pager.Item next onClick={context.handleNextBtn}>
                Следующая &rarr;{" "}
              </Pager.Item>
            </Pager>
            <Progress />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
