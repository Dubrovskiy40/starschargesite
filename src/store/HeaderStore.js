import {makeAutoObservable, runInAction} from "mobx";
import {CORS, getHostInformation} from "./helper";

const host = getHostInformation();

class HeaderStore {
    isLoading = true;
    // заглушка
    items = [
        {
            "id": 1,
            "name": "Новости",
            "menu_order": 1,
            "show_menu": true
        },
        {
            "id": 2,
            "name": "Станции",
            "menu_order": 2,
            "show_menu": true
        },
        {
            "id": 3,
            "name": "Команда",
            "menu_order": 3,
            "show_menu": true
        },
        {
            "id": 4,
            "name": "Контакты",
            "menu_order": 4,
            "show_menu": true
        }
    ]

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
        console.log(itemRes)
        this.setLoading(false);
    };

}

export default new HeaderStore();