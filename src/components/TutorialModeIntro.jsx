import React from "react";
//style
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export class TutorialModeIntro extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Panel>
          <ListGroup>
            <ListGroupItem>
              <h3>Учебник</h3>
            </ListGroupItem>
            <ListGroupItem id='chapters'>
              <ListGroup >
                <ListGroupItem href='#' ><strong>Глава 1.</strong> Основы JavaScript: переменные, типы данных, операторы </ListGroupItem>
                <ListGroupItem href='#' ><strong>Глава 2.</strong> Основы JavaScript: функции, объекты, массивы, циклы </ListGroupItem>
                <ListGroupItem href='#' ><strong>Глава 3.</strong> Работа с DOM </ListGroupItem>
                <ListGroupItem href='#' ><strong>Глава 4.</strong> ООП в JavaScript </ListGroupItem>
                <ListGroupItem href='#' ><strong>Глава 5.</strong> AJAX </ListGroupItem>
                <ListGroupItem href='#' ><strong>Глава 6.</strong> Нововведения в ES6 </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </React.Fragment>
    );
  }
}
