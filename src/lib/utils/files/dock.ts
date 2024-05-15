import applicationsManager from "./applications";
import config from "./config";

import { App } from '$types';

class Dock {
    private _apps: App[] = [];

    public get apps(): App[] {
        return this._apps;
    }

    public set apps(value: App[]) {
        this._apps = value;
    }

    private async init() {
        const dock_apps: string[] = config.cfg.dock;

        dock_apps.forEach(app => {
            this._apps.push(applicationsManager.get(app));
        });
    }

    public static async getNewInstance() {
        const instance = new this;
        await instance.init();

        return instance;
    }
}

const dock = await Dock.getNewInstance();

export default dock;
