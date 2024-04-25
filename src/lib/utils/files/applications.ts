
import { readFile, writeFile } from "fs/promises";
import { App, AppInstance } from '$types';
import { randomBytes } from "crypto";

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
        const pid = randomBytes(3).toString('hex');

        app.instances.push({ top: 0, left: 0, height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH, name: name, pid: pid });

        await this.write();

        return { top: app.top, left: app.left, height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH, name: name, pid: pid }
    }

    public async updateInstance(data: AppInstance) {
        const app = this.get(data.name);        

        app.instances = app.instances.map(instance => {
            if (instance.pid === data.pid) {
                return data;
            }

            return instance;
        })

        await this.write();
    }

    public async removeInstance(instance: AppInstance) {
        const app = this.get(instance.name);

        app.instances = app.instances.filter(ist => ist.pid !== instance.pid);

        if (app.instances.length === 0) {
            app.left = instance.left;
            app.top = instance.top;
        }

        await this.write();
    }

    public getInstance(instance: AppInstance) {
        return this.get(instance.name).instances.filter(ist => ist.pid === instance.pid)[0];
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