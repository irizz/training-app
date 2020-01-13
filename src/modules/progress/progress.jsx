import React from "react";
import { ProgressBar } from "react-bootstrap";
import { MyContext } from "../../provider";

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
