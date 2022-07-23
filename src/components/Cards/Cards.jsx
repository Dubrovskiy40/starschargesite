import React, {useEffect, useState} from 'react';
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
// import PropTypes from 'prop-types';

// import {Swiper, SwiperSlide} from "swiper/react";
// import {Pagination} from "swiper";
// import 'swiper/scss';
// import 'swiper/scss/pagination';

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
    imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
    title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
    text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
    dataPublic: '19.07.2022'
  },
  {
    id: '5',
    imgPath: 'https://cdn.hevcars.com.ua/wp-content/uploads/2018/06/electric-vehicle-charging-stations-nissan-leaf-hevcars.jpg',
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
  {
    id: '7',
    imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
    title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
    text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
    dataPublic: '21.07.2022'
  },
  {
    id: '8',
    imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
    title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
    text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
    dataPublic: '21.07.2022'
  },
  {
    id: '9',
    imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
    title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
    text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
    dataPublic: '21.07.2022'
  },
  {
    id: '10',
    imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
    title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
    text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
    dataPublic: '21.07.2022'
  },
  {
    id: '11',
    imgPath: 'https://ev-avto.ru/sites/default/files/styles/watermark/public/zaryadnye-stancii-dlya-elektromobilei-01.jpg?itok=4zZ_XawU',
    title: 'Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.',
    text: 'Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.',
    dataPublic: '21.07.2022'
  },
];

const Cards = () => {
  // const [countCard, setCountCard] = useState(4);
  // const [widthScreen, setWidthScreen] = useState(null);
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  // useEffect(() => {
  //   console.log('widthScreen',widthScreen)
  //   setWidthScreen(window.innerWidth);
  //   if (widthScreen >= 1190) {
  //     setCountCard(4)
  //   }
  //   if (widthScreen >= 768) {
  //     setCountCard(3)
  //   }
  //   if (widthScreen < 768) {
  //     setCountCard(1)
  //   }
  // }, [widthScreen]);

  return (
    // <section className="news">
    //   <div className="container">
    //   <Swiper
    //     slidesPerView={countCard}
    //     spaceBetween={30}
    //     pagination={pagination}
    //     modules={[Pagination]}
    //     className="mySwiper"
    //   >
    //     {
    //       data?.map((card) => {
    //         return (
    //           <SwiperSlide key={card.id}>
    //             <div className="card">
    //               <img className="card__img" src={card.imgPath} alt="img"/>
    //               <div className="card__text_block">
    //                 <h3 className="card__title">
    //                   {card.title}
    //                 </h3>
    //                 <p className="card__text">
    //                   {card.text}
    //                 </p>
    //                 <div>
    //                 <span className="card__data">
    //                     {card.dataPublic}
    //                 </span>
    //                 </div>
    //               </div>
    //             </div>
    //           </SwiperSlide>
    //       )
    //       })
    //       }
    //       </Swiper>
    //       </div>
    //   </section>


            <section className="news">
                <div className="container">
                    <ul className="cards">
                            {
                                data?.map((card) => {
                                    return (
                                      <Card
                                        key={card.id}
                                        imgPath={card.imgPath}
                                        title={card.title}
                                        text={card.text}
                                        dataPublic={card.dataPublic}
                                      />
                                    )
                                })
                            }
                    </ul>
                    <div className="cards__pagination">
                        <Pagination />
                    </div>
                </div>
            </section>
          )
            ;
          };

// Cards.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.object).isRequired
// }

          export default Cards;