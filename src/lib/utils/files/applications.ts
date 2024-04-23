
import { readFile, writeFile } from "fs/promises";
import { App, AppInstance } from '$types';

const DEFAULT_HEIGHT = 650;
const DEFAULT_WIDTH = 600;

type AppsJson = {
    [key: string]: App;
};

class ApplicationsManager {
    private _applications: AppsJson|null = null;

    public get(name: string) {
        if (name && !this._applications![name]) {
            this._applications![name] = { name: name, top: 0, left: 0, instances: [] }
            this.write();
        }

        return this._applications![name];
    }

    public async addInstance(name: string): Promise<AppInstance> {
        const app = this.get(name);
        app.instances.push({ top: 0, left: 0, height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH, opened: false, name: name });

        await this.write();

        return { top: 0, left: 0, height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH, opened: false, name: name }
    }

    public async updateInstance(name: string, index: number, data: AppInstance) {
        const app = this.get(name);

        app.instances[index] = data;

        await this.write();
    }

    public async removeInstance(name: string, index: number) {
        const app = this.get(name);

        const instance = app.instances.splice(index)[0];

        if (app.instances.length === 0) {
            app.left = instance.left;
            app.top = instance.top;
        }

        await this.write();
    }

    public getInstance(name: string, index: number) {
        return this.get(name).instances[index];
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
        try {
            this._applications = await JSON.parse(await readFile('./configs/applications.json', 'utf-8'));
        }
        catch {
            this._applications = {};
        }
        
    }
}

const applicationsManager = await ApplicationsManager.getNewInstance();

export default applicationsManager;