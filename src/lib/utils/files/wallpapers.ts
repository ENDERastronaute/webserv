
import { readdir } from "fs/promises";
import Config from "./config";

class WallpapersManager {
    private _wallpapers: string[] = [];

    public get wallpapers() {
        return this._wallpapers;
    }

    public set wallpapers(value: string[]) {
        this._wallpapers = value.length !== 0 ? value : this._wallpapers;
    }
    
    public async getUsedWallpaper() {
        return Config.cfg.wallpaper !== '' ? Config.cfg.wallpaper : process.env.DEFAULT_WALLPAPER;
    }

    public async getUsedLockscreen() {
        return Config.cfg.lock_screen !== '' ? Config.cfg.lock_screen : process.env.DEFAULT_WALLPAPER;
    }
    
    public async setWallpaper(wallpaper: string) {
        await Config.set("wallpaper", wallpaper);
        Config.cfg.wallpaper = wallpaper;
    }

    public async setLockscreen(wallpaper: string) {
        await Config.set("lock_screen", wallpaper);
        Config.cfg.lock_screen = wallpaper;
    }
    
    public async addWallpaper() {
        // todo
    }

    public static async getNewInstance(): Promise<WallpapersManager> {
        const instance = new this;
        await instance.init();

        return instance;
    }

    private async init() {
        this.wallpapers = await readdir('./public/wallpapers');
    }
}

const wallpaperManager = await WallpapersManager.getNewInstance();

export default wallpaperManager;