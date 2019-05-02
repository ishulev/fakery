import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, animateScroll } from 'react-scroll';

import './Nav.scss';
import { navItems } from '../i18n/translations';

class MyNav extends Component {
    componentDidMount() {
        navItems.setLanguage(this.props.lang);
        this.setState({});
    }
    componentWillReceiveProps(newProps) {
        navItems.setLanguage(newProps.lang);
    }
    changeLang() {
        const langToChange = navItems.changeLang.toLowerCase();
        this.props.changeLang(langToChange, navItems);
    }
    backToTop() {
        animateScroll.scrollToTop();
    }
    render() {
        return (
            <Container>
                <Navbar expand="lg" collapseOnSelect="true">
                    {/* <Navbar.Brand href="#home" className="logo-label"><img src={logo} width="100px" alt="" /></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link href="#" className="nav-link" activeClass="active" to="phenom" smooth={true}>
                                {navItems.phenomena}
                            </Link>
                            <Link href="#" className="nav-link" activeClass="active" to="about" smooth={true}>
                                {navItems.about}
                            </Link>
                            <Link href="#" className="nav-link" activeClass="active" to="organize" smooth={true}>
                                {navItems.organizeEvent}
                            </Link>
                            {this.props.lang === 'bg' ? (<Link href="#" className="nav-link" activeClass="active" to="checklist" smooth={true}>
                                {navItems.checklist}
                            </Link>) : ''}

                            <Link href="#" className="nav-link" activeClass="active" to="resources" smooth={true}>
                                {navItems.resources}
                            </Link>
                            <Link href="#" className="nav-link" activeClass="active" to="contact" smooth={true} offset={-50}>
                                {navItems.contact}
                            </Link>
                            <Nav.Link href="#link5" onSelect={(ek, e) => { e.preventDefault(); this.changeLang(); }}>{navItems.changeLang}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <i onClick={() => this.backToTop()} className="fas fa-arrow-circle-up back-to-top"></i>
            </Container>
        );
    }
}

export default MyNav;