
import WallpapersTab from "./custom/wallpapers";
import styles from './index.module.scss';

export default function SettingsApp() {
    return (
        <div className={`${styles.app} app`}>
            <WallpapersTab></WallpapersTab>
        </div>
    )
}
