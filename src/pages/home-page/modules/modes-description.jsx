import React from "react";
import { PanelGroup, Panel, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  ASSETS_DIR_PATH,
  MODES_KEYS,
  TEST_INTRO_PAGE_PATH,
  TRAIN_INTRO_PAGE_PATH
} from "../../../constants";
import { MyContext } from "../../../provider";

export class ModesDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: MODES_KEYS.TRAIN
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
            className="modes-description"
            id="panel-group"
            activeKey={activeKey}
            onSelect={this.handleSelect}
          >
            <Panel
              eventKey={MODES_KEYS.TRAIN}
              className="modes-description__panel"
            >
              <Panel.Heading>
                <Panel.Title toggle>Режим тренировки</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src={ASSETS_DIR_PATH + "weightlifting.png"}
                  className="modes-description__panel_image"
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
            <Panel
              eventKey={MODES_KEYS.TEST}
              className="modes-description__panel"
            >
              <Panel.Heading>
                <Panel.Title toggle>Режим тестирования</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src={ASSETS_DIR_PATH + "exam.png"}
                  className="modes-description__panel_image"
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
