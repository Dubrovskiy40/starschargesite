import { makeAutoObservable, runInAction } from "mobx";
import { CORS, getHostInformation } from "./helper";

const host = getHostInformation();

class StationsStore {
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
  
  fetchStations = async () => {
    const itemReq = await fetch(`${host}/GetStations`, CORS);
    const itemRes = await itemReq.json();
    if (itemReq.ok && itemRes !== null) {
      runInAction(() => {
        this.items = itemRes;
      });
    }
    this.setLoading(false);
  };

}

export default new StationsStore();