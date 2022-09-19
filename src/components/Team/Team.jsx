import React from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import teamDescr from "../../assets/images/team/team.png";

const Team = () => {
  const { t } = useTranslation();
  const teamsList = [
    {
      id: "1",
      firstName: "Имя1",
      lastName: "Фамилия1",
      post: "Директор",
      imgPath:
        "https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg",
    },
    {
      id: "2",
      firstName: "Имя2",
      lastName: "Фамилия2",
      post: "Дизайнер",
      imgPath:
        "https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg",
    },
    {
      id: "3",
      firstName: "Имя3",
      lastName: "Фамилия3",
      post: "Администратор",
      imgPath:
        "https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg",
    },
    {
      id: "4",
      firstName: "Имя4",
      lastName: "Фамилия4",
      post: "Дворник",
      imgPath:
        "https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg",
    },
  ];

  return (
    <section className="section team" id="Команда">
      <div className="container">
        <h2 className="team__title title">{t("team.title")}</h2>
        <div className="flex team__descr">
          <p className="descr team__text">
            Проснувшись однажды утром после беспокойного сна, Грегор Замза
            обнаружил, что он у себя в постели превратился в страшное насекомое.
            Лежа на панцирнотвердой спине, он видел, стоило ему приподнять
            голову, свой коричневый, выпуклый, разделенный дугообразными
            чешуйками живот, на верхушке которого еле держалось готовое вот-вот
            окончательно сползти одеяло.
          </p>
          <img src={teamDescr} alt=""></img>
        </div>
        <ul className="team__list">
          {teamsList?.map((man) => {
            return (
              <li className="team__item" key={man.id}>
                <div>
                  <img className="team__img" src={man.imgPath} alt="avatar" />
                  <div className="team__item_overlay">
                    <p className="team__item_fName">{man.firstName}</p>
                    <p className="team__item_lName">{man.lastName}</p>
                    <p className="team__item_post">{man.post}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Team;
