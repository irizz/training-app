import React from "react";
import { Alert, Tooltip } from "react-bootstrap";
import { Sandbox } from "./sandbox";

export class SandboxController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: this.props.preCode,
      codeReturn: this.props.codeReturn,
      output: this.props.defaultOutput
    };
  }

  codeMirrorOptions = {
    lineNumbers: true,
    mode: "javascript",
    theme: "neo"
  };

  showResultTooltip = (
    <Tooltip id="tooltip">Отобразить результат выполнения функции</Tooltip>
  );

  sendSolutionTooltip = (
    <Tooltip id="tooltip">
      Проверить правильность решения с помощью тестов
    </Tooltip>
  );

  componentWillReceiveProps(nextProps) {
    if (this.props.preCode != nextProps.preCode) {
      this.setState({
        code: nextProps.preCode,
        codeReturn: nextProps.codeReturn,
        output: nextProps.defaultOutput
      });
    }
  }

  handleCodeMirrorValueChange = (editor, data, code) => {
    this.setState({ code });
  };

  sendCodeToParent = () => {
    this.props.sendCodeToParent(this.state.code);
  };

  executeCode = () => {
    try {
      let userFunc = new Function(this.state.code + this.state.codeReturn);
      let userFuncRes = userFunc().toString();
      this.setState({
        output: userFuncRes
      });
    } catch (error) {
      this.setState({
        output: <Alert bsStyle="danger">{error.toString()}</Alert>
      });
    }
  };

  render() {
    const { code, output } = this.state;

    return (
      <Sandbox
        code={code}
        codeMirrorOptions={this.codeMirrorOptions}
        executeCode={this.executeCode}
        handleCodeMirrorValueChange={this.handleCodeMirrorValueChange}
        output={output}
        sendCodeToParent={this.sendCodeToParent}
        sendSolutionTooltip={this.sendSolutionTooltip}
        showResultTooltip={this.showResultTooltip}
      />
    );
  }
}
