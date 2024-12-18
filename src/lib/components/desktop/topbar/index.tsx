
import CloseBtn from './btns/close';
import styles from './index.module.scss';
import { AppInstance } from '$types';
import ActionsContext from '@utils/hooks/contexts/actionsContext';
import { useContext } from 'react';

interface TopbarProps {
    app: AppInstance;
    title: string;
    startDrag: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Topbar({ app, title, startDrag }: TopbarProps) {
    const actions = useContext(ActionsContext);
    
    const closeApp = async () => {
        actions?.close(app);
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
