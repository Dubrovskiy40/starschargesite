import { useEffect, useState } from "react";
import {CORS, CORS_CAPTCHA, getHostInformation, POSTCORS} from "./helper";
import { useFeedbackStore } from "./FeedbackStore";

const host = getHostInformation();

export const useCaptcha = () => {
  const { values } = useFeedbackStore();
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

  const postForm = async () => {
    const data = {"email": values.email,
      "name": values.name,
      "question": values.question,
      "tel": values.tel
    }
    const response = await fetch(`${host}/SendQuestion`, POSTCORS(data));
    console.log(response);
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
