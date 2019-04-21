import React, { Component } from 'react';
import plate from './plate.png';
import './Intro.scss';

import fineActsLogo from '../common/fine-acts-logo.png';
import openSocietyLogo from '../common/open-society-foundations-vector-logo.png';

class Intro extends Component {
    render() {
        return (
            <section className="d-flex flex-column section-intro">
                <div className="flex-fill"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg d-flex flex-column">
                            <h2>Cake news</h2>
                            <div className="flex-fill purple-padding--top purple-padding--bottom before-background bb--purple">
                                <p className="mr-md-4">За да илюстрираме нагледно въздействието на фалшивите новини, направихме експеримент. Създадохме една неустоима за медиите “сензация”, която разпространихме чрез тях, за да покажем какъв би бил ефектът ѝ върху широката публика. Гледай видеото и виж резултата.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img style={{ 'maxWidth': '50px' }} src={fineActsLogo} alt="Fine Acts logo" />
                                    </div>
                                    <div className="col-md-8">
                                        <img style={{ 'maxHeight': '50px' }} src={openSocietyLogo} alt="Open Society logo" />
                                        <p>The project is supported in part by a grant from the Foundation Open Society Institute in cooperation with the Human Rights Initiative of the Open Society Foundations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-block d-none col-md purple-padding--bottom">
                            <img className="img-fluid" src={plate} alt="Cupcake" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;