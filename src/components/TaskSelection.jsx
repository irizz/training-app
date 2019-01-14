import React from 'react';
//data
import { Tasks } from '../Tasks';
//router
import { LinkContainer } from 'react-router-bootstrap';
//style
import { Panel, Form, FormGroup, Checkbox, Button, ControlLabel } from 'react-bootstrap';

export class TaskSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            complexityArr: [],
            sectionArr: [],
            filteredTasks: []
        }
    }

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

        console.log(this.state.filteredTasks);

    }

    render() {
        return (
            <React.Fragment>
                <Panel>
                    <Panel.Body>
                        <Form >
                            <ControlLabel>Выберите уровень сложности:</ControlLabel>
                            <FormGroup >
                                <Checkbox
                                    inline
                                    value='basic'
                                    onClick={this.handleComplexityCheck}>Базовый</Checkbox>
                                <Checkbox
                                    inline
                                    value='advanced'
                                    onClick={this.handleComplexityCheck}>Продвинутый</Checkbox>
                                <Checkbox
                                    inline
                                    value='professional'
                                    onClick={this.handleComplexityCheck}>Профессионал</Checkbox>
                            </FormGroup>
                            <ControlLabel>Выберите одну или несколько тем:</ControlLabel>
                            <FormGroup >
                                <Checkbox
                                    value='basic-1'
                                    onClick={this.handleSectionCheck}> Основы JavaScript: переменные, типы данных, операторы </Checkbox>
                                <Checkbox
                                    value='basic-2'
                                    onClick={this.handleSectionCheck}> Основы JavaScript: функции, объекты, массивы, циклы </Checkbox>
                                <Checkbox
                                    value='dom'
                                    onClick={this.handleSectionCheck}> Работа с DOM </Checkbox>
                                <Checkbox
                                    value='oop'
                                    onClick={this.handleSectionCheck}> ООП в JavaScript </Checkbox>
                                <Checkbox
                                    value='ajax'
                                    onClick={this.handleSectionCheck}> AJAX </Checkbox>
                                <Checkbox
                                    value='es6'
                                    onClick={this.handleSectionCheck}> Нововведения в ES6 </Checkbox>
                            </FormGroup>
                            <LinkContainer to='/training'>
                                <Button
                                    type="submit"
                                    bsStyle='primary'
                                    className='center-align-btn'
                                    onClick={this.handleStartClick}>Начать</Button>
                            </LinkContainer>
                        </Form>
                    </Panel.Body>
                </Panel>
            </React.Fragment>
        )
    }
}