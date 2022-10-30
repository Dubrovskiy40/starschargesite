import React from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

const Station = ({ dataMapClick }) => {
  const { i18n } = useTranslation();
  let lang = i18n.language;

  return (
        <section className="station">
          <div className="station__top">
            <div className="station__title_wrap">
              <h2 className="station__title_top">
                {lang === 'ru' 
                ? dataMapClick.name 
                : dataMapClick.name_eng
                }
              </h2>
            </div>
            <span className="station__description">
              {lang === 'ru' 
                ? dataMapClick.description 
                : dataMapClick.description_eng}
            </span>
          </div>
        </section>
  );
};

export default Station;

