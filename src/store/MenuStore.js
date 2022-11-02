import { makeAutoObservable, runInAction } from "mobx";
import { CORS, getHostInformation } from "./helper";

const host = getHostInformation();

class MenuStore {
  isLoading = true;
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (bool) => {
    runInAction(() => {
      this.isLoading = bool;
    });
  };

  fetchMenuItems = async () => {
    const itemReq = await fetch(`${host}/GetContent`, CORS);
    const itemRes = await itemReq.json();
    if (itemReq.ok && itemRes !== null) {
      runInAction(() => {
        this.items = itemRes
      });
    }
    this.setLoading(false);
  };

}

export default new MenuStore();
