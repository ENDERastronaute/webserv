
import styles from './index.module.scss';
import List from './list';

export default function WallpapersTab() {
    return (
        <div className={`${styles.tab} tab`}>
            <List></List>
        </div>
    )
}