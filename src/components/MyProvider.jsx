import React from "react";
//data
import { Tasks } from "../Tasks";
// tests
import "mocha/mocha";
import chai from "chai";
// style
import { Alert } from "react-bootstrap";

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
    failed: 0,
    isBtnDisabled: false,
    defaultOutput: "Результат выполнения кода",
    currentOutputTab: 1,
    showModal: false,
    testError: ""
  };

  //filter tasks by complexity and section checkboxes
  handleComplexityCheck = () => {
    if (this.state.complexityArr.indexOf(event.target.value) == -1) {
      this.state.complexityArr.push(event.target.value);
    } else {
      this.state.complexityArr.splice(
        this.state.complexityArr.indexOf(event.target.value),
        1
      );
    }
  };

  handleSectionCheck = () => {
    if (this.state.sectionArr.indexOf(event.target.value) == -1) {
      this.state.sectionArr.push(event.target.value);
    } else {
      this.state.sectionArr.splice(
        this.state.sectionArr.indexOf(event.target.value),
        1
      );
    }
  };

  handleStartClick = () => {
    event.preventDefault();

    this.state.filteredTasks = Tasks.filter(
      task =>
        this.state.complexityArr.indexOf(task.complexity) != -1 &&
        this.state.sectionArr.indexOf(task.section) != -1
    );

    this.clearPrevSession();

    if (this.state.filteredTasks[0] === undefined) {
      this.setState({
        filteredTasks: Tasks,
        progressMax: Tasks.length,
        currentTask: Tasks[0]
      });
    } else {
      this.setState({
        currentTask: this.state.filteredTasks[0],
        progressMax: this.state.filteredTasks.length
      });
    }
  };

  clearPrevSession = () => {
    this.state.complexityArr = [];
    this.state.sectionArr = [];
    this.setState({
      completed: 0,
      skipped: 0,
      failed: 0,
      progressNow: 0,
      currentOutputTab: 1,
      isBtnDisabled: false
    });
  };

  //handle button clicks in BtnPanel component
  handleSkipBtn = () => {
    if (this.state.progressNow < this.state.progressMax - 1) {
      this.clearTestOutput();
      this.setState({
        currentTask: this.incrementTaskIndex(this.state.filteredTasks),
        progressNow: ++this.state.progressNow,
        skipped: ++this.state.skipped,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: ''
      });
    } else if (this.state.progressNow == this.state.progressMax - 1) {
      this.clearTestOutput();
      this.setState({
        progressNow: ++this.state.progressNow,
        skipped: ++this.state.skipped,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        showModal: true,
        testError: ''
      });
    }
  };

  handleContinueBtn = () => {
    if (this.state.progressNow < this.state.progressMax - 1) {
      this.clearTestOutput();
      this.setState({
        currentTask: this.incrementTaskIndex(this.state.filteredTasks),
        progressNow: ++this.state.progressNow,
        completed: ++this.state.completed,
        defaultOutput: this.state.defaultOutput,
        isBtnDisabled: false,
        currentOutputTab: 1,
        testError: ''
      });
    } else if (this.state.progressNow == this.state.progressMax - 1) {
      this.clearTestOutput();
      this.setState({
        progressNow: ++this.state.progressNow,
        completed: ++this.state.completed,
        defaultOutput: this.state.defaultOutput,
        isBtnDisabled: false,
        currentOutputTab: 1,
        showModal: true,
        testError: ''
      });
    }
  };

  incrementTaskIndex = arr => {
    let arrEl = this.state.currentTask;
    let arrIndex = arr.indexOf(arrEl);
    let lastIndex = this.state.filteredTasks.length - 1;

    if (arrIndex < lastIndex) {
      ++arrIndex;
      return arr[arrIndex];
    } else {
      return {
        id: 9999,
        description: <Alert bsStyle="danger">Error: No more tasks</Alert>,
        preCode: "//Error"
      };
    }
  };

  clearTestOutput = () => {
    document.getElementById("mocha").innerHTML = "";
    mocha.suite.suites = [];
    console.clear();
  };

  //change tab in Output component
  handleSelectTab = key => {
    this.setState({ currentOutputTab: key });
  };

  //test user's solution
  runTests = userCode => {
    let failedTest = 0;

    try {
      window.eval(userCode);
    } catch (error) {
      this.setState({
        testError: <Alert bsStyle="danger">{error.toString()}</Alert>
      });
    }

    mocha.setup("bdd");
    let assert = chai.assert;
    eval(this.state.currentTask.test);
    mocha.run().on("fail", () => {
      if (failedTest == 0) {
        ++failedTest;
        this.setState({
          failed: ++this.state.failed
        });
      }
    });

    this.setState({
      currentOutputTab: 2,
      isBtnDisabled: !this.state.isBtnDisabled
    });
  };

  //close modal window with results
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleComplexityCheck: this.handleComplexityCheck,
          handleSectionCheck: this.handleSectionCheck,
          handleStartClick: this.handleStartClick,
          handleSkipBtn: this.handleSkipBtn,
          handleContinueBtn: this.handleContinueBtn,
          runTests: this.runTests,
          handleSelectTab: this.handleSelectTab,
          handleCloseModal: this.handleCloseModal,
          clearTestOutput: this.clearTestOutput
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
