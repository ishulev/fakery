import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Checklist.scss';

class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {checkItems: []};
    }
    createMarkup(text) {
        return { __html: text };
    }
    componentDidMount() {
        this.setState({checkItems: [
            { title: 'Кой е сайтът?', text: 'Разгледай сайта на медията и какви статии разпространява. Повечето заглавия скандални и катастрофични ли са? Статиите често ли навлизат в личния живот на хората?' },
            { title: 'Чия е собствеността?', text: ' Повдигни вежда, ако не намираш информация за собственика или екипа.' },
            { title: 'Прочети повече', text: 'Ако се колебаеш за достоверността на някоя новина, информирай се, като провериш какво пише по темата в други източници. Ако не намираш информацията в други медии, или пък намираш същия текст, препечатан едно към едно, това е червена лампа.' },
            { title: 'Прочети целия текст, не само заглавието', text: 'Понякога заглавието е сензационно, но информацията в статията не отговаря на него.' },
            { title: 'Провери автора', text: 'Потърси дали е действителен автор или фалшиво име. Намираш ли негови снимки, интервюта с него, профили в социални медии, архив с публикации?' },
            { title: 'Има ли източници?', text: 'Обърни внимание на това какви източници са цитирани в самата статия. Самите те заслужават ли доверие? Представени ли са всички засегнати страни? Достоверната новина ще включва множество факти – цитати от солидни експерти, данни от проучвания и официална статистика.' },
            { title: 'Провери датата на публикацията', text: 'Често стари новини се постват като нови в социалните медии.' },
            { title: 'Шега ли е?', text: 'Възможно е публикуваната информация да е сатира. В България примери за сатирични сайтове са <a href="https://neverojatno.wordpress.com/">"Бъзикилийкс"</a> и <a href="https://www.nenovinite.com/">"Не!новините"</a>, по света - <a href="https://www.theonion.com/">The Onion</a>, <a href="https://www.clickhole.com/">Clickhole</a>, <a href="http://www.private-eye.co.uk/">Private Eye</a>. Въпреки заглавията си и уточнението под всяка статия, че информацията е измислена, материали от тях често влизат в истинските новини.' },
            { title: 'Попитай експертите', text: 'Ако продължаваш да не си убеден, потърси утвърден експерт по темата (например в Twitter), за да потвърди дали информацията е вярна или не.' },
            { title: 'Проверявай снимките', text: 'Ползвай инструмента <a href="https://www.labnol.org/internet/mobile-reverse-image-search/29014/">Google Reverse Search Image</a>, който позволява да търсиш с изображения, а не с думи. Така лесно ще можеш да разбереш дали конкретно изображение е било използвано извън контекста си.' },
        ]});
    }
    render() {
        return (
            <div className={'checklist' + (this.props.lang === 'bg' ? '' : ' hidden')}>
                <div className="container">
                    <h2>Чеклист</h2>
                </div>
                <Carousel>
                    {this.state.checkItems.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img className="img-fluid" src="holder.js/100px400?theme=meci&text=" />
                                <Carousel.Caption>
                                    <h2>{item.title}</h2>
                                    <p dangerouslySetInnerHTML={this.createMarkup(item.text)}></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}

                </Carousel>
            </div>
        );
    }
}

export default Checklist;