import React from 'react';
// router
import { LinkContainer } from 'react-router-bootstrap';
// style
import { Navbar, NavItem, Nav, NavbarBrand } from 'react-bootstrap';

export const Navigation = (props) => {
    return (
        <Navbar fluid>
            <Navbar.Header>
                <LinkContainer to='/'>
                    <NavbarBrand>
                        TaskBook
                    </NavbarBrand>
                </LinkContainer>
            </Navbar.Header>
            <Nav >
                <LinkContainer to='/training'>
                    <NavItem >
                        Тренировка
                    </NavItem>
                </LinkContainer>
                <LinkContainer to='/test'>
                    <NavItem >
                        Тестирование
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>

    )
}