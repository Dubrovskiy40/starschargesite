import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import { useState } from "react";
import AgreementText from "../Feedback/AgreementText/AgreementText";
import ModalWindow from "../ModalWindow/ModalWindow";

const Policy = () => {
  const { t } = useTranslation();
  const [openModalWindow, setOpenModalWindow] = useState(false);

  return (
    <div className="policy">
      <span
        className="policy__policy"
        onClick={() => setOpenModalWindow((prev) => !prev)}
      >
        {t("footer.politics")}
      </span>
      <span className="policy__copy">&copy;2022, {t("footer.policy")}</span>
      <ModalWindow
        openModalWindow={openModalWindow}
        setOpenModalWindow={setOpenModalWindow}
      >
        <AgreementText />
      </ModalWindow>
    </div>
  );
};

export default Policy;
