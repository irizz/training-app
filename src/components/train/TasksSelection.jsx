import React from "react";
import {
  Form,
  FormGroup,
  Checkbox,
  Button,
  ControlLabel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../MyProvider";

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
                <Checkbox
                  inline
                  value="basic"
                  onClick={context.handleComplexityCheck}
                >
                  Базовый
                </Checkbox>
                <Checkbox
                  inline
                  value="advanced"
                  onClick={context.handleComplexityCheck}
                >
                  Продвинутый
                </Checkbox>
                <Checkbox
                  inline
                  value="professional"
                  onClick={context.handleComplexityCheck}
                >
                  Профессионал
                </Checkbox>
              </FormGroup>
              <ControlLabel>Выберите одну или несколько тем:</ControlLabel>
              <FormGroup>
                <Checkbox value="basic-1" onClick={context.handleSectionCheck}>
                  {" "}
                  Основы JavaScript: переменные, типы данных, операторы{" "}
                </Checkbox>
                <Checkbox value="basic-2" onClick={context.handleSectionCheck}>
                  {" "}
                  Основы JavaScript: функции, объекты, массивы, циклы{" "}
                </Checkbox>
                <Checkbox value="dom" onClick={context.handleSectionCheck}>
                  {" "}
                  Работа с DOM{" "}
                </Checkbox>
                <Checkbox value="oop" onClick={context.handleSectionCheck}>
                  {" "}
                  ООП в JavaScript{" "}
                </Checkbox>
                <Checkbox value="ajax" onClick={context.handleSectionCheck}>
                  {" "}
                  AJAX{" "}
                </Checkbox>
                <Checkbox value="es6" onClick={context.handleSectionCheck}>
                  {" "}
                  Нововведения в ES6{" "}
                </Checkbox>
              </FormGroup>
              <LinkContainer to="/train/session">
                <Button
                  type="submit"
                  bsStyle="primary"
                  className="center-align-btn"
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
