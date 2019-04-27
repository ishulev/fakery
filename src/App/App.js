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
                <div className="intro--footer">
                    <div className="container">
                        Soc ikoni
                    </div>
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
                        <h2 className="mt-0">Кампанията</h2>
                        <p>По случай 3 май, Международният ден на свободата на пресата, стартираме Fakery – кампания за повишаване на медийната грамотност, и за борба с фалшивите новини и дезинформацията.</p>
                        <p>ВКЛЮЧИ СЕ В БИТКАТА ЗА ИСТИНАТА СЕГА!</p>
                        <p>Ето как:</p>
                        <p>
                            LVL 1: Сподели видеото, сайта или тактиките за борба с фалшиви новини;
                            <br />LVL 2: Поговори с приятел или роднина, който мислиш, че има лоша медийна диета;
                            <br />LVL 1000: Ако си учител/родител, покажи видеото на децата, а после обсъдете феномена и тактиките;
                            <br />LVL 1001: Организирай свое собствено фалшиво парти вкъщи, в училище или в офиса.
                        </p>
                        <p>***</p>
                        <p>Fakery e кампания на <a href="https://fineacts.co/">Fine Acts</a>, глобална платформа, която среща изкуството и активизма в името на социалната промяна.</p>
                        <p>Зад идеята на Fakery (the Fake News Bakery) са сценографката Илияна Кънчева и програмистът Иван Шулев.</p>
                        <p>Fakery e победителят във второто издание на <a href="https://actlabs.co/">ACT Labs</a> – иновативни събития, в които мултидисциплинарни отбори от артисти и технолози търсят решения на казуси в сферата на човешките права.</p>
                        <p>Отборите работят заедно в рамките на уикенд и прототипират проекти, които повишават осведомеността или допринасят за конкретно решение на съответния проблем. Жури награждава най-добрите идеи със средства за развитие.</p>
                    </div>
                </section>
                <section>
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
                </section>
                <div className="padding-50 blue-background row justify-content-center align-items-center">
                    <img src={greenCupcake} className="rounded-circle round-shadow" alt="Green cupcake" style={{ maxWidth: '465px' }} />
                </div>
                <section name="organize" className="organize-party">
                    <div className="container">
                        <h2>Направи фейк кейк парти</h2>
                        <p>Разговорът за фалшивите новини не е лесен. Как изобщо да го започнеш?</p>
                        <p>Ето така – каниш приятели или роднини, част от които често консумират фалшиви новини, на Фейк кейк парти. Приготвяш подмолната ни рецепта за къпкейкове или създаваш свой кулинарен кошмар и даваш нужния забавен старт на иначе тегав разговор.</p>
                        <h3>Кексчета от ада</h3>
                        <p>В купа разбиваш две яйца, две чаени чаши кисело мляко, половин чаена чаша олио и една чаена лъжица сода. Добавяш две чаени чаши брашно. Мяташ десет супени лъжици табаско и/или рибен сос. Добавяш чаена чаша натрошено сирене и подправки на око и разбъркваш добре. Хей, имам останал малко салам от неделя? Режеш на ситно и слагаш. Във всяко гнездо на формата за мъфини слагаш по една хартиена кошничка. Изливаш сместа във всяка кошничка, като пълниш до достигане на ¾ от обема ѝ. Печеш в предварително загрята на 180-200 градуса фурна, за около 20-25 минути. Паралелно разбиваш с миксер смес от чаша пудра захар, пакет масло, щипка ванилия, и малко мляко, до получаване на гъста смес. Декорираш кексчетата с шприц, докато не станат красиви като каузата ти.</p>
                        <p>Няколко съвета за този (и всеки подобен) разговор:</p>
                        <ul>
                            <li>Не бъди назидателен, не размахвай пръст. Никой не харесва демонстрации на морално превъзходство и самодоволна арогантност. Хората спират да слушат, ако им обясниш, че грешат, и влизат в защитен режим. Не искаш в една вечер и да натровиш, и да се скараш с вашите.</li>
                            <li>Подходи много леко и внимателно. Не рамкирай партито като “интервенция” за конкретен човек – това е ужасно смущаващо и няма да е ефективно. По-скоро го представи като по-широк разговор по темата, който цели семейството ти / приятелският ти кръг да взема информирани решения, и да не попада в клопката на лошите. Така сте “вие” срещу “тях”; а не ти срещу баба.</li>
                            <li>Започни с някаква притеснителна статистика, която демонстрира размера на проблема. Дай пример, в който самият ти си бил подведен от фалшива новина. Питай дали друг е имал подобен опит, или поне съмнения. Подготви се с още примери на брутални лъжи, стабилно минавали за истина.</li>
                            <li>Премини към брейнсторминг – как можем да се защитим от фалшивите новини? Как да ги разпознаваме? Как да подобрим медийната си диета? Дай някакви предложения и питай за още идеи.</li>
                            <li>Забавлявай се. Фалшивите новини оставят лош вкус, който само сладостта от това да ги борим със смях може да отмие.</li>
                        </ul>
                    </div>
                </section>
                <div className="more-info">
                    <div className="container">
                        <h2 className="mt-0">Ресурси</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Научи се да разпознаваш фалшивите новини:</h4>
                                <ul>
                                    <li><a href="https://www.freedomforuminstitute.org/first-amendment-center/primers/fake-news-primer/">Freedom Forum Institute</a></li>
                                    <li><a href="https://www.ifla.org/publications/node/11174">International Federation of Library Associations</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>Тествай уменията си с тези игри:</h4>
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
                                <h4>Гледай TED лекции по темата:</h4>
                                <ul>
                                    <li><a href="https://www.ted.com/talks/stephanie_busari_how_fake_news_does_real_harm" target="_blank">Как фалшивите новини нанасят реална вреда</a></li>
                                    <li><a href="https://www.ted.com/talks/mona_chalabi_3_ways_to_spot_a_bad_statistic?referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">Три начина как да идентифицираш лоша статистика</a></li>
                                    <li><a href="https://www.ted.com/talks/markham_nolan_how_to_separate_fact_and_fiction_online?language=en&referrer=playlist-how_navigate_questionable_information&utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">Как да разграничиш между факти и измислица</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Научи повече за феномена:</h4>
                                <ul>
                                    <li><a href="http://science.sciencemag.org/content/359/6380/1146" target="_blank">Най-мащабното изследване</a> (Science, март 2018) за разпространението на фалшиви и достоверни новини</li>
                                    <li><a href="http://ec.europa.eu/commfrontoffice/publicopinion/index.cfm/ResultDoc/download/DocumentKy/82798" target="_blank">Евробарометър</a> (април 2018) за фалшивите новини и дезинформацията онлайн</li>
                                    <li><a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/06/digital-news-report-2018.pdf?x89475" target="_blank">Доклад за дигитални новини</a> на Reusters Institute (2018) | University of Oxford</li>
                                    <li><a href="http://new.aej-bulgaria.org/%D1%84%D0%B0%D0%BB%D1%88%D0%B8%D0%B2%D0%B8%D1%82%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%81%D0%B0-%D0%BD%D0%B0%D1%81%D0%BE%D1%87%D0%B5%D0%BD%D0%B8-%D1%81%D1%80%D0%B5%D1%89%D1%83-%D0%B4%D0%B5/">Идеи за противодействие</a> от Асоциацията на Европейските журналисти</li>
                                    <li><a href="https://www.medialit.org/">Набор от ресурси</a> от американския Център за медийна грамотност</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h4>Ако се съмняваш в дадена новина, изпрати сигнал до платформа за проверяване на новини:</h4>
                                <ul>
                                    <li>В България: <a href="https://www.mediapool.bg/vyarno-ili-ne-cat74.html">Fact Check</a> на Mediapool; <a href="https://nova.bg/proveri">Проверка</a> от Нова телевизия.</li>
                                    <li>По света: <a href="https://www.snopes.com/">Snopes</a>; <a href="http://www.politifact.com/">Politifact</a>; <a href="https://www.factcheck.org/">FactCheck.org</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
