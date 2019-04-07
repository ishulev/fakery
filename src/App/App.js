import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import pinkCupcake from '../common/pink-cupcake.png';
import greenCupcake from '../common/green-cupcake.png';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Intro />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="fake-video" src="//player.vimeo.com/video/22428395" allowFullScreen></iframe>
                </div>
                <section>
                    <div className="pb-5 pt-4" style={{ backgroundColor: '#C28A81', color: '#fff' }}>
                        <div className="container">
                            <h2 className="mt-0">Създадохме фалшива новина</h2>
                            <p className="mb-0">Защо ни пука за фалшивите новини?
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </div>
                    <div className="padding-50 pink-background row justify-content-center align-items-center">
                        <img src={pinkCupcake} className="rounded-circle round-shadow" alt="Pink cupcake" style={{ maxWidth: '465px' }} />
                    </div>
                </section>
                <section className="recipes">
                    <div className="container">
                        <h2 className="mt-0">Организирай фалшиво парти: <br />Лесни рецепти</h2>
                        <div className="mt-3 d-flex flex-column justify-content-between flex-md-row">
                            <div className="mr-md-3">
                                <h3>кексчета/ мъфини</h3>
                                <p>В царството на мъфините има два вида мъфини, за които може да се каже без никакви колебания, че са класически мъфини и това са шоколадовите мъфини и ваниловите мъфини. Това е и първото ни предложение за вас.</p>
                                <a className='readmore' href='https://www.supichka.com/%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0/174/%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8-%D0%BC%D1%8A%D1%84%D0%B8%D0%BD%D0%B8' target="_blank">Прочети повече</a>
                            </div>
                            <div className="ml-md-3">
                                <h3>Гуакамоле</h3>
                                <p>Следващото ни предложение е за гуакамоле.От една страна, защото винаги е добра идея да добавим повече полезни мазнини в менюто си, а авокадото е една от най-богатите храни на мононенаситени мастни киселини.  </p>
                                <a className='readmore' href='#'>Прочети повече</a>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-between flex-md-row">
                            <div className="mr-md-3">
                                <h3>хумус</h3>
                                <p>Рецептата за хумус е толкова лесна за изпълнение, че просто няма как да не влезе в книгата с рецепти на новака в кухнята. Това предложение е по-скоро за почитателите на арабската и източната кухня.</p>
                                <a className='readmore' href='https://www.supichka.com/%D0%BB%D0%B5%D1%81%D0%BD%D0%B8-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B8/84/%D0%BD%D0%B0%D1%85%D1%83%D1%82' target="_blank">Прочети повече</a>
                            </div>
                            <div className="ml-md-3">
                                <h3>Туршия</h3>
                                <p>Рецептата за туршия с аспирин спада към онези рецепти, които винаги се получават и можете да разчитате на нея независимо точно с какви зеленчуци ще приготвите туршията …</p>
                                <a className='readmore' href='#'>Прочети повече</a>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-between flex-md-row">
                            <div className="mr-md-3">
                                <h3>патладжанена разядка</h3>
                                <p>Следващото ни предложение е рецепта за Патладжанена разядка, представена от популярното кулинарно предаване "Бон Апети". Рецептата е бърза и лесна, а ефектът е впечатляващ. </p>
                                <a className='readmore' href='https://www.bonapeti.bg/recepti/patladzhanena-razyadka-s-orehi/' target="_blank" >Прочети повече</a>
                            </div>
                            <div className="ml-md-3">
                                <h3>банички</h3>
                                <p>Рецептата за туршия с аспирин спада към онези рецепти, които винаги се получават и можете да разчитате на нея независимо точно с какви зеленчуци ще приготвите туршията …</p>
                                <a className='readmore' href='#'>Прочети повече</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="padding-50 blue-background row justify-content-center align-items-center">
                    <img src={greenCupcake} className="rounded-circle round-shadow" alt="Green cupcake" style={{ maxWidth: '465px' }} />
                </div>
                <section className="how-to-recognize">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="mt-0">10 препоръки как да разпознаеш фалшива новина</h2>
                                <p><i className="far fa-check-square"></i> Кой е източникът – провери кой е сайтът, кой е собственикът му и т.н. Разгледай сайта на медията и какви статии се разпространяват.</p>
                                <p><i className="far fa-check-square"></i> Прочети повече от заглавието – често заглавието е сензационно, но информацията в статията не отговаря на него.</p>
                                <p><i className="far fa-check-square"></i> Провери кой е авторът – потърси дали е действителен автор или измислен.</p>
                                <p><i className="far fa-check-square"></i> Източници – провери какви източници са цитирани в самата статия, дали те самите заслужават доверие.</p>
                                <p><i className="far fa-check-square"></i> Провери датата на публикацията – често стари новини се рециклират и пускат като нови, дори и вече да не са актуални.</p>
                                <p><i className="far fa-check-square"></i> Шега ли е – възможно е публикуваната информация да е сатира, добре е да се провери авторът. В България това са сайтове като <a href="https://neverojatno.wordpress.com/" target="_blank">"Бъзикилийкс"</a> и <a href="https://www.nenovinite.com/" target="_blank">"Не!новините"</a>, които въпреки заглавията си и уточнението под всяка статия, че информацията е измислена, понякога влизат в истинските новини.</p>
                                <p><i className="far fa-check-square"></i> Проверка за обективност – дали това, което знаете по дадена тема, не влияе върху преценката ви за него.</p>
                                <p><i className="far fa-check-square"></i> Прочети повече – ако се колебаеш за достоверността на някоя новина, информирай се като започнеш да четеш по темата.</p>
                                <p><i className="far fa-check-square"></i> Или попитай експертите – потърсете някой експерт по темата, за да ви каже дали информацията е вярна или не.</p>
                                <p><i className="far fa-check-square"></i> Проверявай снимките - Използвай инструмента на <a href="https://www.labnol.org/internet/mobile-reverse-image-search/29014/" target="_blank">Google Reverse Search Image</a>. Това е отличен инструмент, който позволява да търсиш в Google с изображения, а не с думи. Всичко, което трябва да направиш, е да качиш снимка в посочения сайт и ще намериш всички уеб страници, които изпозлват подобни изображения и ще може лесно да разбереш дали са били използвани извън контекста.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="info-questions">
                                    <h4>Сигнализирай!</h4>
                                    <p>Ако се съмняваш в дадена новиниа, изпрати сигнал до една от вече съществуващите платформи за проверяване на новини:</p>
                                    <p><a href="https://www.mediapool.bg/vyarno-ili-ne-cat74.html" target="_blank">Fact Check на Mediapool</a></p>
                                    <p><a href="https://nova.bg/proveri" target="_blank">Проверка от Нова телевизия</a></p>
                                    <p>
                                        Fact-checking sites
                                        <br/>- <a href="https://www.snopes.com/" target="_blank">Snopes</a>
                                        <br/>- <a href="https://www.politifact.com/" target="_blank">P​olitifact</a>
                                        <br/>- <a href="https://www.factcheck.org/" target="_blank">FactCheck.org</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="more-info">
                    <div className="container">
                        <h2 className="mt-0">Ресурси</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Игри</h4>
                                <p>Бзираната във Вашингтон дигитална творческа агенция 
                                    ISL създаде <a href="https://playfakenews.com/" target="_blank">Fake News: The Game</a> и я представи като 
                                    приложение и <a href="http://www.niemanlab.org/2017/08/games-might-be-a-good-tool-for-fighting-fake-news-heres-what-three-developers-have-learned/?ref=playfakenews.com" target="_blank">пътуваща аркадна игра в някои барове</a>.
                                </p>
                                <p>Образователна игра <a href="http://factitious.augamestudio.com/#/" target="_blank">Factitious</a>, създадена от American University | Game Lab, Washington D.C.</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Видео</h4>
                                <p><a href="https://www.ted.com/talks/stephanie_busari_how_fake_news_does_real_harm" target="_blank">Как фалшивите новини нанасят реална вреда</a></p>
                                <p><a href="https://www.ted.com/talks/mona_chalabi_3_ways_to_spot_a_bad_statistic?referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">Три начина как да идентифицираш неточна статистика (bad statistic)</a></p>
                                <p><a href="https://www.ted.com/talks/markham_nolan_how_to_separate_fact_and_fiction_online?language=en&referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">Как да разграничиш между факти и измислица</a></p>
                            </div>
                            <div className="col-md-4">
                                <h4>Още за фалшивите новини</h4>
                                <p><a href="http://science.sciencemag.org/content/359/6380/1146" target="_blank">Най-мащабното изследване</a> (Science, март 2018) за разпространението на фалшиви и достоверни новини</p>
                                <p><a href="http://ec.europa.eu/commfrontoffice/publicopinion/index.cfm/ResultDoc/download/DocumentKy/82798" target="_blank">Евробарометър</a> (април 2018) за фалшивите новини и дезинформацията онлайн</p>
                                <p><a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/06/digital-news-report-2018.pdf?x89475" target="_blank">Доклад за дигитални новини</a> на Reusters Institute (2018) | University of Oxford</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
