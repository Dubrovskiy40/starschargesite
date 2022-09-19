import React from 'react';

import {useTranslation} from "react-i18next";
import '../../../utils/i18next';

const AgreementText = () => {
  const {t} = useTranslation();

  return (
    <div className="agreementText">
      <h1 className="agreement-title">{t("feedback.agreement.title")}</h1>
      <h3 className="subtitle">1. {t("feedback.agreement.subtitle1")}</h3>
      <p className="text">
        1.1. {t("feedback.agreement.text1_1")}
      </p>
      <p className="text">
        1.2. {t("feedback.agreement.text1_2")}
      </p>
      <p className="text">
        1.3. {t("feedback.agreement.text1_3")}
      </p>

      <h3 className="subtitle">2. {t("feedback.agreement.subtitle2")}</h3>

      <p className="text">
        2.1. {t("feedback.agreement.text2_1")}
      </p>
      <p className="text">
        2.2. {t("feedback.agreement.text2_2")}
      </p>
      <p className="text">
        2.3. {t("feedback.agreement.text2_3")}
      </p>
      <p className="text">
        2.4. {t("feedback.agreement.text2_4")}
      </p>
      <p className="text">
        2.5. {t("feedback.agreement.text2_5")}
      </p>
      <p className="text">
        2.6. {t("feedback.agreement.text2_6")}
      </p>
      <p className="text">
        2.7. {t("feedback.agreement.text2_7")}
      </p>
      <p className="text">
        2.8. {t("feedback.agreement.text2_8")}
      </p>
      <p className="text">
        2.9. {t("feedback.agreement.text2_9")}
      </p>
      <p className="text">
        2.10. {t("feedback.agreement.text2_10")}
      </p>
      <p className="text">
        2.11. {t("feedback.agreement.text2_11")}
      </p>
      <p className="text">
        2.12. {t("feedback.agreement.text2_12")}
      </p>
      <p className="text">
        2.13. {t("feedback.agreement.text2_13")}
      </p>
      <p className="text">
        2.14. {t("feedback.agreement.text2_14")}
      </p>
      <p className="text">
        2.15. {t("feedback.agreement.text2_15")}
      </p>
      <p className="text">
        2.16. {t("feedback.agreement.text2_16")}
      </p>
      <p className="text">
        2.17. {t("feedback.agreement.text2_17")}
      </p>
      <p className="text">
        2.18. {t("feedback.agreement.text2_18")}
      </p>
      <p className="text">
        2.19. {t("feedback.agreement.text2_19")}
      </p>
      <p className="text">
        2.20. {t("feedback.agreement.text2_20")}
      </p>

      <h3 className="subtitle">3. {t("feedback.agreement.subtitle3")}:</h3>

      <p className="text">
        3.1. {t("feedback.agreement.text3_1")}
      </p>
      <p className="text">
        3.2. {t("feedback.agreement.text3_2")}
      </p>
      <p className="text">
        3.3. {t("feedback.agreement.text3_3")}
      </p>
      <p className="text">
        3.4. {t("feedback.agreement.text3_4")}
      </p>
      <p className="text">
        3.5. {t("feedback.agreement.text3_5")}
      </p>
      <p className="text">
        3.6. {t("feedback.agreement.text3_6")}
      </p>
      <p className="text">
        3.7. {t("feedback.agreement.text3_7")}
      </p>
      <p className="text">
        3.8. {t("feedback.agreement.text3_8")}
      </p>
      <p className="text">
        3.9. {t("feedback.agreement.text3_9")}
      </p>
      <p className="text">
        3.10. {t("feedback.agreement.text3_10")}
      </p>
      <p className="text">
        3.11. {t("feedback.agreement.text3_11")}
      </p>
      <p className="text">{t("feedback.agreement.text3_12")}</p>

      <h3 className="subtitle">4. {t("feedback.agreement.subtitle4")}</h3>

      <p className="text">
        4.1. {t("feedback.agreement.text4_1")}
        </p>
      <p className="text">
        4.2. {t("feedback.agreement.text4_2")}
        </p>
      <p className="text">
        4.3. {t("feedback.agreement.text4_3")}
        </p>
      <p className="text">
        4.4. {t("feedback.agreement.text4_4")}
        </p>
      <p className="text">
        4.5. {t("feedback.agreement.text4_5")}
        </p>

      <h3 className="subtitle">5. {t("feedback.agreement.subtitle5")}</h3>

      <p className="text">
        5.1. {t("feedback.agreement.text5_1")}
      </p>
        <p className="text">
          5.2. {t("feedback.agreement.text5_2")}
        </p>

      <h3 className="subtitle">6. {t("feedback.agreement.subtitle6")}</h3>

      <p className="text">
        6.1. {t("feedback.agreement.text6_1")}
      </p>
      <p className="text">
        6.2. {t("feedback.agreement.text6_2")}
      </p>
      <p className="text">
        6.3. {t("feedback.agreement.text6_3")}
      </p>
      <p className="text">
        6.4. {t("feedback.agreement.text6_4")}
      </p>
      <p className="text">
        6.5. {t("feedback.agreement.text6_5")}
      </p>

      <h3 className="subtitle">7. {t("feedback.agreement.subtitle7")}</h3>

      <p className="text">
        7.1. {t("feedback.agreement.text7_1")}
      </p>
      <p className="text">
        7.2. {t("feedback.agreement.text7_2")}
      </p>

      <h3 className="subtitle">8. {t("feedback.agreement.subtitle8")}</h3>

      <p className="text">
        8.1. {t("feedback.agreement.text8_1")}
      </p>
      <p className="text">
        8.2. {t("feedback.agreement.text8_2")}
      </p>
      <p className="text">
        8.3. {t("feedback.agreement.text8_3")}
      </p>
    </div>
  );
};

export default AgreementText;