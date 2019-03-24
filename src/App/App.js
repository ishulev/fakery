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
                {/* <section className="embed-responsive embed-responsive-16by9">
                    <iframe title="fake video" className="embed-responsive-item" src="https://player.vimeo.com/video/312371587?title=0&byline=0&portrait=0" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/312371587">Fake News Fairytale</a> from <a href="https://vimeo.com/user22372541">Kate Stonehill</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </section> */}
                <section className="embed-responsive embed-responsive-16by9">
                    <iframe title="fake-video" src="//player.vimeo.com/video/22428395"></iframe>
                </section>
                <section className="intro">
                    <h2>Създадохме фалшива новина</h2>
                    <div>
                        <p>Защо ни пука за фалшивите новини?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </section>
                <section className="recipes">
                    <h2>Организирай фалшиво парти: <br/>Лесни рецепти
                    </h2>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="flex-fill mr-3">
                            <h3>кексчета/ мъфини</h3>
                            <p>В царството на мъфините има два вида мъфини, за които може да се каже без никакви колебания, че са класически мъфини и това са шоколадовите мъфини и ваниловите мъфини. Това е и първото ни предложение за вас.</p>
                            <a className= 'readmore' href='https://www.supichka.com/%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0/174/%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8-%D0%BC%D1%8A%D1%84%D0%B8%D0%BD%D0%B8' target="_blank">Прочети повече</a>
                        </div>
                        <div className="flex-fill ml-3">
                            <h3>Гуакамоле</h3>
                            <p>Следващото ни предложение е за гуакамоле.От една страна, защото винаги е добра идея да добавим повече полезни мазнини в менюто си, а авокадото е една от най-богатите храни на мононенаситени мастни киселини.  </p>
                            <a className= 'readmore' href='#'>Прочети повече</a>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="flex-fill mr-3">
                            <h3>хумус</h3>
                            <p>Рецептата за хумус е толкова лесна за изпълнение, че просто няма как да не влезе в книгата с рецепти на новака в кухнята. Това предложение е по-скоро за почитателите на арабската и източната кухня.</p>
                            <a className= 'readmore' href='https://www.supichka.com/%D0%BB%D0%B5%D1%81%D0%BD%D0%B8-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B8/84/%D0%BD%D0%B0%D1%85%D1%83%D1%82' target="_blank">Прочети повече</a>
                        </div>
                        <div className="flex-fill ml-3">
                            <h3>Туршия</h3>
                            <p>Рецептата за туршия с аспирин спада към онези рецепти, които винаги се получават и можете да разчитате на нея независимо точно с какви зеленчуци ще приготвите туршията …</p>
                            <a className= 'readmore' href='#'>Прочети повече</a>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="flex-fill mr-3">
                            <h3>патладжанена разядка</h3>
                            <p>Следващото ни предложение е рецепта за Патладжанена разядка, представена от популярното кулинарно предаване "Бон Апети". Рецептата е бърза и лесна, а ефектът е впечатляващ. </p>
                            <a className= 'readmore' href='https://www.bonapeti.bg/recepti/patladzhanena-razyadka-s-orehi/' target="_blank" >Прочети повече</a>
                        </div>
                        <div className="flex-fill ml-3">
                            <h3>банички</h3>
                            <p>Рецептата за туршия с аспирин спада към онези рецепти, които винаги се получават и можете да разчитате на нея независимо точно с какви зеленчуци ще приготвите туршията …</p>
                            <a className= 'readmore' href='#'>Прочети повече</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;
