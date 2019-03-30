import React, { Component } from 'react';
import plate from './plate.png';
import './Intro.scss';

class Intro extends Component {
    render() {
        return (
            <section className="d-flex flex-column section-intro">
                <div className="flex-fill"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg d-flex flex-column">
                            <h2>Подмамени от фалшивото съдържание?</h2>
                            <div className="flex-fill purple-padding--top purple-padding--bottom before-background bb--purple">
                                <p className="mr-md-4">Фалшивите новини са разпространението на информация за несъществуващи факти или слухове, което се прави с цел подвеждане на аудиторията. Предизвикателството, пред което сме изправени днес е, че дезинформация вече е много по-широко разпространено явление. Фалшивите новини са вече добре маскирани с доза истинска информация, което ги прави много по-трудно за разпознаване.</p>
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