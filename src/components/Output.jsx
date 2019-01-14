import React from 'react';

import { Panel, Tabs, Tab } from 'react-bootstrap';

export const Output = (props) => {
    return (
        <Panel>
            <Tabs 
                id="controlled-tab" 
                activeKey={props.currentOutputTab} 
                onSelect={props.handleSelectTab} 
                animation={false} >
                <Tab eventKey={1} title="Вывод" >
                    <div id='consoleOutput'>
                        {props.output}
                    </div>
                </Tab>
                <Tab eventKey={2} title="Тест">
                    <p>Результат проверки решения</p>
                    <div id='mocha'>
                    </div>
                </Tab>
            </Tabs>
        </Panel>
    )
}