import React from 'react';
// components
import { Instruction } from './Instruction';
import { Sandbox } from './Sandbox';
import { BtnPanel } from './BtnPanel';
import { Progress } from './Progress';
import { Result } from './Result';
//context
import { MyContext } from './MyProvider';

export class Training extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment >
                        <Instruction description={context.state.currentTask.description} />
                        <Sandbox
                            preCode={context.state.currentTask.preCode}
                            codeReturn={context.state.currentTask.codeReturn}
                            defaultOutput={context.state.defaultOutput}
                            sendCodeToParent={context.runTests}
                            isBtnDisabled={context.state.isBtnDisabled} />
                        <BtnPanel
                            isBtnDisabled={context.state.isBtnDisabled} />
                        <Progress />
                        <Result />
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}