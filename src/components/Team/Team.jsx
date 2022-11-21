import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import ilya from "../../assets/images/team/Ilia.jpg";
import vadim from "../../assets/images/team/Vadim.jpg";
import dmitry from "../../assets/images/team/Dmitry.jpg";
import stanislav from "../../assets/images/team/Stas.jpg";

const Team = () => {
  const { t } = useTranslation();
  
  const [showUserInfo, setShowUserInfo] = useState({
    isShow: false,
    text: ''
  });
  
  const teamsList = [
    {
      id: "1",
      firstName: t("team.member1.firstName"),
      lastName: t("team.member1.lastName"),
      position: t("team.member1.position"),
      imgPath: ilya,
      userDescription: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза\n' +
        '            обнаружил, что он у себя в постели превратился в страшное насекомое. Ilia',
    },
    {
      id: "2",
      firstName: t("team.member2.firstName"),
      lastName: t("team.member2.lastName"),
      position: t("team.member2.position"),
      imgPath: vadim,
      userDescription: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза\n' +
        '            обнаружил, что он у себя в постели превратился в страшное насекомое. Vadim',
    },
    {
      id: "3",
      firstName: t("team.member3.firstName"),
      lastName: t("team.member3.lastName"),
      position: t("team.member3.position"),
      imgPath: dmitry,
      userDescription: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза\n' +
        '            обнаружил, что он у себя в постели превратился в страшное насекомое. Dmitriy',
    },
    {
      id: "4",
      firstName: t("team.member4.firstName"),
      lastName: t("team.member4.lastName"),
      position: t("team.member4.position"),
      imgPath: stanislav,
      userDescription: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза\n' +
        '            обнаружил, что он у себя в постели превратился в страшное насекомое. Stanislav',
    },
  ];
  
  const hoveron = (data) => {
    setShowUserInfo(() => {
      return ({
        isShow: true,
        text: data
      })
    })
  };
  
  const hoveroff = () => {
    setShowUserInfo(() => {
      return ({
        isShow: false,
        text: ''
      })
    })
  };

  return (
    <section className="section team" id="Команда">
      <div className="container">
        <h2 className="team__title title">{t("team.title")}</h2>
        <div className="flex team__descr">
          <p className="descr team__text">
            {
              !showUserInfo.isShow 
                ? `Проснувшись однажды утром после беспокойного сна, Грегор Замза
              обнаружил, что он у себя в постели превратился в страшное насекомое.
              Лежа на панцирнотвердой спине, он видел, стоило ему приподнять
              голову, свой коричневый, выпуклый, разделенный дугообразными
              чешуйками живот, на верхушке которого еле держалось готовое вот-вот
              окончательно сползти одеяло.`
                : showUserInfo.text
            }
          </p>
        </div>
        <ul className="team__list">
          {teamsList?.map((man) => {
            return (
              <li className="team__item image-parlax" key={man.id}
                onMouseEnter={() => hoveron(man.userDescription)}
                onMouseLeave={hoveroff}
              >
                <div className="image-container">
                  <div
                    className="front-side"
                    style={{ backgroundImage: `url(${man.imgPath})` }}
                  >
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
