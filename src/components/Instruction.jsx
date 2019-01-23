import React from "react";
//style
import { Panel } from "react-bootstrap";

export const Instruction = props => {
  return (
    <Panel id='description'>
      <Panel.Body>{props.description}</Panel.Body>
    </Panel>
  );
};
