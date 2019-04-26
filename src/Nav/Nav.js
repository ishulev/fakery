import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';

import './Nav.scss';
import { navItems } from '../i18n/translations';

class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    changeLang() {
        const langToChange = navItems.changeLang.toLowerCase();
        this.props.changeLang(langToChange, navItems);
        // navItems.setLanguage(langToChange);
        this.setState({});
    }
    render() {
        return (
            <Container>
                <Navbar sticky="top" expand="lg" collapseOnSelect="true">
                    {/* <Navbar.Brand href="#home" className="logo-label"><img src={logo} width="100px" alt="" /></Navbar.Brand> */}
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