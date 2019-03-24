import React, { Component } from 'react';
import plate from './plate.png';
import './Intro.scss';

class Intro extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="d-flex flex-row">
                        <div>
                        <h2>Подмамени от фалшивото съдържание?</h2>
                        <p className="mr-md-4">Фалшивите новини са разпространението на информация за несъществуващи факти или слухове, което се прави с цел подвеждане на аудиторията. Предизвикателството, пред което сме изправени днес е, че дезинформация вече е много по-широко разпространено явление. Фалшивите новини са вече добре маскирани с доза истинска информация, което ги прави много по-трудно за разпознаване.</p>
                        </div>
                        <img className="float-right" src={plate} alt="Cupcake" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;