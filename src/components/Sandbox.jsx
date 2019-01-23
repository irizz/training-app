import React from "react";
//components
import { Instruction } from "./Instruction";
import { Output } from "./Output";
//overwritten console methods
import { ConsoleMethods } from "../ConsoleMethods";
//context
import { MyContext } from "./MyProvider";
//style
import {
  Col,
  Alert,
  Panel,
  Button,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
//CodeMirror
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";

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
    this.setState({
      code: nextProps.preCode,
      codeReturn: nextProps.codeReturn,
      output: nextProps.defaultOutput
    });
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
      const errorText = error.toString();
      this.setState({
        output: <Alert bsStyle="danger">{errorText}</Alert>
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
          <div className="sandbox-container">
            <Col lg={8} md={8} sm={8} className="sandbox-col2">
              <Panel>
                <Panel.Body className="no-padding-panel-body">
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
                      disabled={this.props.isBtnDisabled}
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
                      disabled={this.props.isBtnDisabled}
                      onClick={this.sendCodeToParent}
                    >
                      Отправить решение
                    </Button>
                  </OverlayTrigger>
                </Panel.Footer>
              </Panel>
            </Col>
            <Col lg={4} md={4} sm={4} className="sandbox-col1">
              <Instruction
                description={context.state.currentTask.description}
              />
              <Output output={this.state.output} />
            </Col>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
