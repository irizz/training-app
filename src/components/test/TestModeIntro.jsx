import React from "react";
import { Panel, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../MyProvider";

export class TestModeIntro extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <Panel>
              <ListGroup>
                <ListGroupItem>
                  <h3>Режим тестирования</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <p>
                    В данном разделе представлены <strong>N задач</strong> для
                    определения уровня знаний пользователя.
                  </p>
                  <p>
                    После ввода решения в специальное поле можно несколько раз
                    проверить результат выполнения написанного кода (кнопка{" "}
                    <strong>"Вывести результат"</strong>).
                  </p>
                  <p>
                    Чтобы отправить решение на проверку нажмите кнопку{" "}
                    <strong>"Отправить решение"</strong>. После проверки решения
                    его нельзя будет исправить.
                  </p>
                  <p>
                    Если Вы не знаете, как решить ту или иную задачу, нажмите
                    кнопку <strong>"Пропустить"</strong>. В данном случае
                    решение не будет засчитано (потерян 1 балл).
                  </p>
                  <p>По окончанию тестирования будет выведен результат.</p>
                </ListGroupItem>
                <ListGroupItem>
                  <LinkContainer to="/test/session">
                    <Button
                      type="submit"
                      bsStyle="primary"
                      className="center-align-btn"
                      onClick={context.handleStartClick}
                    >
                      Начать
                    </Button>
                  </LinkContainer>
                </ListGroupItem>
              </ListGroup>
            </Panel>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
