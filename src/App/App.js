import React, { Component } from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <section className="intro">
                    <h2>Подмамени от фалшивото съдържание?</h2>
                    <div>
                        <p>Фалшивите новини са разпространението на информация за несъществуващи факти или слухове, което се прави с цел подвеждане на аудиторията. Предизвикателството, пред което сме изправени днес е, че дезинформация вече е много по-широко разпространено явление. Фалшивите новини са вече добре маскирани с доза истинска информация, което ги прави много по-трудно за разпознаване.</p>
                    </div>
                </section>
                <section className="embed-responsive embed-responsive-16by9">
                    <iframe title="fake video" className="embed-responsive-item" src="https://player.vimeo.com/video/312371587?title=0&byline=0&portrait=0" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/312371587">Fake News Fairytale</a> from <a href="https://vimeo.com/user22372541">Kate Stonehill</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </section>
                <section className="intro">
                    <h2>Създадохме фалшива новина</h2>
                    <div>
                        <p>Защо ни пука за фалшивите новини? 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </section>
                <section className="intro">
                    <h2>Организирай фалшиво парти: Лесни рецепти</h2>
                    <div>
                        <p></p>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
