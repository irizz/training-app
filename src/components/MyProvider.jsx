// this component works as a store for states and methods that should be available in other components

import React from 'react';
//data
import { Tasks } from '../Tasks';
// tests
import 'mocha/mocha';
import chai from 'chai';
// style
import { Alert } from 'react-bootstrap';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
    state = {
        complexityArr: [],
        sectionArr: [],
        filteredTasks: [],
        currentTask: {},
        progressNow: 0,
        progressMax: 0,
        completed: 0,
        skipped: 0,
        isBtnDisabled: false,
        defaultOutput: 'Результат выполнения кода',
        currentOutputTab: 1,
        showModal: false
    }


    //filter methods for TaskSelection component
    handleComplexityCheck = () => {
        if (this.state.complexityArr.indexOf(event.target.value) == -1) {
            this.state.complexityArr.push(event.target.value);
        } else {
            this.state.complexityArr.splice(this.state.complexityArr.indexOf(event.target.value), 1);
        }
    }

    handleSectionCheck = () => {
        if (this.state.sectionArr.indexOf(event.target.value) == -1) {
            this.state.sectionArr.push(event.target.value);
        } else {
            this.state.sectionArr.splice(this.state.sectionArr.indexOf(event.target.value), 1);
        }
    }

    handleStartClick = () => {
        event.preventDefault();

        this.state.filteredTasks = Tasks.filter(task =>
            (this.state.complexityArr.indexOf(task.complexity) != -1)
            &&
            (this.state.sectionArr.indexOf(task.section) != -1)
        );

        //clear filters
        this.state.complexityArr = [];
        this.state.sectionArr = [];

        if (this.state.filteredTasks[0] == undefined) {
            this.setState({
                filteredTasks: Tasks,
                progressMax: Tasks.length
            })
        } else {
            this.setState({
                progressMax: this.state.filteredTasks.length
            })
        }

        console.log(this.state.filteredTasks);
        console.log(this.state.currentTask);
    }

    //handling button clicks for BtnPanel component
    handleSkipBtn = () => {
        if (this.state.progressNow < (this.state.progressMax - 1)) {

            document.getElementById('mocha').innerHTML = '';
            mocha.suite.suites = [];
            console.clear();

            this.setState({
                currentTask: this.changeTask(this.state.filteredTasks),
                progressNow: ++this.state.progressNow,
                skipped: ++this.state.skipped,
                defaultOutput: this.state.defaultOutput,
                currentOutputTab: 1

            })
        } else if (this.state.progressNow == (this.state.progressMax - 1)) {
            document.getElementById('mocha').innerHTML = '';
            mocha.suite.suites = [];
            console.clear();

            this.setState({
                progressNow: ++this.state.progressNow,
                skipped: ++this.state.skipped,
                defaultOutput: this.state.defaultOutput,
                currentOutputTab: 1,
                showModal: true
            })
        }
    }

    handleContinueBtn = () => {
        if (this.state.progressNow < this.state.progressMax) {

            document.getElementById('mocha').innerHTML = '';
            mocha.suite.suites = [];
            console.clear();

            this.setState({
                currentTask: this.changeTask(this.state.filteredTasks),
                progressNow: ++this.state.progressNow,
                completed: ++this.state.completed,
                defaultOutput: this.state.defaultOutput,
                isBtnDisabled: false,
                currentOutputTab: 1
            })
        } else if (this.state.progressNow == (this.state.progressMax - 1)) {
            document.getElementById('mocha').innerHTML = '';
            mocha.suite.suites = [];
            console.clear();

            this.setState({
                progressNow: ++this.state.progressNow,
                completed: ++this.state.completed,
                defaultOutput: this.state.defaultOutput,
                isBtnDisabled: false,
                currentOutputTab: 1,
                showModal: true
            })
        }
    }

    changeTask = (arr) => {
        let arrEl = this.state.currentTask;
        let arrIndex = arr.indexOf(arrEl);
        let lastIndex = this.state.filteredTasks.length - 1;

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

    //changes tabs in Output component
    handleSelectTab = (key) => {
        this.setState({ currentOutputTab: key });
    }

    runTests = (userCode) => {
        window.eval(userCode);

        mocha.setup('bdd');
        let assert = chai.assert;
        eval(this.state.currentTask.test);
        mocha.run();

        this.setState({
            currentOutputTab: 2,
            isBtnDisabled: !this.state.isBtnDisabled
        })

    }

    //show modal with results
    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                handleComplexityCheck: this.handleComplexityCheck,
                handleSectionCheck: this.handleSectionCheck,
                handleStartClick: this.handleStartClick,
                handleSkipBtn: this.handleSkipBtn,
                handleContinueBtn: this.handleContinueBtn,
                runTests: this.runTests,
                handleSelectTab: this.handleSelectTab,
                handleCloseModal: this.handleCloseModal,
                handleShowModal: this.handleShowModal
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}