import { makeAutoObservable, runInAction} from "mobx";
import {CORS, getHostInformation} from "./helper";

const host = getHostInformation();

class HeaderStore {
    isLoading = true;
    // items = [];
    // заглушка
    items = [{value: "О станции", href:"#s"}, {value: "Наша команда", href:"#s"}, {value: "Как это работает", href:"#s"}, {value: "Новости", href:"#s"}, {value: "Контакты", href:"#s"}]

    constructor() {
        makeAutoObservable(this);
    }

    setLoading = (bool) => {
        runInAction(() => {
            this.isLoading = bool;
        });
    };

    fetchMenuItems = async () => {
        const itemReq = await fetch(`${host}/items`, CORS()
        );
        const itemRes = await itemReq.json();
        if (itemReq.ok) {
            runInAction(() => {
                this.items = itemRes;
            });
        }
        this.setLoading(false);
    };

}

export default new HeaderStore();