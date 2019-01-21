import React from "react";
//context
import { MyContext } from "./MyProvider";
//style
import { ProgressBar } from "react-bootstrap";

export const Progress = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <ProgressBar
          now={context.state.progressNow}
          max={context.state.progressMax}
          bsStyle="info"
          label={`${context.state.progressNow}/${context.state.progressMax}`}
        />
      )}
    </MyContext.Consumer>
  );
};
