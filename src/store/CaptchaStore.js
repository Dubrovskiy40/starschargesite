import { useEffect, useState } from "react";
import { CORS, CORS_CAPTCHA, getHostInformation } from "./helper";

const host = getHostInformation();

export const useCaptcha = () => {
  const [store, setStore] = useState({
    img: null,
    UUID: "",
    value: "",
    valid: true,
  });

  const changeCaptchaValue = (value) => {
    setStore((store) => ({
      ...store,
      value,
      valid: true,
    }));
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

  useEffect(() => {
    fetchCaptchaImg();
  }, []);

  return {
    store,
    checkCaptcha,
    fetchCaptchaImg,
    changeCaptchaValue,
  };
};
