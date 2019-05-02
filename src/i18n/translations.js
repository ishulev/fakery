import LocalizedStrings from 'react-localization';

export const intro = new LocalizedStrings({
    bg: {
        p1: 'Фалшивите новини вече не са новина. Но реалните последствия от тях предстои да бъдат анализирани и разбрани.',
        p2: 'Фалшивите новини винаги ни засягат лично. Но е трудно да го разберем, докато не станем тяхна жертва.',
        p3: 'Това беше и причината да създадем експеримент с една “сензация”, която се оказа неустоима както за медиите, така и за публиката.',
        p4: '“Новината”, която приготвихме, показа на неподозиращи хора каква миризма и вкус могат да имат фалшивите новини в реалния живот.',
        p5: 'Гледай видеото и след това прочети каква е рецептата ни да се преборим тях.'
    },
    en: {
        p1: 'Fake news is no longer news. Тheir real consequences however are yet to be analyzed and understood.',
        p2: 'Fake news always affects us personally. But it is difficult to understand how until one falls victim to their grasp.',
        p3: 'That\'s why we created an experiment with a media "sensation" that turned out to be irresistible.',
        p4: 'The "news" story we published demonstrated to unsuspecting people the smell and taste of fake news in real life.',
        p5: 'Watch the video and then read about our recipe on how to keep fake news at bay.'
    }
});

export const navItems = new LocalizedStrings({
    bg: {
        phenomena: 'Феноменът',
        organizeEvent: 'Фейк парти',
        about: 'Кампанията',
        checklist: 'Чеклист',
        resources: 'Ресурси',
        contact: 'Контакти',
        changeLang: 'EN'
    },
    en: {
        phenomena: 'The phenomenon',
        organizeEvent: 'Fake party',
        about: 'The campaign',
        checklist: 'Checklist',
        resources: 'Resources',
        contact: 'Contacts',
        changeLang: 'BG'
    }
});

