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
                    <NavbarBrand >
                        <img src='src/icons/notebook64.png' />
                    </NavbarBrand>
                </LinkContainer>
            </Navbar.Header>
            <Nav >
            <LinkContainer to='/learn' >
                    <NavItem >
                        Учебник
                    </NavItem>
                </LinkContainer>
                <LinkContainer to='/train'>
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