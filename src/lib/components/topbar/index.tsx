
import CloseBtn from './btns/close';
import styles from './index.module.scss';
import { App } from '@/lib/utils/files/applications';

interface TopbarProps {
    app: App;
    setApp: (app: App) => void;
    title: string;
    startDrag: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Topbar({ app, title, setApp, startDrag }: TopbarProps) {
    const closeApp = () => {
        app.opened = false;
        setApp(app);
    }



    return (
        <div className={`${styles.topbar} topbar`}>
            <h3>{title}</h3>
            <span onMouseDown={startDrag}></span>
            <div className={styles.actions}>
                <CloseBtn onClick={closeApp}></CloseBtn>
            </div>
        </div>
    )
}