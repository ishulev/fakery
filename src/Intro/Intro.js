import React, { Component } from 'react';
import plate from './plate.png';
import './Intro.scss';
import logoFull from '../common/fakery_logo_full.svg';
import { intro } from '../i18n/translations';

class Intro extends Component {
    componentWillReceiveProps(newProps) {
        intro.setLanguage(newProps.lang);
    }
    componentDidMount() {
        intro.setLanguage(this.props.lang);
        this.setState({});
    }
    render() {
        return (
            <div>
                <div className="d-lg-none d-block">
                    <div className="container">
                        <img src={logoFull} style={{ 'maxWidth': '100px', 'marginBottom': '20px' }} alt="Fakery logo full" />
                    </div>
                    <div>
                        <div className="purple-background purple-padding--top purple-padding--bottom">
                            <div className="container">
                                <h3>Cake news</h3>
                                <p className="mr-md-4">{intro.p1}</p>
                                <p>{intro.p2}</p>
                                <p>{intro.p3}</p>
                                <p>{intro.p4}</p>
                                <p>{intro.p5}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="d-lg-flex d-none flex-column section-intro">
                    <div className="flex-fill"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg d-flex flex-column">
                                <img src={logoFull} style={{ 'maxWidth': '100px', 'marginBottom': '20px' }} alt="Fakery logo full" />
                                <div className="flex-fill purple-padding--top purple-padding--bottom before-background bb--purple">
                                    <h3>Cake news</h3>
                                    <p className="mr-md-4">{intro.p1}</p>
                                    <p>{intro.p2}</p>
                                    <p>{intro.p3}</p>
                                    <p>{intro.p4}</p>
                                    <p>{intro.p5}</p>
                                </div>
                            </div>
                            <div className="col-md purple-padding--bottom">
                                <img className="img-fluid" src={plate} alt="Cupcake" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Intro;