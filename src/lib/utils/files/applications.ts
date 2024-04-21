
import { readFile, writeFile } from "fs/promises";

const DEFAULT_HEIGHT = 650;
const DEFAULT_WIDTH = 600;

type AppsJson<T> = {
    [key: string]: {
        [K in keyof T]: T[K];
    } & {
        [key: string]: any
    }
};

interface Application {
    top: number;
    left: number;
    height: number;
    width: number;
    opened: boolean;
    name: string;
}

export type App = {
    [K in keyof Application]: Application[K];
} & {
    [key: string]: any;
};


class ApplicationsManager {
    private _applications: AppsJson<Application>|null = null;

    public get(name: string) {
        if (name && !this._applications![name]) {
            this._applications![name] = { top: 0, left: 0, height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH, opened: false, name: name }
            this.write();
        }

        return this._applications![name];
    }

    public async write() {
        await writeFile('./configs/applications.json', JSON.stringify(this._applications));
    }

    public static async getNewInstance(): Promise<ApplicationsManager> {
        const instance = new this;
        await instance.init();

        return instance;
    }

    private async init() {
        this._applications = await JSON.parse(await readFile('./configs/applications.json', 'utf-8'));
    }
}

const applicationsManager = await ApplicationsManager.getNewInstance();

export default applicationsManager;