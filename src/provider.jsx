import React from "react";
import { Alert } from "react-bootstrap";
import chai from "chai";
import "mocha/mocha";
import { Tasks } from "./tasks";

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
    correct: 0,
    failed: 0,
    isBtnDisabled: false,
    defaultOutput: "Результат выполнения кода",
    currentOutputTab: 1,
    outputShadowColor: "",
    showResultModal: false,
    testError: "",
    currentMode: "",
    isBtnPanelHidden: false,
    isFinishBtnHidden: true
  };

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

  setModeToTest = () => {
    this.setState({
      currentMode: "test"
    });
  };

  setModeToTraining = () => {
    this.setState({
      currentMode: "training"
    });
  };

  handleStartClick = () => {
    event.preventDefault();

    if (this.state.currentMode == "training") {
      // TRAINING MODE
      if (
        //in case if only one filter was chosen
        this.state.complexityArr[0] == undefined &&
        this.state.sectionArr[0] != undefined
      ) {
        this.state.filteredTasks = Tasks.filter(
          task => this.state.sectionArr.indexOf(task.section) != -1
        );
      } else if (
        //same, but other filter
        this.state.sectionArr[0] == undefined &&
        this.state.complexityArr[0] != undefined
      ) {
        this.state.filteredTasks = Tasks.filter(
          task => this.state.complexityArr.indexOf(task.complexity) != -1
        );
      } else {
        // if both filters were clicked
        this.state.filteredTasks = Tasks.filter(
          task =>
            this.state.complexityArr.indexOf(task.complexity) != -1 &&
            this.state.sectionArr.indexOf(task.section) != -1
        );
      }

      if (
        //if one or both filters were chosen, but there's not a single task with such criterias
        (this.state.filteredTasks[0] == undefined &&
          this.state.complexityArr[0] != undefined) ||
        (this.state.filteredTasks[0] == undefined &&
          this.state.sectionArr[0] != undefined)
      ) {
        alert(
          "Не удалось найти задачи с выбранными критериями. Будут отображены все задачи, присутствующие в базе."
        );
        this.setState({
          filteredTasks: Tasks,
          progressMax: Tasks.length,
          currentTask: Tasks[0]
        });
      } else if (
        // if user didn't choose any criteria and wants to see all tasks
        this.state.filteredTasks[0] == undefined &&
        this.state.complexityArr[0] == undefined &&
        this.state.sectionArr[0] == undefined
      ) {
        this.setState({
          filteredTasks: Tasks,
          progressMax: Tasks.length,
          currentTask: Tasks[0]
        });
      } else {
        // if criterias were chosen and there are tasks with such criterias
        this.setState({
          currentTask: this.state.filteredTasks[0],
          progressMax: this.state.filteredTasks.length
        });
      }
      this.clearPrevSession();
    } else if (this.state.currentMode == "test") {
      // TEST MODE
      this.clearPrevSession();
      this.setState({
        filteredTasks: Tasks,
        progressMax: Tasks.length,
        currentTask: Tasks[0]
      });
    }
  };

  clearPrevSession = () => {
    this.state.complexityArr = [];
    this.state.sectionArr = [];
    this.setState({
      completed: 0,
      skipped: 0,
      correct: 0,
      failed: 0,
      progressNow: 0,
      currentOutputTab: 1,
      isBtnDisabled: false,
      isBtnPanelHidden: false,
      isFinishBtnHidden: true
    });
  };

  handleSkipBtn = () => {
    this.clearTestOutput();
    if (this.state.progressNow < this.state.progressMax - 1) {
      this.setState({
        currentTask: this.incrementTaskIndex(this.state.filteredTasks),
        progressNow: ++this.state.progressNow,
        skipped: ++this.state.skipped,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: ""
      });
    } else if (this.state.progressNow == this.state.progressMax - 1) {
      this.setState({
        progressNow: ++this.state.progressNow,
        skipped: ++this.state.skipped,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        showResultModal: true,
        testError: "",
        outputShadowColor: "",
        isBtnPanelHidden: true,
        isFinishBtnHidden: false
      });
    } else if (this.state.progressNow > this.state.progressMax - 1) {
      this.setState({
        showResultModal: true
      });
    }
  };

  handleContinueBtn = () => {
    this.clearTestOutput();
    if (this.state.progressNow < this.state.progressMax - 1) {
      this.setState({
        currentTask: this.incrementTaskIndex(this.state.filteredTasks),
        progressNow: ++this.state.progressNow,
        completed: ++this.state.completed,
        defaultOutput: this.state.defaultOutput,
        isBtnDisabled: false,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: ""
      });
    } else if (this.state.progressNow == this.state.progressMax - 1) {
      this.setState({
        progressNow: ++this.state.progressNow,
        completed: ++this.state.completed,
        defaultOutput: this.state.defaultOutput,
        isBtnDisabled: false,
        currentOutputTab: 1,
        showResultModal: true,
        testError: "",
        outputShadowColor: "",
        isBtnPanelHidden: true,
        isFinishBtnHidden: false
      });
    } else if (this.state.progressNow > this.state.progressMax - 1) {
      this.setState({
        showResultModal: true
      });
    }
  };

  handlePrevBtn = () => {
    this.clearTestOutput();
    if (
      this.state.progressNow > 0 &&
      this.state.progressNow < this.state.progressMax
    ) {
      this.setState({
        currentTask: this.decrementTaskIndex(this.state.filteredTasks),
        progressNow: --this.state.progressNow,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: ""
      });
    } else if (this.state.progressNow == this.state.progressMax) {
      this.setState({
        progressNow: --this.state.progressNow,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: ""
      });
    } else {
      this.setState({
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: ""
      });
    }
  };

  handleNextBtn = () => {
    this.clearTestOutput();
    if (this.state.progressNow < this.state.progressMax - 1) {
      this.setState({
        currentTask: this.incrementTaskIndex(this.state.filteredTasks),
        progressNow: ++this.state.progressNow,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: ""
      });
    } else if (this.state.progressNow == this.state.progressMax - 1) {
      this.setState({
        progressNow: ++this.state.progressNow,
        defaultOutput: this.state.defaultOutput,
        currentOutputTab: 1,
        testError: "",
        outputShadowColor: "",
        isBtnPanelHidden: true,
        isFinishBtnHidden: false
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

  decrementTaskIndex = arr => {
    let arrEl = this.state.currentTask;
    let arrIndex = arr.indexOf(arrEl);

    if (arrIndex > 0) {
      --arrIndex;
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
    this.setState({
      outputShadowColor: ""
    });
  };

  runTests = userCode => {
    this.clearTestOutput();

    let failedTest = 0;
    let correctTest = 0;

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

    mocha
      .run()
      .on("fail", () => {
        if (failedTest == 0) {
          ++failedTest;
          this.setState({
            failed: ++this.state.failed,
            outputShadowColor: "output-shadow-red"
          });
        }
      })
      .on("pass", () => {
        if (failedTest == 0 && correctTest == 0) {
          ++correctTest;
          this.setState({
            correct: ++this.state.correct,
            outputShadowColor: "output-shadow-green"
          });
        }
      });

    if (this.state.currentMode == "test") {
      this.setState({
        currentOutputTab: 2,
        isBtnDisabled: !this.state.isBtnDisabled
      });
    } else if (this.state.currentMode == "training") {
      this.setState({
        currentOutputTab: 2
      });
    }
  };

  handleSelectTab = key => {
    this.setState({ currentOutputTab: key });
  };

  handleCloseModal = () => {
    this.setState({ showResultModal: false });
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
