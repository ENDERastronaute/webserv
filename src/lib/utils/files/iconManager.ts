
import { readFile, writeFile } from "fs/promises";

const DEFAULT_ICON = 'file.svg'

type Icons = {
    default: string,
    [key: string]: string
}

class IconManager {
    private _icons: Icons = { default: DEFAULT_ICON };

    public get(name: string) {
        if (name && !this._icons[name]) {
            return this._icons.default;
        }

        return this._icons[name];
    }

    public get icons() {
        return this._icons;
    }

    public async write() {
        await writeFile('./configs/applications.json', JSON.stringify(this._icons));
    }

    public static async getNewInstance(): Promise<IconManager> {
        const instance = new this;
        await instance.init();

        return instance;
    }

    private async init() {
        this._icons = await JSON.parse(await readFile('./configs/icons.json', 'utf-8'));
    }
}

const iconsManager = await IconManager.getNewInstance();

export default iconsManager;