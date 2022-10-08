import { makeAutoObservable, runInAction } from "mobx";
import {CORS, CORS_CAPTCHA, getHostInformation} from "./helper";

const host = getHostInformation();

class FormStore {
  isLoading = true;
  captchaImg = null;
  captchaUUID = null;
  captchaText = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (bool) => {
    runInAction(() => {
      this.isLoading = bool;
    });
  };

  getCaptchaImg = async () => {
    this.setLoading(true);
    const itemReq = await fetch(`${host}/GetCaptchaImg`, CORS);
    const itemRes = await itemReq.blob();
    if (itemReq.ok && itemRes !== null) {
      runInAction(() => {
        this.captchaImg = itemRes
        this.captchaUUID = itemReq.headers.get('get_uuid')
      });
    }
    // console.log('captchaImg', this.captchaImg)
    // console.log('itemReq', itemReq)
    this.setLoading(false);
  };

  setCaptchaText = (text) => {
    runInAction(() => {
      this.captchaText = text;
    });
  };

  checkCaptcha = async () => {
    this.setLoading(true);
    const itemReq = await fetch(`${host}/CheckCaptcha`, CORS_CAPTCHA(this.captchaUUID, this.captchaText));
    const itemRes = await itemReq.json();
    if (itemReq.ok && itemRes !== null) {
      runInAction(() => {
        console.log("Статус капчи",itemRes)
      });
    }
    this.setLoading(false);
  };
}

export default new FormStore();
