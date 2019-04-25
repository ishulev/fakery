import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
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
                <div className="intro--footer">
                    <div className="container">
                        Soc ikoni
                    </div>
                </div>
                <section>
                    <div className="pb-5 pt-4" style={{ backgroundColor: '#C28A81', color: '#fff' }}>
                        <div className="container">
                            <h2 className="mt-0">Феноменът</h2>
                            <p>Фалшивите новини представляват разпространение на информация за измислени “факти” или слухове, което се прави с цел подвеждане на аудиторията.</p>
                            <p>Предизвикателството на преднамерено разпространяваните фалшиви новини се подсилва от липсата на медийна грамотност у хората. Средно 46% от европейските граждани се информират само от социалните медии (<a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/11/Digital-News-Report-2016.pdf?x89475">Oxford University</a>, 2016), всеки шести човек споделя новини/статии в социалните мрежи, без да ги чете (<a href="https://www.forbes.com/sites/jaysondemers/2016/08/08/59-percent-of-you-will-share-this-article-without-even-reading-it/#1cc423402a64">Forbes</a> 2016), много хора имат проблем с разпознаването на фалшиви новини, 80% не разграничават платено от редакционно съдържание, 80% не поставят под съмнение достоверността на снимки онлайн (<a href="https://purl.stanford.edu/fv751yt5934">Stanford</a>, 2016).</p>
                            <p>Фалшивите новини оставят лош вкус. Ефектите от тях са дълготрайни и опасни. Те оформят поведението ни чрез внушения и противопоставяне; влияят на изхода на избори, а оттам – на законите и средата, в която живеем; и дори могат да поставят в риск здравето ни.</p>
                        </div>
                    </div>
                    <div className="padding-50 pink-background row justify-content-center align-items-center">
                        <img src={pinkCupcake} className="rounded-circle round-shadow" alt="Pink cupcake" style={{ maxWidth: '465px' }} />
                    </div>
                </section>
                <section className="recipes">
                    <div className="container">
                        <h2 className="mt-0">Кампанията</h2>
                        <p>По случай 3 май, Международния ден на свободата на печата, стартираме Fakery – кампания за повишаване на медийната грамотност.</p>
                        <p>ВКЛЮЧИ СЕ  В БОРБАТА ЗА ИСТИНАТА СЕГА!</p>
                        <p>Как ли? Радваме се, че попита:</p>
                        <p>
                            LVL 1: Сподели видеото, сайта или тактиките за борба с фалшиви новини;
                            <br />LVL 2: Поговори с приятел или роднина, който мислиш, че има лоша медийна диета;
                            <br />LVL 3,000: Организирай свое собствено фалшиво парти.
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
                        <h4>Почти всеки от нас в даден момент и до определена степен е бил подведен от фалшива новина. Какво можеш да направиш, за да избегнеш капана?</h4>
                        <p><i className="far fa-check-square"></i> Кой е сайтът? – Разгледай сайта на медията и какви статии разпространява. Повечето заглавия скандални и катастрофични ли са? Статиите често ли навлизат в личния живот на хората?</p>
                        <p><i className="far fa-check-square"></i> Чия е собствеността? Повдигни вежда, ако не намираш информация за собственика или екипа.</p>
                        <p><i className="far fa-check-square"></i> Прочети повече – Ако се колебаеш за достоверността на някоя новина, информирай се, като провериш какво пише по темата в други източници. Ако не намираш информацията в други медии, или пък намираш същия текст, препечатан едно към едно, това е червена лампа.</p>
                        <p><i className="far fa-check-square"></i> Прочети целия текст, не само заглавието – Понякога заглавието е сензационно, но информацията в статията не отговаря на него.</p>
                        <p><i className="far fa-check-square"></i> Провери автора – Потърси дали е действителен автор или фалшиво име. Намираш ли негови снимки, интервюта с него, профили в социални медии, архив с публикации?</p>
                        <p><i className="far fa-check-square"></i> Има ли източници? – Обърни внимание на това какви източници са цитирани в самата статия. Самите те заслужават ли доверие? Представени ли са всички засегнати страни? Достоверната новина ще включва множество факти – цитати от солидни експерти, данни от проучвания и официална статистика.</p>
                        <p><i className="far fa-check-square"></i> Провери датата на публикацията – Често стари новини се постват като нови в социалните медии.</p>
                        <p><i className="far fa-check-square"></i> Шега ли е – възможно е публикуваната информация да е сатира, добре е да се провери авторът. В България това са сайтове като <a href="https://neverojatno.wordpress.com/" target="_blank">"Бъзикилийкс"</a> и <a href="https://www.nenovinite.com/" target="_blank">"Не!новините"</a>, които въпреки заглавията си и уточнението под всяка статия, че информацията е измислена, понякога влизат в истинските новини.</p>
                        <p><i className="far fa-check-square"></i> Попитай експертите – Ако продължаваш да не си убеден, потърси утвърден експерт по темата (например в Twitter), за да потвърди дали информацията е вярна или не.</p>
                        <p><i className="far fa-check-square"></i> Проверявай снимките - Използвай инструмента на <a href="https://www.labnol.org/internet/mobile-reverse-image-search/29014/" target="_blank">Google Reverse Search Image</a>. Това е отличен инструмент, който позволява да търсиш в Google с изображения, а не с думи. Всичко, което трябва да направиш, е да качиш снимка в посочения сайт и ще намериш всички уеб страници, които изпозлват подобни изображения и ще може лесно да разбереш дали са били използвани извън контекста.</p>
                    </div>
                </section>
                <div className="padding-50 blue-background row justify-content-center align-items-center">
                    <img src={greenCupcake} className="rounded-circle round-shadow" alt="Green cupcake" style={{ maxWidth: '465px' }} />
                </div>
                <section name="organize" className="organize-party">
                    <div className="container">
                        <h2>Направи фейк кейк парти</h2>
                        <p>Няма по-добър начин да намериш истината от това да застанеш очи в очи с нея. Но как сядаш с човек и му обясняваш, че някой има интерес той да бъде системно дезинформиран и лъган?</p>
                        <p>Ето така - каниш приятели или роднини, (част от) които често консумират фалшиви новини, на Фейк кейк парти. Приготвяш подмолната ни рецепта за къпкейкове или създаваш свой кулинарен кошмар и даваш нужния забавен старт на този иначе толкова тегав разговор.</p>
                        <h3>Кексчета от ада</h3>
                        <p>В купа разбиваш две яйца, две чаени чаши кисело мляко, половин чаена чаша олио и една чаена лъжица сода. Добавяш две чаени чаши брашно. Мяташ десет супени лъжици табаско и/или рибен сос. Добавяш чаена чаша натрошено сирене и подправки на око и разбъркваш добре. Хей, имам останал малко салам от неделя? Режеш на ситно и слагаш. Във всяко гнездо на формата за мъфини слагаш по една хартиена кошничка. Изливаш сместа във всяка кошничка, като пълниш до достигане на ¾ от обема ѝ. Печеш в предварително загрята на 180-200 градуса фурна, за около 20-25 минути. Паралелно разбиваш с миксер смес от чаша пудра захар, пакет масло, щипка ванилия, и малко мляко, до получаване на гъста смес. Декорираш кексчетата с шприц, докато не станат красиви като каузата ти.</p>
                        <p>Няколко съвета за този (и всеки подобен) разговор:</p>
                        <ul>
                            <li>Не бъди назидателен, не размахвай пръст. Никой не харесва демонстрации на морално превъзходство и самодоволна арогантност. Хората спират да слушат, ако им обясниш, че грешат, и влизат в защитен режим. Не искаш в една вечер и да натровиш, и да се скараш с вашите.</li>
                            <li>Подходи много леко и внимателно. Не рамкирай партито като “интервенция” за конкретен човек – това е ужасно смущаващо и няма да е ефективно. По-скоро го представи като по-широк разговор по темата, който цели семейството ти / приятелският ти кръг да взема информирани решения, и да не попада в клопката на лошите. Така сте “вие” срещу “тях”; а не ти срещу баба.</li>
                            <li>Започни с някаква притеснителна статистика, която демонстрира размера на проблема. Дай пример, в който самият ти си бил подведен от фалшива новина. Питай дали друг е имал подобен опит, или поне съмнения. Подготви се с още примери на брутални лъжи, стабилно минавали за истина.</li>
                            <li>Премини към отворен брейнсторминг – как можем да се защитим от фалшивите новини? Как да ги разпознаваме? Как да подобрим медийната си диета? Дай някакви предложения и питай за още идеи.</li>
                            <li>Забавлявай се. Фалшивите новини оставят лош вкус, който само сладостта от това да ги бориш със смях може да отмие.</li>
                        </ul>
                    </div>
                </section>
                <div className="more-info">
                    <div className="container">
                        <h2 className="mt-0">Ресурси</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Научи се да разпознаваш фалшивите новини:</h4>
                                <p><a href="https://www.freedomforuminstitute.org/first-amendment-center/primers/fake-news-primer/">Freedom Forum Institute</a></p>
                                <p><a href="https://www.ifla.org/publications/node/11174">International Federation of Library Associations</a></p>
                            </div>
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
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Още за фалшивите новини</h4>
                                <p><a href="http://science.sciencemag.org/content/359/6380/1146" target="_blank">Най-мащабното изследване</a> (Science, март 2018) за разпространението на фалшиви и достоверни новини</p>
                                <p><a href="http://ec.europa.eu/commfrontoffice/publicopinion/index.cfm/ResultDoc/download/DocumentKy/82798" target="_blank">Евробарометър</a> (април 2018) за фалшивите новини и дезинформацията онлайн</p>
                                <p><a href="http://media.digitalnewsreport.org/wp-content/uploads/2018/06/digital-news-report-2018.pdf?x89475" target="_blank">Доклад за дигитални новини</a> на Reusters Institute (2018) | University of Oxford</p>
                                <p><a href="http://new.aej-bulgaria.org/%D1%84%D0%B0%D0%BB%D1%88%D0%B8%D0%B2%D0%B8%D1%82%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%81%D0%B0-%D0%BD%D0%B0%D1%81%D0%BE%D1%87%D0%B5%D0%BD%D0%B8-%D1%81%D1%80%D0%B5%D1%89%D1%83-%D0%B4%D0%B5/">Идеи за противодействие</a> от Асоциацията на Европейските журналисти</p>
                                <p><a href="https://www.medialit.org/">Набор от ресурси</a> от американския Център за медийна грамотност</p>
                            </div>
                            <div className="col-md-6">
                                <h4>Ако се съмняваш в дадена новина, изпрати сигнал до платформа за проверяване на новини:</h4>
                                <p>В България: <a href="https://www.mediapool.bg/vyarno-ili-ne-cat74.html">Fact Check</a> на Mediapool; <a href="https://nova.bg/proveri">Проверка</a> от Нова телевизия.</p>
                                <p>По света: <a href="https://www.snopes.com/">Snopes</a>; <a href="http://www.politifact.com/">Politifact</a>; <a href="https://www.factcheck.org/">FactCheck.org</a></p>
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
