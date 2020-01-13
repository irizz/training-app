import React from "react";
import {
  Alert,
  Button,
  Col,
  OverlayTrigger,
  Panel,
  Tooltip
} from "react-bootstrap";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import { MyContext } from "../../provider";
import { ConsoleMethods } from "../../custom-console-methods";
import { SandboxOutput } from "./sandbox-output";

export class Sandbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: this.props.preCode,
      codeReturn: this.props.codeReturn,
      output: this.props.defaultOutput
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.preCode != nextProps.preCode) {
      this.setState({
        code: nextProps.preCode,
        codeReturn: nextProps.codeReturn,
        output: nextProps.defaultOutput
      });
    }
  }

  sendCodeToParent = () => {
    this.props.sendCodeToParent(this.state.code);
  };

  executeCode = () => {
    const consStr = "console.log";
    try {
      if (this.state.code.indexOf(consStr) !== -1) {
        ConsoleMethods();
        eval(this.state.code);
      } else {
        let userFunc = new Function(this.state.code + this.state.codeReturn);
        let userFuncRes = userFunc().toString();
        this.setState({
          output: userFuncRes
        });
      }
    } catch (error) {
      this.setState({
        output: <Alert bsStyle="danger">{error.toString()}</Alert>
      });
    }
  };

  render() {
    const options = {
      lineNumbers: true,
      mode: "javascript",
      theme: "neo"
    };

    const tooltip1 = (
      <Tooltip id="tooltip">Отобразить результат выполнения функции</Tooltip>
    );
    const tooltip2 = (
      <Tooltip id="tooltip">
        Проверить правильность решения с помощью тестов
      </Tooltip>
    );

    return (
      <MyContext.Consumer>
        {context => (
          <div id="sandbox-container">
            <Col lg={6} md={6} sm={6} id="sandbox-col1">
              <Panel>
                <Panel.Body id="codemirror-panel">
                  <CodeMirror
                    value={this.state.code}
                    onBeforeChange={(editor, data, code) => {
                      this.setState({ code });
                    }}
                    onChange={(editor, data, code) => {
                      this.setState({ code });
                    }}
                    options={options}
                  />
                </Panel.Body>
                <Panel.Footer>
                  <OverlayTrigger placement="right" overlay={tooltip1}>
                    <Button
                      bsSize="small"
                      bsStyle="default"
                      disabled={context.state.isBtnDisabled}
                      onClick={this.executeCode}
                    >
                      Вывести результат
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="left" overlay={tooltip2}>
                    <Button
                      className="right-align-btn"
                      bsSize="small"
                      bsStyle="danger"
                      disabled={context.state.isBtnDisabled}
                      onClick={this.sendCodeToParent}
                    >
                      Отправить решение
                    </Button>
                  </OverlayTrigger>
                </Panel.Footer>
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={6} id="sandbox-col2">
              <Panel id="description">
                <Panel.Body>{context.state.currentTask.description}</Panel.Body>
              </Panel>
              <SandboxOutput output={this.state.output} />
            </Col>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
