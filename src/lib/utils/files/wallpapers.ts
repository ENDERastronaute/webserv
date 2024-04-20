
import { readdir } from "fs/promises";
import Config from "./config";

export default class WallpapersManager {
    private static _instance: WallpapersManager;
    private _wallpapers: string[] = [];

    private constructor() {
        this.init();
    }

    public static get manager() {
        if (!WallpapersManager._instance) {
            this._instance = new WallpapersManager();
        }
        return this._instance;
    }

    public get wallpapers() {
        return this._wallpapers;
    }

    public set wallpapers(value: string[]) {
        this._wallpapers = value.length !== 0 ? value : this._wallpapers;
    }
    
    public async getUsedWallpaper() {
        return Config.cfg.wallpaper;
    }
    
    public async setWallpaper(wallpaper: string) {
        await Config.cfg.set("wallpaper", wallpaper);
        Config.cfg.wallpaper = wallpaper;
    }
    
    public async addWallpaper() {
        // todo
    }

    private async init() {
        this.wallpapers = await readdir('./public/wallpapers');
    }
}

