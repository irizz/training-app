import React from 'react';

import { Panel } from 'react-bootstrap';

export const Instruction = (props) => {
    return (
        <Panel >
            <Panel.Heading>
                Описание задачи
            </Panel.Heading>
            <Panel.Body>
                {props.description}
            </Panel.Body>
        </Panel>
    )
}