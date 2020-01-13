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
  const tooltip3 = (
    <Tooltip id="tooltip">Очистить панель вывода и результаты тестов</Tooltip>
  );

  return (
    <MyContext.Consumer>
      {context => (
        <Panel>
          <Tabs
            id="controlled-tab"
            activeKey={context.state.currentOutputTab}
            onSelect={context.handleSelectTab}
            animation={false}
          >
            <Tab eventKey={1} title="Вывод">
              <div>{props.output}</div>
              <div id="sandbox-console-output" />
            </Tab>
            <Tab
              eventKey={2}
              title="Тест"
              className={context.state.outputShadowColor}
            >
              <p>Результат проверки решения</p>
              <span> {context.state.testError} </span>
              <div id="mocha" />
            </Tab>
          </Tabs>
          <Panel.Footer>
            <OverlayTrigger placement="right" overlay={tooltip3}>
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
