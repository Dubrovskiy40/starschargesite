import React, {useState} from 'react';
import style from './cards.module.scss';
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import PropTypes from 'prop-types';

const data = [
    {
        id: '1',
        imgPath: 'https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg',
        title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
        text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
        dataPublic: '16.07.2022'
    },
    {
        id: '2',
        imgPath: 'https://www.tadviser.ru/images/thumb/6/61/Nissan-LEAF-Charging-California-EVgo-CleanTechnica-Kyle-Field-1.jpg/840px-Nissan-LEAF-Charging-California-EVgo-CleanTechnica-Kyle-Field-1.jpg',
        title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
        text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
        dataPublic: '17.07.2022'
    },
    {
        id: '3',
        imgPath: 'https://www.tadviser.ru/images/thumb/1/19/1548317322125452324.png/840px-1548317322125452324.png',
        title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
        text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
        dataPublic: '18.07.2022'
    },
    {
        id: '4',
        imgPath: 'https://cdn.hevcars.com.ua/wp-content/uploads/2018/06/electric-vehicle-charging-stations-nissan-leaf-hevcars.jpg',
        title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
        text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
        dataPublic: '19.07.2022'
    },
    {
        id: '5',
        imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
        title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
        text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
        dataPublic: '20.07.2022'
    },
    {
        id: '6',
        imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
        title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
        text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
        dataPublic: '21.07.2022'
    },
];

const Cards = () => {
    const [currentCard, setCurrentCard] = useState(1);
    const [allCards, setAllCards] = useState(data.length);
    const [activeIndex, setActiveIndex] = useState(0);

    const prevImgIndex = activeIndex ? activeIndex - 1 : data.length - 1
    const nextImgIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1

    const handleLeft = () => {
        console.log('click left');
        if (currentCard > 1) {
            setCurrentCard(prevState => prevState -= 1);
        } else {
            setCurrentCard(data.length);
        }
        setActiveIndex((current) => {
            const res = current === data.length - 1 ? 0 : current + 1;
            return res;
        });
    };

    const handleRight = () => {
        console.log('click right');
        if (currentCard < data.length) {
            setCurrentCard((prevState) => prevState += 1);
        } else {
            setCurrentCard(1);
        }
        setActiveIndex((current) => {
            const res = current === data.length - 1 ? 0 : current + 1;
            return res;
        });
    };

    return (
        <section className={style.news}>
            <div className="container">
                <ul className={style.cards}>
                    <li className={style.cards__item}
                        key={prevImgIndex}>
                        {
                            <Card
                                key={data[prevImgIndex]}
                                imgPath={data[prevImgIndex].imgPath}
                                title={data[prevImgIndex].title}
                                text={data[prevImgIndex].text}
                                dataPublic={data[prevImgIndex].dataPublic}
                            />
                        }
                    </li>
                    <li className={style.cards__item}
                        key={activeIndex}>
                        {
                            <Card
                                key={data[activeIndex]}
                                imgPath={data[activeIndex].imgPath}
                                title={data[activeIndex].title}
                                text={data[activeIndex].text}
                                dataPublic={data[activeIndex].dataPublic}
                            />
                        }
                    </li>
                    <li className={style.cards__item}
                        key={nextImgIndex}>
                        {
                            <Card
                                key={data[nextImgIndex]}
                                imgPath={data[nextImgIndex].imgPath}
                                title={data[nextImgIndex].title}
                                text={data[nextImgIndex].text}
                                dataPublic={data[nextImgIndex].dataPublic}
                            />
                        }
                    </li>
                </ul>
                <div className={style.cards__pagination}>
                    <Pagination
                        currentCard={currentCard}
                        allCards={allCards}
                        handleLeft={handleLeft}
                        handleRight={handleRight}
                    />
                </div>
            </div>
        </section>
    );
};

Cards.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Cards;