import React from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import vitiaz from "../../assets/images/partners/vityaz.png";
import skolkovo from "../../assets/images/partners/sk.png";

const Partners = () => {
  const { t } = useTranslation();
  
  const partnersSliders = [
    {
      id: "1",
      img: vitiaz,
    },
    {
      id: "2",
      img: skolkovo,
    },
  ];
  
  return (
    <div className="partners">
      <div className="container">
        <h2 className="partners__title title">{t("partners.title")}</h2>
        <ul className="partners__list">
          {
            partnersSliders?.map((partner) => {
              return (
                <li key={partner.id} className="partners__item">
                  <img className="partners__img" src={partner.img} alt="partner-logo"/>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Partners;