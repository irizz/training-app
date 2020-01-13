import React from "react";
import {
  Form,
  FormGroup,
  Checkbox,
  Button,
  ControlLabel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  TRAIN_PAGE_PATH,
  COMPLEXITY_VALUES,
  SECTION_VALUES
} from "../../../constants";
import { MyContext } from "../../../provider";

export class TasksSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <Form>
              <ControlLabel>Выберите уровень сложности:</ControlLabel>
              <FormGroup>
                {COMPLEXITY_VALUES.map(item => (
                  <Checkbox
                    inline
                    value={item.value}
                    onClick={context.handleComplexityCheck}
                  >
                    {item.header}
                  </Checkbox>
                ))}
              </FormGroup>
              <ControlLabel>Выберите одну или несколько тем:</ControlLabel>
              <FormGroup>
                {SECTION_VALUES.map(item => (
                  <Checkbox
                    value={item.value}
                    onClick={context.handleSectionCheck}
                  >
                    {item.header}
                  </Checkbox>
                ))}
              </FormGroup>
              <LinkContainer to={TRAIN_PAGE_PATH}>
                <Button
                  type="submit"
                  bsStyle="primary"
                  className="tasks-selection__start-button"
                  onClick={context.handleStartClick}
                >
                  Начать
                </Button>
              </LinkContainer>
            </Form>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
