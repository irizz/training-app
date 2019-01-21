import React from "react";
//context
import { MyContext } from "./MyProvider";
//style
import { Modal, Button } from "react-bootstrap";

export class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Modal
            show={context.state.showModal}
            onHide={context.handleCloseModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Результат</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Выполнено: {context.state.completed} из{" "}
                {context.state.progressMax}
              </p>
              <p>Неправильных: {context.state.failed} </p>
              <p>Пропущено: {context.state.skipped}</p>
              <h3>
                Ваш результат:{" "}
                {Math.round(
                  ((context.state.progressMax -
                    context.state.failed -
                    context.state.skipped) /
                    context.state.progressMax) *
                    100
                )}{" "}
                %
              </h3>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={context.handleCloseModal}>Закрыть</Button>
            </Modal.Footer>
          </Modal>
        )}
      </MyContext.Consumer>
    );
  }
}
