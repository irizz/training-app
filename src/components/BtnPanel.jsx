import React from 'react';

import { Button, Panel, ButtonGroup } from 'react-bootstrap';

export const BtnPanel = (props) => {
    return (
        <React.Fragment>
            <Panel className='no-border-panel' >
                <Panel.Body>
                    <ButtonGroup className='right-align-btn'>
                        <Button
                            bsStyle="warning"
                            onClick={props.handleSkipBtn}
                            disabled={props.isBtnDisabled}> Пропустить </Button>
                        <Button
                            bsStyle="success"
                            onClick={props.handleContinueBtn}
                            disabled={!props.isBtnDisabled} > Продолжить </Button>
                    </ButtonGroup>
                </Panel.Body>
            </Panel>
        </React.Fragment>
    )
}