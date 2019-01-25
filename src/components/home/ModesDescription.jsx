import React from "react";
// router
import { LinkContainer } from "react-router-bootstrap";
//context
import { MyContext } from "../MyProvider";
//style
import { PanelGroup, Panel, Button } from "react-bootstrap";

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
    return (
      <MyContext.Consumer>
        {context => (
          <PanelGroup
            accordion
            id="accordion-controlled-example"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Panel eventKey="1" className="mode-desc-panel">
              <Panel.Heading>
                <Panel.Title toggle>Учебник</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src="src/icons/open-book.png"
                  width="64"
                  height="64"
                  className="left-align-img"
                  alt="Icon made by 
                  Zlatko Najdenovski(https://www.flaticon.com/authors/zlatko-najdenovski) 
                  from www.flaticon.com"
                />
                <p>
                  Основы языка программирования JavaScript. Учебник разделён на
                  6 глав, в каждой главе после изучения теоретической части
                  представлены практические задания для закрепления материала.
                </p>
                <LinkContainer to="/learn">
                  <Button bsSize="small">Перейти</Button>
                </LinkContainer>
              </Panel.Body>
            </Panel>
            <Panel eventKey="2" className="mode-desc-panel">
              <Panel.Heading>
                <Panel.Title toggle>Режим тренировки</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src="src/icons/weightlifting.png"
                  width="64"
                  height="64"
                  className="left-align-img"
                  alt="Icon made by 
                  Elias Bikbulatov(https://www.flaticon.com/authors/elias-bikbulatov) 
                  from www.flaticon.com "
                />
                <p>
                  Песочница с заданиями различной сложности и тематики. После
                  проверки решения есть возможность его исправить и добиться
                  правильного ответа. Результат выполнения тренировочных заданий
                  не сохраняется.
                </p>
                <LinkContainer to="/train">
                  <Button bsSize="small" onClick={context.setModeToTraining}>Перейти</Button>
                </LinkContainer>
              </Panel.Body>
            </Panel>
            <Panel eventKey="3" className="mode-desc-panel">
              <Panel.Heading>
                <Panel.Title toggle>Режим тестирования</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <img
                  src="src/icons/exam.png"
                  width="64"
                  height="64"
                  className="left-align-img"
                  alt="Icon made by 
                  Zlatko Najdenovski(https://www.flaticon.com/authors/zlatko-najdenovski) 
                  from www.flaticon.com"
                />
                <p>
                  Определённый набор заданий для тестирования уровня знаний
                  пользователя. Отправить решение можно только один раз, без
                  возможности исправления. По окончанию тестирования выводится
                  результат.
                </p>
                <LinkContainer to="/test">
                  <Button bsSize="small" onClick={context.setModeToTest}>Перейти</Button>
                </LinkContainer>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        )}
      </MyContext.Consumer>
    );
  }
}
