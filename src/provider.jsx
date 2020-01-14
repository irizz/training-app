import React from "react";
import { Alert } from "react-bootstrap";
import chai from "chai";
import "mocha/mocha";
import { DEFAULT_OUTPUT_TEXT, MODES, TASKS_NOT_FOUND_ERROR } from "./constants";
import { TASKS } from "./tasks";

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  defaultOutputState = {
    currentOutputTab: 1,
    defaultOutput: DEFAULT_OUTPUT_TEXT,
    outputShadowColor: "",
    testError: ""
  };

  defaultSessionState = {
    complexityArr: [],
    sectionArr: [],
    completed: 0,
    skipped: 0,
    correct: 0,
    failed: 0,
    progressNow: 0,
    isBtnDisabled: false,
    isBtnPanelHidden: false,
    isFinishBtnHidden: true
  };

  initState = {
    filteredTasks: [],
    currentTask: {},
    progressMax: 0,
    showResultModal: false,
    currentMode: "",
    ...this.defaultOutputState,
    ...this.defaultSessionState
  };

  state = {
    ...this.initState
  };

  errorTask = {
    id: 9999,
    description: <Alert bsStyle="danger">Error: No more tasks</Alert>,
    preCode: "//Error"
  };

  clearPrevSession = () => {
    this.setState({
      currentOutputTab: 1,
      ...this.defaultSessionState
    });
  };

  clearTestOutput = () => {
    document.getElementById("mocha").innerHTML = "";
    mocha.suite.suites = [];
    this.setState({
      outputShadowColor: ""
    });
  };

  decrementTaskIndex = arr => {
    const { currentTask } = this.state;
    let idx = arr.indexOf(currentTask);

    if (idx > 0) {
      --idx;
      return arr[idx];
    } else {
      return this.errorTask;
    }
  };

  getErrorAlert = errorText => <Alert bsStyle="danger">{errorText}</Alert>;

  handleCloseModal = () => {
    this.setState({ showResultModal: false });
  };

  handleComplexityCheck = () => this.toggleCheckboxValue("complexityArr");

  handleContinueBtn = () => {
    let { completed, filteredTasks, progressMax, progressNow } = this.state;

    this.clearTestOutput();
    if (progressNow < progressMax - 1) {
      this.setState({
        currentTask: this.incrementTaskIndex(filteredTasks),
        progressNow: ++progressNow,
        completed: ++completed,
        isBtnDisabled: false,
        ...this.defaultOutputState
      });
    } else if (progressNow == progressMax - 1) {
      this.setState({
        progressNow: ++progressNow,
        completed: ++completed,
        showResultModal: true,
        isBtnPanelHidden: true,
        isFinishBtnHidden: false,
        isBtnDisabled: false,
        ...this.defaultOutputState
      });
    } else if (progressNow > progressMax - 1) {
      this.setState({
        showResultModal: true
      });
    }
  };

  handleNextBtn = () => {
    let { progressNow, progressMax, filteredTasks } = this.state;
    this.clearTestOutput();

    if (progressNow < progressMax - 1) {
      this.setState({
        currentTask: this.incrementTaskIndex(filteredTasks),
        progressNow: ++progressNow,
        ...this.defaultOutputState
      });
    } else if (progressNow == progressMax - 1) {
      this.setState({
        progressNow: ++progressNow,
        isBtnPanelHidden: true,
        isFinishBtnHidden: false,
        ...this.defaultOutputState
      });
    }
  };

  handlePrevBtn = () => {
    let { filteredTasks, progressNow, progressMax } = this.state;
    this.clearTestOutput();

    if (progressNow > 0 && progressNow < progressMax) {
      this.setState({
        currentTask: this.decrementTaskIndex(filteredTasks),
        progressNow: --progressNow,
        ...this.defaultOutputState
      });
    } else if (progressNow == progressMax) {
      this.setState({
        progressNow: --progressNow,
        ...this.defaultOutputState
      });
    } else {
      this.setState({
        ...this.defaultOutputState
      });
    }
  };

  handleSectionCheck = () => this.toggleCheckboxValue("sectionArr");

  handleSelectTab = key => {
    this.setState({ currentOutputTab: key });
  };

  handleSkipBtn = () => {
    let { filteredTasks, progressNow, progressMax, skipped } = this.state;
    this.clearTestOutput();

    if (progressNow < progressMax - 1) {
      this.setState({
        currentTask: this.incrementTaskIndex(filteredTasks),
        progressNow: ++progressNow,
        skipped: ++skipped,
        ...this.defaultOutputState
      });
    } else if (progressNow == progressMax - 1) {
      this.setState({
        progressNow: ++progressNow,
        skipped: ++skipped,
        showResultModal: true,
        isBtnPanelHidden: true,
        isFinishBtnHidden: false,
        ...this.defaultOutputState
      });
    } else if (progressNow > progressMax - 1) {
      this.setState({
        showResultModal: true
      });
    }
  };

  handleStartClick = () => {
    event.preventDefault();
    const { complexityArr, currentMode, sectionArr } = this.state;

    if (currentMode == MODES.TRAIN) {
      const isComplexityChecked = complexityArr.length > 0;
      const isSectionChecked = sectionArr.length > 0;

      if (!isComplexityChecked && isSectionChecked) {
        this.state.filteredTasks = TASKS.filter(
          task => sectionArr.indexOf(task.section) !== -1
        );
      } else if (isComplexityChecked && !isSectionChecked) {
        this.state.filteredTasks = TASKS.filter(
          task => complexityArr.indexOf(task.complexity) !== -1
        );
      } else if (isComplexityChecked && isSectionChecked) {
        this.state.filteredTasks = TASKS.filter(
          task =>
            complexityArr.indexOf(task.complexity) !== -1 &&
            sectionArr.indexOf(task.section) !== -1
        );
      }

      if (
        this.state.filteredTasks.length == 0 &&
        (isComplexityChecked || isSectionChecked)
      ) {
        alert(TASKS_NOT_FOUND_ERROR);
        this.setAllTasks();
      } else if (
        this.state.filteredTasks.length == 0 &&
        !isComplexityChecked &&
        !isSectionChecked
      ) {
        this.setAllTasks();
      } else {
        this.setState({
          currentTask: this.state.filteredTasks[0],
          progressMax: this.state.filteredTasks.length
        });
      }
      this.clearPrevSession();
    } else if (currentMode == MODES.TEST) {
      this.clearPrevSession();
      this.setAllTasks();
    }
  };

  incrementTaskIndex = arr => {
    const { currentTask, filteredTasks } = this.state;
    let idx = arr.indexOf(currentTask);

    if (idx < filteredTasks.length - 1) {
      ++idx;
      return arr[idx];
    } else {
      return this.errorTask;
    }
  };

  runTests = userCode => {
    this.clearTestOutput();
    let {
      correct,
      currentMode,
      currentTask,
      failed,
      isBtnDisabled
    } = this.state;
    let failedTest = 0;
    let correctTest = 0;

    try {
      window.eval(userCode);
    } catch (error) {
      this.setState({
        testError: this.getErrorAlert(error.toString())
      });
    }

    mocha.setup("bdd");
    let assert = chai.assert;
    eval(currentTask.test);

    mocha
      .run()
      .on("fail", () => {
        if (failedTest == 0) {
          ++failedTest;
          this.setState({
            failed: ++failed,
            outputShadowColor: "output-shadow-red"
          });
        }
      })
      .on("pass", () => {
        if (failedTest == 0 && correctTest == 0) {
          ++correctTest;
          this.setState({
            correct: ++correct,
            outputShadowColor: "output-shadow-green"
          });
        }
      });

    if (currentMode == MODES.TEST) {
      this.setState({
        currentOutputTab: 2,
        isBtnDisabled: !isBtnDisabled
      });
    } else if (currentMode == MODES.TRAIN) {
      this.setState({
        currentOutputTab: 2
      });
    }
  };

  setAllTasks = () => {
    this.setState({
      filteredTasks: TASKS,
      progressMax: TASKS.length,
      currentTask: TASKS[0]
    });
  };

  setModeToTest = () => {
    this.setState({
      currentMode: MODES.TEST
    });
  };

  setModeToTraining = () => {
    this.setState({
      currentMode: MODES.TRAIN
    });
  };

  toggleCheckboxValue = arrName => {
    const { value } = event.target;
    const idx = this.state[arrName].indexOf(value);

    if (idx == -1) {
      this.state[arrName].push(value);
    } else {
      this.state[arrName].splice(idx, 1);
    }
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
          clearTestOutput: this.clearTestOutput,
          setModeToTest: this.setModeToTest,
          setModeToTraining: this.setModeToTraining,
          handlePrevBtn: this.handlePrevBtn,
          handleNextBtn: this.handleNextBtn
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
