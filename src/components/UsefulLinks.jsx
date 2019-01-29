import React from "react";
//style
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export const UsefulLinks = props => {
  return (
    <Panel>
      <ListGroup>
        <ListGroupItem>
          <h3>Полезные ссылки</h3>
        </ListGroupItem>
        <ListGroupItem href="https://codyfet.github.io/type-conversions/">
          <strong>1.</strong> Тренажёр для освоения явных и неявных
          преобразований типов в JavaScript
        </ListGroupItem>
        <ListGroupItem href="https://learn.javascript.ru/">
          <strong>2.</strong> Learn.javascript.ru - современный учебник
          JavaScript
        </ListGroupItem>
        <ListGroupItem href="http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/">
          <strong>3.</strong> Задачи из книги "Выразительный JavaScript"
        </ListGroupItem>
        <ListGroupItem href="https://www.codewars.com/">
          <strong>4.</strong> Codewars.com
        </ListGroupItem>
      </ListGroup>
    </Panel>
  );
};