export const mainText = new LocalizedStrings({
    bg: {
        phenom: {
            title: 'Феноменът',
            p1: 'Фалшивите новини представляват разпространение на информация за измислени “факти” или слухове, което се прави с цел подвеждане на аудиторията.',
            p2: 'Предизвикателството на преднамерено разпространяваните фалшиви новини се подсилва от липсата на медийна грамотност у хората. Средно 46% от европейските граждани се информират само от социалните медии ({0}, 2016), всеки шести човек споделя новини/статии в социалните мрежи, без да ги чете ({1} 2016), много хора имат проблем с разпознаването на фалшиви новини, 80% не разграничават платено от редакционно съдържание, 80% не поставят под съмнение достоверността на снимки онлайн ({2}, 2016).',
            p3: 'Фалшивите новини оставят лош вкус. Ефектите от тях са дълготрайни и опасни. Те оформят поведението ни чрез внушения и противопоставяне; влияят на изхода на избори, а оттам – на законите и средата, в която живеем; и дори могат да поставят в риск здравето ни.'
        },
        campaign: {
            title: 'Кампанията',
            p1: 'По случай 3 май, Международният ден на свободата на пресата, стартираме Fakery – кампания за повишаване на медийната грамотност, и за борба с фалшивите новини и дезинформацията.',
            p2: 'ВКЛЮЧИ СЕ В БИТКАТА ЗА ИСТИНАТА СЕГА!',
            p3: 'Ето как:',
            p4: 'LVL 1: Сподели видеото, сайта или тактиките за борба с фалшиви новини;',
            p5: 'LVL 2: Поговори с приятел или роднина, който мислиш, че има лоша медийна диета;',
            p6: 'LVL 1000: Ако си учител/родител, покажи видеото на децата, а после обсъдете феномена и тактиките;',
            p7: 'LVL 1001: {0} вкъщи, в училище или в офиса.',
            link: 'Организирай свое собствено фалшиво парти'
        },
        campaignDetails: {
            p1: 'Fakery e кампания на {0}, глобална платформа, която среща изкуството и активизма в името на социалната промяна.',
            p2: 'Зад идеята на Fakery (the Fake News Bakery) са сценографката Илияна Кънчева и програмистът Иван Шулев.',
            p3: 'Fakery e победителят във второто издание на {0} – иновативни събития, в които мултидисциплинарни отбори от артисти и технолози търсят решения на казуси в сферата на човешките права.',
            p4: 'Отборите работят заедно в рамките на уикенд и прототипират проекти, които повишават осведомеността или допринасят за конкретно решение на съответния проблем. Жури награждава най-добрите идеи със средства за развитие.'
        },
        host: {
            title: 'Направи фейк кейк парти',
            p1: 'Разговорът за фалшивите новини не е лесен. Как изобщо да го започнеш?',
            p2: 'Ето така – каниш приятели или роднини, част от които често консумират фалшиви новини, на Фейк кейк парти. Приготвяш подмолната ни рецепта за къпкейкове или създаваш свой кулинарен кошмар и даваш нужния забавен старт на иначе тегав разговор.',
            subtitle: 'Кексчета от ада',
            recipe1: 'В купа разбиваш две яйца, две чаени чаши кисело мляко, половин чаена чаша олио и една чаена лъжица сода. Добавяш две чаени чаши брашно. Мяташ десет супени лъжици табаско и/или рибен сос. Добавяш чаена чаша натрошено сирене и подправки на око и разбъркваш добре. Хей, имам останал малко салам от неделя? Режеш на ситно и слагаш. Във всяко гнездо на формата за мъфини слагаш по една хартиена кошничка. Изливаш сместа във всяка кошничка, като пълниш до достигане на ¾ от обема ѝ. Печеш в предварително загрята на 180-200 градуса фурна, за около 20-25 минути. Паралелно разбиваш с миксер смес от чаша пудра захар, пакет масло, щипка ванилия, и малко мляко, до получаване на гъста смес. Декорираш кексчетата с шприц, докато не станат красиви като каузата ти.',
            ul: 'Няколко съвета за този (и всеки подобен) разговор:',
            li1: 'Не бъди назидателен, не размахвай пръст. Никой не харесва демонстрации на морално превъзходство и самодоволна арогантност. Хората спират да слушат, ако им обясниш, че грешат, и влизат в защитен режим. Не искаш в една вечер и да натровиш, и да се скараш с вашите.',
            li2: 'Подходи много леко и внимателно. Не рамкирай партито като “интервенция” за конкретен човек – това е ужасно смущаващо и няма да е ефективно. По-скоро го представи като по-широк разговор по темата, който цели семейството ти / приятелският ти кръг да взема информирани решения, и да не попада в клопката на лошите. Така сте “вие” срещу “тях”; а не ти срещу баба.',
            li3: 'Започни с някаква притеснителна {0}, която демонстрира размера на проблема. Дай пример, в който самият ти си бил подведен от фалшива новина. Питай дали друг е имал подобен опит, или поне съмнения. Подготви се с още примери на брутални лъжи, стабилно {1}.',
            li4: 'Премини към брейнсторминг – как можем да се защитим от фалшивите новини? Как да ги разпознаваме? Как да подобрим медийната си диета? Дай някакви {0} и питай за още идеи.',
            li5: 'Забавлявай се. Фалшивите новини оставят лош вкус, който само сладостта от това да ги борим със смях може да отмие.',
            link1: 'статистика',
            link2: 'минавали за истина',
            link3: 'предложения'
        },
        resources: {
            title: 'Ресурси',
            subtitle1: 'Научи се да разпознаваш фалшивите новини',
            subtitle2: 'Тествай уменията си с тези игри',
            subtitle3: 'Гледай TED лекции по темата',
            subtitle4: 'Научи повече за феномена',
            subtitle5: 'Ако се съмняваш в дадена новина, изпрати сигнал до платформа за проверяване на новини',
            link3_1: 'Как фалшивите новини нанасят реална вреда',
            link3_2: 'Три начина как да идентифицираш лоша статистика',
            link3_3: 'Как да разграничиш между факти и измислица',
            link4_1: 'Мащабно изследване (Science, 2018) за разпространението на фалшиви новини',
            link4_2: 'Евробарометър (2018) за фалшивите новини и дезинформацията онлайн',
            link4_3: 'Доклад за дигитални новини на Reuters Institute (2018) | University of Oxford',
            link4_4: 'Идеи за противодействие от Асоциацията на Европейските журналисти',
            link4_5: 'Набор от ресурси от американския Център за медийна грамотност',
            link5_1: 'В България: ',
            link5_2: 'По света: '
        },
        hello: {
            title: 'Контакти',
            p1: 'Как протече фалшивото ти парти? Изпрати ни снимки и ни разкажи на: hello@fineacts.co'
        }
    },
    en: {
        phenom: {
            title: 'The phenomenon',
            p1: 'Fake news is the dissemination of information that has been fabricated or tampered with, with the intention to deceive and mislead others.',
            p2: 'The challenge of deliberately spreading fake news is further made worse by the low levels of media literacy. On average, 46% of Europeans get their news through social media ({0}, 2016) and every sixth person shares news/articles on social networks without reading them ({1} 2016). Many people have a problem with fake news recognition – 80% cannot identify paid editorial content and 80% do not question the authenticity of online photos ({2}, 2016).',
            p3: 'Fake news leaves a bad taste. Their effects can be long-lasting and dangerous. They shape our behavior through manipulation; they influence the outcome of elections and, hence, the laws and the context in which we live; and can even put our health at risk.'
        },
        campaign: {
            title: 'The campaign',
            p1: 'On May 3rd, World Press Freedom Day, we launched Fakery - a campaign to increase media literacy and counter fake news and disinformation.',
            p2: 'JOIN US IN THE BATTLE FOR TRUTH!',
            p3: 'This is how:',
            p4: 'LVL 1: Share our video, website or our tactics to successfully spot fake news;',
            p5: 'LVL 2: Talk to a friend or relative with a bad media diet;',
            p6: 'LVL 1000: If you are a teacher or parent, show your kids our video, and discuss the phenomenon and tactics;',
            p7: 'LVL 1001: {0} at home, school, or the office.',
            link: 'Host your own Fake Cake Party'
        },
        campaignDetails: {
            p1: 'Fakery is a campaign by {0}, a global platform that bridges art and activism in the name of social change.',
            p2: 'Behind the idea of ​​Fakery (The Fake News Bakery) are the stage designer Iliyana Kancheva and the IT programmer Ivan Shulev.',
            p3: 'Fakery is the winner of the second edition of {0} - innovative events where multidisciplinary teams of artists and technologists seek solutions to human rights issues.',
            p4: 'The teams work together over a weekend and prototype ideas that raise awareness or provide solutions for a specific problem. The jury awards the best idea with a development grant.'
        },
        host: {
            title: 'Host a fake cake party',
            p1: 'The conversation about fake news isn’t easy. How to even start it?',
            p2: 'Here’s how – invite friends or relatives, some of whom you know for a fact often consume fake news, to a Fake Cake Party. Prepare our subversive cupcake recipe, or create your own alluring culinary nightmare, and give an otherwise dreadfully serious topic a humorous twist.',
            subtitle: 'Cupcakes from Hell',
            recipe1: 'In a bowl, mix two eggs, two cups of yogurt, half a cup of oil and one teaspoon of soda. Add two cups of flour, and ten tablespoons of Tabasco. Add a cup of crumbled cheese and whatever spices you’ve got, and mix well. Hey, you’ve got a little bit of salami left over from the weekend? Chop it up and throw it in. Place cupcake liners for baking in the cupcake molds. Fill the liners with the mixture to ¾ full. Preheat the oven to 180-200 C and bake for 20-25 minutes. Meanwhile, mix a cup of powdered sugar, two sticks of butter, a pinch of vanilla, and a little bit of milk till it’s thick. Decorate the cupcakes using a pastry bag, so they become as beautiful as your cause.',
            ul: 'Some tips for this and other similar conversations:',
            li1: 'Don’t wave the righteous finger. No one likes demonstrations of moral superiority and self-righteous arrogance. People stop listening if you tell them they are wrong, as it often triggers a defensive mode. You don’t want to poison your parents and get in a fight with them all in one night.',
            li2: 'Take a light and careful approach. Don’t frame the party as an "intervention" for a particular person. It will be terribly embarrassing for all involved and definitely not effective. Rather, present it as a general conversation on how your family and circle of friends can make informed decisions, without falling into the fake news trap. Create a feeling of togetherness, y’all vs. the bad guys, rather than ending up in the you vs. your grandma scenario.',
            li3: 'Share some worrying {0} that illustrate the size of the problem with fake news. Give an example in which you yourself were misled by fake news. Ask if anyone else has had a similar experience, or was suspicious of a news story. Be prepared with more examples of brutal lies that have {1}.',
            li4: 'Move to open brainstorming - how can we protect ourselves from fake news? How do we recognize them? How can we improve our media diet? Give {0}, and ask for ideas.',
            li5: 'And have fun! Because what’s the point otherwise. Fakes news leaves a bad taste, that only the sweetness of battling the phenomenon with laughter can wash away.',
            link1: 'statistics',
            link2: 'passed for truth',
            link3: 'suggestions'
        },
        resources: {
            title: 'Resources',
            subtitle1: 'Learn how to spot fake news, in several easy steps',
            subtitle2: 'Test your skills with these games',
            subtitle3: 'Watch TED lectures on the topic',
            subtitle4: 'Learn more about the phenomenon',
            subtitle5: 'If you are unsure of a certain news story, send a question to a fact-checking platform',
            link3_1: 'How fake news does real harm',
            link3_2: '3 ways to spot a bad statistic',
            link3_3: 'How to separate fact and fiction online',
            link4_1: 'Major study in Science (2018) on the spread of true and false news online',
            link4_2: 'Eurobarmeter study (2018) on fake news and disinformation online',
            link4_3: 'Study on digital news by the Reuters Institute | University of Oxford (2018)',
            link4_4: '',
            link4_5: 'Resources by the Center for Media Literacy',
            link5_1: '',
            link5_2: ''
        },
        hello : {
            title: 'Contact us',
            p1: 'Tell us about your Fake Cake Party! Send us pictures and stories at: hello@fineacts.co'
        }
    }
});