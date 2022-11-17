import { makeAutoObservable, runInAction } from "mobx";
import { CORS, getHostInformation } from "./helper";

const host = getHostInformation();

class SettingsStore {
  isLoading = true;
  items = {};

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (bool) => {
    runInAction(() => {
      this.isLoading = bool;
    });
  };

  fetchSettings = async () => {
    const itemReq = await fetch(`${host}/GetSettings`, CORS);
    const itemRes = await itemReq.json();

    console.log(itemRes);
    if (itemReq.ok && itemRes !== null) {
      runInAction(() => {
        this.items = itemRes;
      });
    }
    this.setLoading(false);
  };
}

export default new SettingsStore();
