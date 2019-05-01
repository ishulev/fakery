import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import Checklist from '../Checklist/Checklist';
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
                        <div className="row">
                            <div className="col-md-6">
                                <p>{mainText.campaign.p1}</p>
                                <p>{mainText.campaign.p2}</p>
                                <p>{mainText.campaign.p3}</p>
                                <p>
                                    {mainText.campaign.p4}
                                    <br />{mainText.campaign.p5}
                                    <br />{mainText.campaign.p6}
                                    <br />{mainText.formatString(mainText.campaign.p7, <a href="#">{mainText.campaign.link}</a>)}
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>{mainText.formatString(mainText.campaignDetails.p1, <a href="https://fineacts.co/">Fine Acts</a>)}</p>
                                <p>{mainText.campaignDetails.p2}</p>
                                <p>{mainText.formatString(mainText.campaignDetails.p3, <a href="https://actlabs.co/">ACT Labs</a>)}</p>
                                <p>{mainText.campaignDetails.p4}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Checklist lang={this.state.language} />
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
                        <h4 className="mt-5">{mainText.hello.p1}</h4>
                    </div>
                </section>
                <div className="more-info">
                    <div className="container">
                        <h2 className="mt-0">{mainText.resources.title}</h2>
                        <div className="row">
                            <div className="col-md-8">
                                <h4>{mainText.resources.subtitle4}:</h4>
                                <ul>
                                    <li><a href="http://science.sciencemag.org/content/359/6380/1146" target="_blank">{mainText.resources.link4_1}</a></li>
                                    <li><a href="http://ec.europa.eu/commfrontoffice/publicopinion/index.cfm/ResultDoc/download/DocumentKy/82798" target="_blank">{mainText.resources.link4_2}</a></li>
                                    <li><a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/06/digital-news-report-2018.pdf?x89475" target="_blank">{mainText.resources.link4_3}</a></li>
                                    {this.state.language === 'bg' ? (<li><a href="http://new.aej-bulgaria.org/%D1%84%D0%B0%D0%BB%D1%88%D0%B8%D0%B2%D0%B8%D1%82%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%81%D0%B0-%D0%BD%D0%B0%D1%81%D0%BE%D1%87%D0%B5%D0%BD%D0%B8-%D1%81%D1%80%D0%B5%D1%89%D1%83-%D0%B4%D0%B5/">{mainText.resources.link4_4}</a></li>) : ''}
                                    <li><a href="https://www.medialit.org/">{mainText.resources.link4_5}</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>{mainText.resources.subtitle1}:</h4>
                                <ul>
                                    <li><a href="https://www.freedomforuminstitute.org/first-amendment-center/primers/fake-news-primer/">Freedom Forum Institute</a></li>
                                    <li><a href="https://www.ifla.org/publications/node/11174">International Federation of Library Associations</a></li>
                                </ul>
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
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <h4>{mainText.resources.subtitle3}:</h4>
                                <ul>
                                    <li><a href="https://www.ted.com/talks/stephanie_busari_how_fake_news_does_real_harm" target="_blank">{mainText.resources.link3_1}</a></li>
                                    <li><a href="https://www.ted.com/talks/mona_chalabi_3_ways_to_spot_a_bad_statistic?referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">{mainText.resources.link3_2}</a></li>
                                    <li><a href="https://www.ted.com/talks/markham_nolan_how_to_separate_fact_and_fiction_online?language=en&referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">{mainText.resources.link3_3}</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>{mainText.resources.subtitle5}:</h4>
                                <ul>
                                    {this.state.language === 'bg' ? (<li>{mainText.resources.link5_1}<a href="https://www.mediapool.bg/vyarno-ili-ne-cat74.html">Fact Check на Mediapool</a>; <a href="https://nova.bg/proveri">Проверка</a> от Нова телевизия.</li>) : ''}
                                    <li>{mainText.resources.link5_2}<a href="https://www.snopes.com/">Snopes</a>; <a href="http://www.politifact.com/">Politifact</a>; <a href="https://www.factcheck.org/">FactCheck.org</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer lang={this.state.language} />
            </div >
        )
    }
}

export default App;
