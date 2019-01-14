import React from 'react';
// components
import { Instruction } from './Instruction';
import { Sandbox } from './Sandbox';
import { BtnPanel } from './BtnPanel';
import { Progress } from './Progress';
// data
import { Tasks } from '../Tasks';
// style
import { Alert } from 'react-bootstrap';
// tests
import 'mocha/mocha';
import chai from 'chai';

export class Training extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 10,
            completed: 0,
            skipped: 0,
            task: Tasks[0],
            defaultOutput: 'Результат выполнения кода',
            currentOutputTab: 1,
            isBtnDisabled: false
        }
    }

    handleSelectTab = (key) => {
        this.setState({ currentOutputTab: key });
    }

    runTests = (userCode) => {
        window.eval(userCode);

        mocha.setup('bdd');
        let assert = chai.assert;
        eval(this.state.task.test);
        mocha.run();

        this.setState({
            isBtnDisabled: !this.state.isBtnDisabled,
            currentOutputTab: 2
        })
    }

    changeTask = (arr) => {
        let arrEl = this.state.task;
        let arrIndex = arr.indexOf(arrEl);
        let lastIndex = Tasks.length - 1;

        if (arrIndex < lastIndex) {
            ++arrIndex;
            return arr[arrIndex];
        } else {
            return {
                'id': 9999,
                'description': <Alert bsStyle='danger'>Error: No more tasks</Alert>,
                'preCode': '//Error'
            }
        }
    }

    handleSkipBtn = () => {
        if (this.state.progress < 100) {

            document.getElementById('mocha').innerHTML = '';
            mocha.suite.suites = [];
            console.clear();

            this.setState({
                progress: this.state.progress + 10,
                skipped: ++this.state.skipped,
                task: this.changeTask(Tasks),
                defaultOutput: this.state.defaultOutput,
                currentOutputTab: 1

            })
        } else {
            alert(`Skipped: ${this.state.skipped}, Completed: ${this.state.completed}`)
        }
    }

    handleContinueBtn = () => {
        if (this.state.progress < 100) {

            document.getElementById('mocha').innerHTML = '';
            mocha.suite.suites = [];
            console.clear();

            this.setState({
                progress: this.state.progress + 10,
                completed: ++this.state.completed,
                task: this.changeTask(Tasks),
                defaultOutput: this.state.defaultOutput,
                isBtnDisabled: false,
                currentOutputTab: 1
            })
        } else {
            alert(`Skipped: ${this.state.skipped}, Completed: ${this.state.completed}`)
        }
    }

    render() {
        return (
            <React.Fragment >
                <Instruction description={this.state.task.description} />
                <Sandbox
                    preCode={this.state.task.preCode}
                    codeReturn={this.state.task.codeReturn}
                    defaultOutput={this.state.defaultOutput}
                    currentOutputTab={this.state.currentOutputTab}
                    handleSelectTab={this.handleSelectTab}
                    sendCodeToParent={this.runTests}
                    isBtnDisabled={this.state.isBtnDisabled} />
                <BtnPanel
                    handleContinueBtn={this.handleContinueBtn}
                    handleSkipBtn={this.handleSkipBtn}
                    isBtnDisabled={this.state.isBtnDisabled} />
                <Progress progress={this.state.progress} />
            </React.Fragment>
        )
    }
}