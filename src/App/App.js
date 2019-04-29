import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import pinkCupcake from '../common/pink-cupcake.png';
import greenCupcake from '../common/green-cupcake.png';
import { mainText } from '../i18n/translations';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'bg'
        }
    }
    componentDidMount() {
        this.setLang(this.state.language);
    }
    changeLang(lang, transString) {
        transString.setLanguage(lang);
        this.setLang(lang);
    }
    setLang(lang) {
        mainText.setLanguage(lang);
        this.setState({
            language: lang
        });
    }
    render() {
        return (
            <div>
                <Nav lang={this.state.language} changeLang={this.changeLang.bind(this)} />
                <Intro lang={this.state.language} />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="fake-video" src="//player.vimeo.com/video/22428395" allowFullScreen></iframe>
                </div>
                <section>
                    <div className="pb-5 pt-4" style={{ backgroundColor: '#C28A81', color: '#fff' }}>
                        <div className="container">
                            <h2 className="mt-0">{mainText.phenom.title}</h2>
                            <p>{mainText.phenom.p1}</p>
                            <p>{mainText.formatString(mainText.phenom.p2, <a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/11/Digital-News-Report-2016.pdf?x89475">Oxford University</a>, <a href="https://www.forbes.com/sites/jaysondemers/2016/08/08/59-percent-of-you-will-share-this-article-without-even-reading-it/#1cc423402a64">Forbes</a>, <a href="https://purl.stanford.edu/fv751yt5934">Stanford</a>)}</p>
                            <p>{mainText.phenom.p3}</p>
                        </div>
                    </div>
                    <div className="padding-50 pink-background row justify-content-center align-items-center">
                        <img src={pinkCupcake} className="rounded-circle round-shadow" alt="Pink cupcake" style={{ maxWidth: '465px' }} />
                    </div>
                </section>
                <section className="recipes">
                    <div className="container">
                        <h2 className="mt-0">{mainText.campaign.title}</h2>
                        <p>{mainText.campaign.p1}</p>
                        <p>{mainText.campaign.p2}</p>
                        <p>{mainText.campaign.p3}</p>
                        <p>
                            {mainText.campaign.p4}
                            <br />{mainText.campaign.p5}
                            <br />{mainText.campaign.p6}
                            <br />{mainText.formatString(mainText.campaign.p7, <a href="#">{mainText.campaign.link}</a>)}
                        </p>
                        <p>***</p>
                        <p>{mainText.formatString(mainText.campaignDetails.p1, <a href="https://fineacts.co/">Fine Acts</a>)}</p>
                        <p>{mainText.campaignDetails.p2}</p>
                        <p>{mainText.formatString(mainText.campaignDetails.p3, <a href="https://actlabs.co/">ACT Labs</a>)}</p>
                        <p>{mainText.campaignDetails.p4}</p>
                    </div>
                </section>
                { this.state.language === 'bg' ? (<section>
                    <div className="container">
                        <h2>Чеклист</h2>
                        <h4>Почти всеки от нас в даден момент и до определена степен е бил подвеждан от фалшива новина. Какво можеш да направиш, за да избегнеш капана?</h4>
                        <p><i className="far fa-check-square"></i> <i>Кой е сайтът?</i> – Разгледай сайта на медията и какви статии разпространява. Повечето заглавия скандални и катастрофични ли са? Статиите често ли навлизат в личния живот на хората?</p>
                        <p><i className="far fa-check-square"></i> <i>Чия е собствеността?</i> Повдигни вежда, ако не намираш информация за собственика или екипа.</p>
                        <p><i className="far fa-check-square"></i> <i>Прочети повече</i> – Ако се колебаеш за достоверността на някоя новина, информирай се, като провериш какво пише по темата в други източници. Ако не намираш информацията в други медии, или пък намираш същия текст, препечатан едно към едно, това е червена лампа.</p>
                        <p><i className="far fa-check-square"></i> <i>Прочети целия текст, не само заглавието</i> – Понякога заглавието е сензационно, но информацията в статията не отговаря на него.</p>
                        <p><i className="far fa-check-square"></i> <i>Провери автора</i> – Потърси дали е действителен автор или фалшиво име. Намираш ли негови снимки, интервюта с него, профили в социални медии, архив с публикации?</p>
                        <p><i className="far fa-check-square"></i> <i>Има ли източници?</i> – Обърни внимание на това какви източници са цитирани в самата статия. Самите те заслужават ли доверие? Представени ли са всички засегнати страни? Достоверната новина ще включва множество факти – цитати от солидни експерти, данни от проучвания и официална статистика.</p>
                        <p><i className="far fa-check-square"></i> <i>Провери датата на публикацията</i> – Често стари новини се постват като нови в социалните медии.</p>
                        <p><i className="far fa-check-square"></i> <i>Шега ли е?</i> – Възможно е публикуваната информация да е сатира. В България примери за сатирични сайтове са <a href="https://neverojatno.wordpress.com/">"Бъзикилийкс"</a> и <a href="https://www.nenovinite.com/">"Не!новините"</a>, по света - <a href="https://www.theonion.com/">The Onion</a>, <a href="https://www.clickhole.com/">Clickhole</a>, <a href="http://www.private-eye.co.uk/">Private Eye</a>. Въпреки заглавията си и уточнението под всяка статия, че информацията е измислена, материали от тях често влизат в истинските новини.</p>
                        <p><i className="far fa-check-square"></i> <i>Попитай експертите</i> – Ако продължаваш да не си убеден, потърси утвърден експерт по темата (например в Twitter), за да потвърди дали информацията е вярна или не.</p>
                        <p><i className="far fa-check-square"></i> <i>Проверявай снимките</i> – Ползвай инструмента <a href="https://www.labnol.org/internet/mobile-reverse-image-search/29014/">Google Reverse Search Image</a>, който позволява да търсиш с изображения, а не с думи. Така лесно ще можеш да разбереш дали конкретно изображение е било използвано извън контекста си.</p>
                    </div>
                </section>) : ''}
                <div className="padding-50 blue-background row justify-content-center align-items-center">
                    <img src={greenCupcake} className="rounded-circle round-shadow" alt="Green cupcake" style={{ maxWidth: '465px' }} />
                </div>
                <section name="organize" className="organize-party">
                    <div className="container">
                        <h2>{mainText.host.title}</h2>
                        <p>{mainText.host.p1}</p>
                        <p>{mainText.host.p2}</p>
                        <h3>{mainText.host.subtitle}</h3>
                        <p>{mainText.host.recipe1}</p>
                        <p>{mainText.host.ul}</p>
                        <ul>
                            <li>{mainText.host.li1}</li>
                            <li>{mainText.host.li2}</li>
                            <li>{mainText.formatString(mainText.host.li3, <a href="#">{mainText.host.link1}</a>, <a href="#">{mainText.host.link2}</a>)}</li>
                            <li>{mainText.formatString(mainText.host.li4, <a href="#">{mainText.host.link3}</a>)}</li>
                            <li>{mainText.host.li5}</li>
                        </ul>
                    </div>
                </section>
                <div className="more-info">
                    <div className="container">
                        <h2 className="mt-0">{mainText.resources.title}</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <h4>{mainText.resources.subtitle1}:</h4>
                                <ul>
                                    <li><a href="https://www.freedomforuminstitute.org/first-amendment-center/primers/fake-news-primer/">Freedom Forum Institute</a></li>
                                    <li><a href="https://www.ifla.org/publications/node/11174">International Federation of Library Associations</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>{mainText.resources.subtitle2}:</h4>
                                <ul>
                                    <li>
                                        <a href="https://playfakenews.com/">Fake News: The Game</a>
                                    </li>
                                    <li>
                                        <a href="http://factitious.augamestudio.com/#/">Factitious</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>{mainText.resources.subtitle3}:</h4>
                                <ul>
                                    <li><a href="https://www.ted.com/talks/stephanie_busari_how_fake_news_does_real_harm" target="_blank">{mainText.resources.link3_1}</a></li>
                                    <li><a href="https://www.ted.com/talks/mona_chalabi_3_ways_to_spot_a_bad_statistic?referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">{mainText.resources.link3_2}</a></li>
                                    <li><a href="https://www.ted.com/talks/markham_nolan_how_to_separate_fact_and_fiction_online?language=en&referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">{mainText.resources.link3_3}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>{mainText.resources.subtitle4}:</h4>
                                <ul>
                                    <li><a href="http://science.sciencemag.org/content/359/6380/1146" target="_blank">{mainText.resources.link4_1}</a></li>
                                    <li><a href="http://ec.europa.eu/commfrontoffice/publicopinion/index.cfm/ResultDoc/download/DocumentKy/82798" target="_blank">{mainText.resources.link4_2}</a></li>
                                    <li><a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/06/digital-news-report-2018.pdf?x89475" target="_blank">{mainText.resources.link4_3}</a></li>
                                    { this.state.language === 'bg' ? (<li><a href="http://new.aej-bulgaria.org/%D1%84%D0%B0%D0%BB%D1%88%D0%B8%D0%B2%D0%B8%D1%82%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%81%D0%B0-%D0%BD%D0%B0%D1%81%D0%BE%D1%87%D0%B5%D0%BD%D0%B8-%D1%81%D1%80%D0%B5%D1%89%D1%83-%D0%B4%D0%B5/">{mainText.resources.link4_4}</a></li>) : '' }
                                    <li><a href="https://www.medialit.org/">{mainText.resources.link4_5}</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h4>{mainText.resources.subtitle5}:</h4>
                                <ul>
                                    { this.state.language === 'bg' ? (<li>{mainText.resources.link5_1}<a href="https://www.mediapool.bg/vyarno-ili-ne-cat74.html">Fact Check на Mediapool</a>; <a href="https://nova.bg/proveri">Проверка</a> от Нова телевизия.</li>) : '' }
                                    <li>{mainText.resources.link5_2}<a href="https://www.snopes.com/">Snopes</a>; <a href="http://www.politifact.com/">Politifact</a>; <a href="https://www.factcheck.org/">FactCheck.org</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer lang={this.state.language} />
            </div>
        )
    }
}

export default App;
