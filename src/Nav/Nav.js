import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';

import logo from './fakery_logo_label.svg';
import './Nav.scss';
import LocalizedStrings from 'react-localization';

const navItems = new LocalizedStrings({
    bg: {
        phenomena: 'Феноменът',
        organizeEvent: 'Фейк парти',
        about: 'Кампанията',
        checklist: 'Чеклист',
        resources: 'Ресурси',
        contact: 'Контакти',
        changeLang: 'EN'
    },
    en: {
        phenomena: 'Phenomenon',
        organizeEvent: 'Fake party',
        about: 'The campaign',
        checklist: 'Checklist',
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
            <Container>
                <Navbar sticky="top" expand="lg" collapseOnSelect="true">
                    <Navbar.Brand href="#home" className="logo-label"><img src={logo} width="100px" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">{navItems.phenomena}</Nav.Link>
                            <Link href="#" className="nav-link" activeClass="active" to="organize" spy={true} smooth={true} offset={50} duration={500}>
                                {navItems.organizeEvent}
                            </Link>
                            <Nav.Link href="#link2">{navItems.about}</Nav.Link>
                            <Nav.Link href="#link3">{navItems.resources}</Nav.Link>
                            <Nav.Link href="#link4">{navItems.contact}</Nav.Link>
                            <Nav.Link href="#link5" onSelect={() => this.changeLang()}>{navItems.changeLang}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default MyNav;