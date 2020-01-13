import React from "react";
import { PanelGroup, Panel, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  ASSETS_DIR_PATH,
  TEST_INTRO_PAGE_PATH,
  TRAIN_INTRO_PAGE_PATH
} from "../../../constants";
import { MyContext } from "../../../provider";

export class ModesDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: "1"
    };
  }

  handleSelect = activeKey => {
    this.setState({ activeKey });
  };

  render() {
    const { activeKey } = this.state;

    return (
      <MyContext.Consumer>
        {context => (
          <PanelGroup
            accordion
            id="accordion-controlled-example"
            activeKey={activeKey}
            onSelect={this.handleSelect}
          >
            <Panel eventKey="1" className="mode-desc-panel">
              <Panel.Heading>
                <Panel.Title toggle>Режим тренировки</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src={ASSETS_DIR_PATH + "/weightlifting.png"}
                  width="64"
                  height="64"
                  className="left-align-img"
                />
                <p>
                  Песочница с заданиями различной сложности и тематики. После
                  проверки решения есть возможность его исправить и добиться
                  правильного ответа. Результат выполнения тренировочных заданий
                  не сохраняется.
                </p>
                <LinkContainer to={TRAIN_INTRO_PAGE_PATH}>
                  <Button bsSize="small" onClick={context.setModeToTraining}>
                    Перейти
                  </Button>
                </LinkContainer>
              </Panel.Body>
            </Panel>
            <Panel eventKey="2" className="mode-desc-panel">
              <Panel.Heading>
                <Panel.Title toggle>Режим тестирования</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src={ASSETS_DIR_PATH + "exam.png"}
                  width="64"
                  height="64"
                  className="left-align-img"
                />
                <p>
                  Определённый набор заданий для тестирования уровня знаний
                  пользователя. Отправить решение можно только один раз, без
                  возможности исправления. По окончанию тестирования выводится
                  результат.
                </p>
                <LinkContainer to={TEST_INTRO_PAGE_PATH}>
                  <Button bsSize="small" onClick={context.setModeToTest}>
                    Перейти
                  </Button>
                </LinkContainer>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        )}
      </MyContext.Consumer>
    );
  }
}
