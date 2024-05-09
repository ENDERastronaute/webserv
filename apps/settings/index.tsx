
import WallpapersTab from "./custom/wallpapers";
import styles from './index.module.scss';
import Menu from "./menu";

export let menu = Menu;

export default function SettingsApp() {
    return (
        <div className={`${styles.app} app_open app`}>
            <WallpapersTab></WallpapersTab>
        </div>
    )
}