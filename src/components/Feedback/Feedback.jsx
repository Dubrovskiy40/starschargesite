import { useState } from "react";
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import Agreement from "./Agreement/Agreement";
import ModalWindow from "../ModalWindow/ModalWindow";
import AgreementText from "./AgreementText/AgreementText";
import { CmError } from "./CmError/CmError";
import CmInput from "./CmInput/CmInput";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import { observer } from "mobx-react";
import { useCaptcha } from "../../store/CaptchaStore";
import { useFeedbackStore } from "../../store/FeedbackStore";

const Feedback = observer(() => {
  const captchaStore = useCaptcha();
  const { values, errors, inputChange, clearForm } = useFeedbackStore();

  const { t } = useTranslation();

  const [openModalWindow, setOpenModalWindow] = useState(false); // модальное окно
  const [isReadAgreement, setIsReadAgreement] = useState(false); // прочитано ли соглашение

  const [formValidate, setFormValidate] = useState(false);
  const [errorValidate, setErrorValidate] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // для проверки работоспособности капчи
    captchaStore.checkCaptcha().then((isCapthaValid) => {
      if (isCapthaValid) {
        let isTrue =
          values.name.isValid &&
          values.name.value.trim().length > 1 &&
          values.tel.isValid &&
          values.tel.value.trim().length > 1 &&
          values.email.isValid &&
          values.email.value.trim().length > 1 &&
          values.question.isValid &&
          values.question.value.trim().length > 10;
        /// поход на бэк, очистка формы
        if (isTrue) {
          captchaStore.store.value = "";
          setFormValidate(true);
          setErrorValidate(false);
          captchaStore.postForm(values);
          clearForm();
          handleUpdateCode();
        } else {
          setFormValidate(false);
          setErrorValidate(true);
        }
      }
    });
  };

  const handleUpdateCode = () => {
    captchaStore.fetchCaptchaImg();
  };

  return (
    <section className="feedback_wrap" id="Контакты">
      <div className="container">
        <h1 className="feedback__title title">{t("feedback.title")}</h1>
        <form
          className="feedback"
          id="feedback-form"
          onSubmit={handleSubmitForm}
          noValidate
        >
          <div className="feedback__inp_wrap feedback__grid1">
            <CmInput
              isInput={true}
              id="inpName"
              name="inpName"
              type="text"
              value={values.name.value}
              placeholder={t("feedback.placeholderName")}
              isValid={values.name.isValid}
              onChange={inputChange}
            />
            <CmError error={errors.name} />
          </div>
          <div className="feedback__inp_wrap feedback__grid2">
            <CmInput
              isInput={true}
              id="inpTel"
              name="inpTel"
              type="tel"
              value={values.tel.value}
              placeholder={t("feedback.placeholderPhone")}
              isValid={values.tel.isValid}
              onChange={inputChange}
            />
            <CmError error={errors.tel} />
          </div>
          <div className="feedback__inp_wrap feedback__grid3">
            <CmInput
              isInput={true}
              id="inpEmail"
              name="inpEmail"
              type="email"
              value={values.email.value}
              placeholder={t("feedback.placeholderEmail")}
              isValid={values.email.isValid}
              onChange={inputChange}
            />
            <CmError error={errors.email} />
          </div>
          <div className="feedback__inp_wrap feedback__grid4">
            <CmInput
              isInput={false}
              id="inpArea"
              name="inpArea"
              value={values.question.value}
              placeholder={t("feedback.placeholderArea")}
              rows="5"
              cols="30"
              isValid={values.question.isValid}
              onChange={inputChange}
            />
            <CmError error={errors.question} />
          </div>

          {/*Капча*/}
          <div className="captcha feedback__grid5">
            {captchaStore.store.img && (
              <img
                className="captcha__img"
                src={URL.createObjectURL(captchaStore.store.img)}
                alt="капча"
              />
            )}
            <CmInput
              isInput={true}
              id="inpCaptcha"
              name="inpCaptcha"
              type="text"
              value={captchaStore.store.value}
              placeholder={t("feedback.placeholderCaptcha")}
              isValid={captchaStore.store.valid}
              onChange={(value) => captchaStore.changeCaptchaValue(value)}
            />
            <CmError error={errors.captcha} />
          </div>
          <div
            className="feedback__update-code feedback__grid6"
            onClick={handleUpdateCode}
          >
            <span className="feedback__update-code_text">
              {t("feedback.code")}
            </span>
          </div>
          {/*Пользовательское соглашение. Персональные данные*/}
          <div className="feedback__agreement feedback__grid7">
            <Agreement
              openModalWindow={setOpenModalWindow}
              isReadAgreement={isReadAgreement}
              setIsReadAgreement={setIsReadAgreement}
            />
          </div>
          <div className="feedback__btn_wrap feedback__grid8">
            <button
              className={
                !isReadAgreement
                  ? "feedback__btn feedback__btn_disabled"
                  : "feedback__btn"
              }
              type="submit"
              disabled={!isReadAgreement}
            >
              {t("feedback.buttonName")}
            </button>
          </div>
          <div className="feedback__img_wrap feedback__grid9"></div>
        </form>
        {formValidate && <SuccessMessage successfullySent={"success"} />}
        {errorValidate && <SuccessMessage successfullySent={""} />}
        <ModalWindow
          openModalWindow={openModalWindow}
          setOpenModalWindow={setOpenModalWindow}
        >
          <AgreementText />
        </ModalWindow>
      </div>
    </section>
  );
});

export default Feedback;
