import React from 'react';
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const Team = () => {
  const { t } = useTranslation();
  const teamsList = [
    {id: '1', firstName: 'Имя1', lastName: 'Фамилия1', post: 'Директор', imgPath: 'https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg'},
    {id: '2', firstName: 'Имя2', lastName: 'Фамилия2', post: 'Дизайнер', imgPath: 'https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg'},
    {id: '3', firstName: 'Имя3', lastName: 'Фамилия3', post: 'Администратор', imgPath: 'https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg'},
    {id: '4', firstName: 'Имя4', lastName: 'Фамилия4', post: 'Дворник', imgPath: 'https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg'},
  ];

  return (
    <section className="team">
      <div className="container">
        <h2 className="team__title">{t("team.title")}</h2>
        <ul className="team__list">
          {
            teamsList?.map((man) => {
              return (
                <li className="team__item" key={man.id}>
                  <img className="team__img" src={man.imgPath} alt="avatar"/>
                  <div className="team__item_overlay">
                    <p className="team__item_fName">{man.firstName}</p>
                    <p className="team__item_lName">{man.lastName}</p>
                    <p className="team__item_post">{man.post}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Team;
