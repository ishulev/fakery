import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import logo from './fakery_logo_label.svg';
import './Nav.scss';
import LocalizedStrings from 'react-localization';

const navItems = new LocalizedStrings({
    bg: {
        phenomena: 'Феноменът',
        organizeEvent: 'Направи фейк парти',
        about: 'Кампанията',
        resources: 'Ресурси',
        contact: 'Контакти',
        changeLang: 'EN'
    },
    en: {
        phenomena: 'Phenomenon',
        organizeEvent: 'Make a fake party',
        about: 'The campaign',
        resources: 'Resources',
        contact: 'Contacts',
        changeLang: 'BG'
    }
});

class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    changeLang() {
        navItems.setLanguage(navItems.changeLang.toLowerCase());
        this.setState({});
    }
    render() {
        // navItems.setLanguage('bg');
        return (
            <Navbar sticky="top" expand="lg" collapseOnSelect="true">
                <Container>
                    <Navbar.Brand href="#home" className="logo-label"><img src={logo} width="100px" alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">{navItems.phenomena}</Nav.Link>
                            <Nav.Link href="#link1">{navItems.organizeEvent}</Nav.Link>
                            <Nav.Link href="#link2">{navItems.about}</Nav.Link>
                            <Nav.Link href="#link3">{navItems.resources}</Nav.Link>
                            <Nav.Link href="#link4">{navItems.contact}</Nav.Link>
                            <Nav.Link href="#link5" onSelect={() => this.changeLang()}>{navItems.changeLang}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default MyNav;