import { useEffect, useState } from "react";
import { CORS, CORS_CAPTCHA, getHostInformation, POSTCORS } from "./helper";

const host = getHostInformation();

export const useCaptcha = () => {
  const [store, setStore] = useState({
    img: null,
    UUID: "",
    value: "",
    valid: true,
  });
  const CAPTCHA_REGEXP_TEST = /[A-Za-z0-9]{4}/;
  const testRegexp = (regExp, value) => regExp.test(value);

  const changeCaptchaValue = (value) => {
    let isValid = testRegexp(CAPTCHA_REGEXP_TEST, value);

    if (isValid) {
      setStore((store) => ({
        ...store,
        value,
        valid: true,
      }));
    } else {
      setStore((store) => ({
        ...store,
        value,
        valid: false,
      }));
    }
  };

  const fetchCaptchaImg = async () => {
    const response = await fetch(`${host}/GetCaptchaImg`, CORS);
    const result = await response.blob();
    if (response.ok && result !== null) {
      setStore((store) => ({
        ...store,
        img: result,
        UUID: response.headers.get("get_uuid"),
      }));
    }
  };

  const checkCaptcha = async () => {
    const response = await fetch(
      `${host}/CheckCaptcha`,
      CORS_CAPTCHA(store.UUID, store.value)
    );
    const result = await response.json();
    if (result !== "Error") {
      setStore((store) => ({
        ...store,
        valid: true,
      }));
      return true;
    } else {
      setStore((store) => ({
        ...store,
        valid: false,
      }));
      return false;
    }
  };

  const postForm = async (values) => {
    const data = {
      email: values.email.value,
      name: values.name.value,
      question: values.question.value,
      tel: values.tel.value,
    };

    const response = await fetch(`${host}/SendQuestion`, POSTCORS(data));
    const result = await response.json();
    if (result !== "Error" && result !== null && response.ok) {
      console.log("ok");
    }
  };

  useEffect(() => {
    fetchCaptchaImg();
  }, []);

  return {
    store,
    checkCaptcha,
    fetchCaptchaImg,
    changeCaptchaValue,
    postForm,
  };
};

