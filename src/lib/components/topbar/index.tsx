
import CloseBtn from './btns/close';
import styles from './index.module.scss';
import { AppInstance } from '$types';

interface TopbarProps {
    app: AppInstance;
    setApp: (app: AppInstance) => void;
    title: string;
    parentRef: React.RefObject<HTMLDivElement>;
    startDrag: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Topbar({ app, title, setApp, parentRef, startDrag }: TopbarProps) {
    const closeApp = () => {
        app.opened = false;
        setApp(app);

        parentRef.current!.style.display = 'none';
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