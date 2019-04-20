import React, { Component } from 'react';
import logo from './fakery_logo-01.svg';
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

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    changeLang(e) {
        e.preventDefault();
        navItems.setLanguage(navItems.changeLang.toLowerCase());
        this.setState({});
    }
    render() {
        // navItems.setLanguage('bg');
        return (
            <nav className="navbar navbar-expand-md sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="80" alt="Fakery Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <a className="nav-link" href="#">{navItems.phenomena} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{navItems.fakeNews}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{navItems.organizeEvent}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{navItems.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{navItems.resources}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{navItems.contact}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e => this.changeLang(e)} href="#">{navItems.changeLang}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;