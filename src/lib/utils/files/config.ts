
import { readFile, writeFile } from "fs/promises";

interface ReadValues {
    index: number;
    nlindex: number;
    data: string;
    formattedKey: string;
}

export default class Config {
    private static _cfg: Config;
    private _wallpaper: string = '';

    public static get cfg(): Config {
        if (!Config._cfg) {
            Config._cfg = new Config();
        }

        return Config._cfg;
    }



    private async init() {
        const wallpaper = await this.get('wallpaper') as string;
        this.wallpaper = wallpaper !== '' ? wallpaper : process.env.DEFAULT_WALLPAPER as string
    }

    public get wallpaper(): string {
        return this._wallpaper;
    }

    public set wallpaper(value: string) {
        this._wallpaper = value;
    }

    private constructor() {
        this.init();
    }

    public async get(key: string): Promise<string|undefined> {
        const { index, nlindex, data, formattedKey } = await this.read(key);

        return data.substring(index + formattedKey.length, nlindex)
    }

    public async set(key: string, value: string) {
        const { index, nlindex, data, formattedKey } = await this.read(key);
        
        const newDataString = data.substring(0, index + formattedKey.length) + value + data.substring(nlindex);
        
        await writeFile('./configs/config.cfg', newDataString, 'utf-8');
    }

    private async read(key: string): Promise<ReadValues> {
        const formattedKey = key.toLowerCase() + '=';

        let data = await readFile('./configs/config.cfg', 'utf-8');

        const index = data.indexOf(formattedKey);
    
        if (index === -1) {
            console.error(`the key : ${key} doesn't exist in config.cfg file, did you delete it by mistake ?`);
            process.exit();
        }
    
        const nlindex = data.indexOf('\n', index) !== -1 ? data.indexOf('\n', index) : data.length;

        return {
            index: index,
            nlindex: nlindex,
            data: data,
            formattedKey: formattedKey
        }
    }
}