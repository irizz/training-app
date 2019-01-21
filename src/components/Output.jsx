import React from "react";
//context
import { MyContext } from "./MyProvider";
//style
import { Panel, Tabs, Tab, Button } from "react-bootstrap";

export const Output = props => {
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
              <div id="consoleOutput">{props.output}</div>
            </Tab>
            <Tab eventKey={2} title="Тест">
              <p>Результат проверки решения</p>
              <div id="mocha" />
            </Tab>
          </Tabs>
          <Panel.Footer>
            <Button
              bsSize="small"
              className="clear-btn"
              onClick={context.clearTestOutput}
            >
              {" "}
              Очистить{" "}
            </Button>
          </Panel.Footer>
        </Panel>
      )}
    </MyContext.Consumer>
  );
};
