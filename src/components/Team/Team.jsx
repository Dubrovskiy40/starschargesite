import React from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import teamDescr from "../../assets/images/team/team.png";
import ilya from "../../assets/images/team/Dmitry.jpg";
import vadim from "../../assets/images/team/Dmitry.jpg";
import dmitry from "../../assets/images/team/Dmitry.jpg";
import stanislav from "../../assets/images/team/Dmitry.jpg";

const Team = () => {
  const { t } = useTranslation();
  const teamsList = [
    {
      id: "1",
      firstName: t("team.member1.firstName"),
      lastName: t("team.member1.lastName"),
      position: t("team.member1.position"),
      imgPath:
        "https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg",
    },
    {
      id: "2",
      firstName: t("team.member2.firstName"),
      lastName: t("team.member2.lastName"),
      position: t("team.member2.position"),
      imgPath:
        "https://storage.yandexcloud.net/newspressfeed/wp-content/uploads/2018/11/marketing-director.jpg",
    },
    {
      id: "3",
      firstName: t("team.member3.firstName"),
      lastName: t("team.member3.lastName"),
      position: t("team.member3.position"),
      imgPath: dmitry,
    },
    {
      id: "4",
      firstName: t("team.member4.firstName"),
      lastName: t("team.member4.lastName"),
      position: t("team.member4.position"),
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
          <img src={teamDescr} alt="team background" />
        </div>
        <ul className="team__list">
          {teamsList?.map((man) => {
            return (
              <li className="team__item image-parlax" key={man.id}>
                <div className="image-container">
                  <div className="front-side" style={{"backgroundImage": `url(${man.imgPath})`}}>
                    <div className="inner">
                      <p>{man.firstName}</p>
                      <p>{man.lastName}</p>
                    </div>
                  </div>
                  <div className="back-side">
                    <div className="inner">
                      <p>{man.position}</p>
                    </div>
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
