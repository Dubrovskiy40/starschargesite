import { useEffect, useState } from "react";
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import Agreement from "./Agreement/Agreement";
import ModalWindow from "../ModalWindow/ModalWindow";
import AgreementText from "./AgreementText/AgreementText";
import { CmError } from "./CmError/CmError";
import CmInput from "./CmInput/CmInput";
import captchaImg from "../../assets/images/feedback/captcha.png";
import carImg from "../../assets/images/feedback/car_bg.png";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const Feedback = () => {
  const { t } = useTranslation();
  const [openModalWindow, setOpenModalWindow] = useState(false); // модальное окно

  const [name, setName] = useState({ isValid: true, value: "" });
  const [tel, setTel] = useState({ isValid: true, value: "" });
  const [email, setEmail] = useState({ isValid: true, value: "" });
  const [question, setQuestion] = useState({ isValid: true, value: "" });
  const [captcha, setCaptcha] = useState({ isValid: true, value: "" }); // пока true, переделать как будет бэк

  const [successfullySent, setSuccessfullySent] = useState(true); // статус отправки формы
  const [showSuccessBlock, setShowSuccessBlock] = useState(false); // блок подтверждения отправки формы
  const [isReadAgreement, setIsReadAgreement] = useState(false); // прочитано ли соглашение
  const [errors, setErrors] = useState({
    nameError: "",
    telError: "",
    emailError: "",
    textareaError: "",
    captchaError: "",
  }); // объект ошибок

  const regName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
  const regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/; // /\+7|8[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
  const regEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let questionTest = question.value.length > 10;

  function regValueTest(regExp, value) {
    if (!regExp.test(value)) {
      setSuccessfullySent(false);
      return false;
    } else {
      setSuccessfullySent(true);
      return regExp.test(value);
    }
  }

  const onChangeInput = (value, name) => {
    switch (name) {
      case "inpName":
        let resultName = regValueTest(regName, value);
        setName({ isValid: !!resultName, value: value });
        setErrors({
          ...errors,
          nameError: !resultName && t("feedback.inpNameErrMess"),
        });
        break;
      case "inpTel":
        let resultTel = regValueTest(regTel, value);
        setTel({ isValid: !!resultTel, value: value });
        setErrors({
          ...errors,
          telError: !resultTel && t("feedback.inpPhoneErrMess"),
        });
        break;
      case "inpEmail":
        let resultEmail = regValueTest(regEmail, value);
        setEmail({ isValid: !!resultEmail, value: value });
        setErrors({
          ...errors,
          emailError: !resultEmail && t("feedback.inpEmailErrMess"),
        });
        break;
      case "inpArea":
        let resultText = questionTest;
        setQuestion({ isValid: !!resultText, value: value });
        setErrors({
          ...errors,
          textareaError: !resultText && t("feedback.inpAreaErrMess"),
        });
        break;
      case "inpCaptcha":
        let isValid = value === "v4xBG"; // пока true, переделать как будет бэк
        setCaptcha({ isValid, value });
        setErrors({
          ...errors,
          captchaError: !isValid && t("feedback.inpCaptchaErrMess"),
        });
        break;
      default: // линт выдает ошибку без этой строчки
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let isTrue =
      name.isValid &&
      tel.isValid &&
      email.isValid &&
      question.isValid &&
      captcha.isValid;
    let isValue =
      name.value && tel.value && email.value && question.value && captcha.value;

    if (isTrue && isValue) {
      console.log(
        "отправка данных формы: ",
        `Имя: ${name.value}, Телефон: ${tel.value}, Email: ${email.value}, Вопрос: ${question.value}, Капча: ${captcha.value}`
      );
      setShowSuccessBlock(true);

      setName({ isValid: true, value: "" });
      setTel({ isValid: true, value: "" });
      setEmail({ isValid: true, value: "" });
      setQuestion({ isValid: true, value: "" });
      setCaptcha({ isValid: true, value: "" }); // пока true, переделать как будет бэк
    } else setShowSuccessBlock(false);
  };

  useEffect(() => {
    fetch("http://85.193.84.173:9164/GetCaptchaImg")
      .then((res) => res.json())
      .then((data) => console.log("captchaImg", data));
  });

  const handleUpdateCode = () => {
    console.log("update code");
  };

  return (
    <section className="feedback_wrap" id="Контакты">
      <div className="container">
        <h1 className="feedback__title">{t("feedback.title")}</h1>
        <form
          className="feedback"
          id="feedback-form"
          onSubmit={handleSubmitForm}
        >
          <div className="feedback__inp_wrap feedback__grid1">
            <CmInput
              isInput={true}
              id="inpName"
              name="inpName"
              type="text"
              value={name.value}
              placeholder={t("feedback.placeholderName")}
              minLength={2}
              maxLength={30}
              required={true}
              isValid={name.isValid}
              onChange={onChangeInput}
            />
            <CmError error={errors["nameError"]} />
          </div>
          <div className="feedback__inp_wrap feedback__grid2">
            <CmInput
              isInput={true}
              id="inpTel"
              name="inpTel"
              type="tel"
              value={tel.value}
              placeholder={t("feedback.placeholderPhone")}
              minLength={10}
              maxLength={18}
              required={true}
              isValid={tel.isValid}
              onChange={onChangeInput}
            />
            <CmError error={errors["telError"]} />
          </div>
          <div className="feedback__inp_wrap feedback__grid3">
            <CmInput
              isInput={true}
              id="inpEmail"
              name="inpEmail"
              type="email"
              value={email.value}
              placeholder={t("feedback.placeholderEmail")}
              required={true}
              isValid={email.isValid}
              onChange={onChangeInput}
            />
            <CmError error={errors["emailError"]} />
          </div>
          <div className="feedback__inp_wrap feedback__grid4">
            <CmInput
              isInput={false}
              id="inpArea"
              name="inpArea"
              value={question.value}
              placeholder={t("feedback.placeholderArea")}
              rows="5"
              cols="30"
              minLength={10}
              maxLength={300}
              required={true}
              isValid={question.isValid}
              onChange={onChangeInput}
            />
            <CmError error={errors["textareaError"]} />
          </div>
          {/*Капча*/}
          <div className="captcha feedback__grid5">
            <img className="captcha__img" src={captchaImg} alt="капча" />
            <CmInput
              isInput={true}
              id="inpCaptcha"
              name="inpCaptcha"
              type="text"
              value={captcha.value}
              placeholder={t("feedback.placeholderCaptcha")}
              required={true}
              isValid={captcha.isValid}
              onChange={onChangeInput}
            />
            <CmError error={errors["captchaError"]} />
          </div>
          <div
            className="feedback__update-code feedback__grid6"
            onClick={handleUpdateCode}
          >
            <span className="feedback__update-code_text">Обновить код</span>
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
              className="feedback__btn"
              type="submit"
              disabled={!isReadAgreement ? true : false}
            >
              {t("feedback.buttonName")}
            </button>
          </div>
          <div className="feedback__img_wrap feedback__grid9"></div>
        </form>
        {/*/Сообщение об успешной отправки формы*/}
        {showSuccessBlock && (
          <div className="feedback__message_wrap">
            <SuccessMessage successfullySent={successfullySent} />
          </div>
        )}
        <ModalWindow
          openModalWindow={openModalWindow}
          setOpenModalWindow={setOpenModalWindow}
        >
          <AgreementText />
        </ModalWindow>
      </div>
    </section>
  );
};

export default Feedback;
