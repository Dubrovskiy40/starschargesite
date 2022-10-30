import { useState } from "react";
import { useTranslation } from "react-i18next";

const NAME_REGEXP_TEST =
  /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
const TELEPHONE_REGEXP_TEST =
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const TELPHONE_REGEXP_TEST =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const testRegexp = (regExp, value) => regExp.test(value);

export const useFeedbackStore = () => {
  const { t } = useTranslation();
  const [name, setName] = useState({ isValid: true, value: "" });
  const [tel, setTel] = useState({ isValid: true, value: "" });
  const [email, setEmail] = useState({ isValid: true, value: "" });
  const [question, setQuestion] = useState({ isValid: true, value: "" });

  const [errors, setErrors] = useState({
    name: "",
    tel: "",
    email: "",
    question: "",
    captcha: "",
  }); // объект ошибок

  const setFalse = (input) => {
    switch (input) {
      case "name":
        setName({ ...name, isValid: false });
        break;
      case "tel":
        setTel({ ...tel, isValid: false });
        break;
      case "email":
        setEmail({ ...email, isValid: false });
        break;
      case "question":
        setQuestion({ ...question, isValid: false });
        break;
      default:
        break;
    }
  };

  const onChangeInput = (value, name) => {
    switch (name) {
      case "inpName":
        let resultName = testRegexp(NAME_REGEXP_TEST, value);
        setName({ isValid: !!resultName, value: value });
        setErrors({
          ...errors,
          name: !resultName && t("feedback.inpNameErrMess"),
        });
        break;
      case "inpTel":
        let resultTel = testRegexp(TELEPHONE_REGEXP_TEST, value);
        setTel({ isValid: !!resultTel, value: value });
        setErrors({
          ...errors,
          tel: !resultTel && t("feedback.inpPhoneErrMess"),
        });
        break;
      case "inpEmail":
        let resultEmail = testRegexp(TELPHONE_REGEXP_TEST, value);
        setEmail({ isValid: !!resultEmail, value: value });
        setErrors({
          ...errors,
          email: !resultEmail && t("feedback.inpEmailErrMess"),
        });
        break;
      case "inpArea":
        let resultText = questionTest;
        setQuestion({ isValid: !!resultText, value: value });
        setErrors({
          ...errors,
          question: !resultText && t("feedback.inpAreaErrMess"),
        });
        break;
      default: // линт выдает ошибку без этой строчки
    }
  };

  let questionTest = question.value.length > 10;

  return {
    values: { name, tel, email, question },
    errors: errors,
    inputChange: (value, name) => {
      onChangeInput(value, name);
    },
    clearForm: () => {
      setName({ isValid: true, value: "" });
      setTel({ isValid: true, value: "" });
      setEmail({ isValid: true, value: "" });
      setQuestion({ isValid: true, value: "" });
    },
    setFalse: setFalse,
  };
};
