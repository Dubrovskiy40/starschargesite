import {makeAutoObservable, runInAction} from "mobx";
import {CORS, getHostInformation} from "./helper";

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
        const itemReq = await fetch(`${host}/GetMenuList`, CORS);
        const itemRes = await itemReq.json();
        if (itemReq.ok) {
            runInAction(() => {
                this.items = itemRes;
            });
        }
        //console.log(itemRes)
        this.setLoading(false);
    };

}

export default new MenuStore();