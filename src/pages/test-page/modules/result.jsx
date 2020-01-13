import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../../provider";

export class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateResult = (correct, max) => Math.round((correct / max) * 100);

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Modal
            show={context.state.showResultModal}
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
              <p>Правильно: {context.state.correct} </p>
              <p>Неправильно: {context.state.failed} </p>
              <h3>
                Ваш результат:{" "}
                {this.calculateResult(
                  context.state.correct,
                  context.state.progressMax
                )}
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
