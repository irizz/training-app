import React from "react";
import { Button, Col, OverlayTrigger, Panel } from "react-bootstrap";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import { MyContext } from "../../provider";
import { SandboxOutput } from "./sandbox-output";

export class Sandbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      code,
      codeMirrorOptions,
      executeCode,
      handleCodeMirrorValueChange,
      output,
      sendCodeToParent,
      sendSolutionTooltip,
      showResultTooltip
    } = this.props;

    return (
      <MyContext.Consumer>
        {context => (
          <div className="sandbox">
            <Col lg={6} md={6} sm={6} className="sandbox__codemirror">
              <Panel>
                <Panel.Body className="sandbox__codemirror_panel-body">
                  <CodeMirror
                    value={code}
                    onBeforeChange={handleCodeMirrorValueChange}
                    onChange={handleCodeMirrorValueChange}
                    options={codeMirrorOptions}
                  />
                </Panel.Body>
                <Panel.Footer>
                  <OverlayTrigger placement="right" overlay={showResultTooltip}>
                    <Button
                      bsSize="small"
                      bsStyle="default"
                      disabled={context.state.isBtnDisabled}
                      onClick={executeCode}
                    >
                      Вывести результат
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    overlay={sendSolutionTooltip}
                  >
                    <Button
                      className="right-align-btn"
                      bsSize="small"
                      bsStyle="danger"
                      disabled={context.state.isBtnDisabled}
                      onClick={sendCodeToParent}
                    >
                      Отправить решение
                    </Button>
                  </OverlayTrigger>
                </Panel.Footer>
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={6} className="sandbox__output">
              <Panel className="sandbox__output_description">
                <Panel.Body>{context.state.currentTask.description}</Panel.Body>
              </Panel>
              <SandboxOutput output={output} />
            </Col>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
