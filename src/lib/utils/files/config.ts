
import { readFile, writeFile } from "fs/promises";

interface ReadValues {
    index: number;
    nlindex: number;
    data: string;
    formattedKey: string;
}

type Cfg = {
    [key: string]: any;
}

class ConfigManager {
    private _cfg: Cfg = {};


    private async init() {
        const data = await readFile('./configs/config.cfg', 'utf-8');
    
        const lines = data.split('\n');

        lines.forEach(line => {
            const match = line.match(/^([^=]+)=(.*)$/);

            if (match) {
                const key = match[1].trim();
                let value = match[2].trim();

                if (value.startsWith('[') || value.startsWith('{')) {
                    try {
                        value = JSON.parse(value);
                    } catch {
                        console.error(`Can't parse value of '${value}', did you forget a comma or to close the object/array ?`);
                    }
                }

                this._cfg[key] = value;
            }
        })
    }

    public get cfg(): Cfg {
        return this._cfg;
    }

    public async set(key: string, value: string) {
        const { index, nlindex, data, formattedKey } = await this.read(key);
        
        const newDataString = data.substring(0, index + formattedKey.length) + value + data.substring(nlindex);
        
        await writeFile('./configs/config.cfg', newDataString, 'utf-8');
    }

    private async read(key: string): Promise<ReadValues> {
        const formattedKey = key.toLowerCase() + '=';

        const data = await readFile('./configs/config.cfg', 'utf-8');

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

    public static async getNewInstance() {
        const instance = new this;
        await instance.init();

        return instance;
    }
}

const config = await ConfigManager.getNewInstance();

export default config;