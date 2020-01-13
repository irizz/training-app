import React from "react";
import {
  Panel,
  Tabs,
  Tab,
  Button,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { MyContext } from "../../provider";

export const SandboxOutput = props => {
  const tooltip = (
    <Tooltip id="tooltip">Очистить панель вывода и результаты тестов</Tooltip>
  );

  return (
    <MyContext.Consumer>
      {context => (
        <Panel>
          <Tabs
            className="sandbox-output"
            id="tabs"
            activeKey={context.state.currentOutputTab}
            onSelect={context.handleSelectTab}
            animation={false}
          >
            <Tab eventKey={1} title="Вывод">
              <div>{props.output}</div>
            </Tab>
            <Tab
              eventKey={2}
              title="Тест"
              className={context.state.outputShadowColor}
            >
              <p>Результат проверки решения</p>
              <span> {context.state.testError} </span>
              <div className="sandbox-output__test-results" id="mocha" />
            </Tab>
          </Tabs>
          <Panel.Footer>
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsSize="small" onClick={context.clearTestOutput}>
                {" "}
                Очистить{" "}
              </Button>
            </OverlayTrigger>
          </Panel.Footer>
        </Panel>
      )}
    </MyContext.Consumer>
  );
};
