import React, { Component } from 'react';
import plate from './plate.png';
import './Intro.scss';
import logoFull from '../common/fakery_logo_full.svg';

class Intro extends Component {
    render() {
        return (
            <section className="d-flex flex-column section-intro">
                <div className="flex-fill"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg d-flex flex-column">
                            <img src={logoFull} style={{ 'maxWidth': '100px', 'marginBottom': '20px' }} alt="Fakery logo full" />
                            <div className="flex-fill purple-padding--top purple-padding--bottom before-background bb--purple">
                                <p className="mr-md-4">Фалшивите новини вече не са новина. Но реалните последствия от тях предстои да бъдат анализирани и разбрани.</p>
                                <p>Фалшивите новини винаги ни засягат лично. Но е трудно да го разберем, докато не станем тяхна жертва.</p>
                                <p>Това беше и причината да създадем експеримент с една “сензация”, която се оказа неустоима както за медиите, така и за публиката.</p>
                                <p>“Новината”, която приготвихме, показа на неподозиращи хора каква миризма и вкус могат да имат фалшивите новини в реалния живот.</p>
                                <p>Гледай видеото и след това прочети каква е рецептата ни да се преборим тях.</p>
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