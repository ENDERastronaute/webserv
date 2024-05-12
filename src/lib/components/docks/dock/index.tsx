
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { App } from '$types';
import DockIcon from '../dockIcon';

export default function Dock() {
    const [apps, setApps] = useState<App[]>()

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/dock');
            setApps(await res.json());
        })()
    }, [])

    const handleOpen = () => {

    }

    return (
        <nav className={styles.dock}>
            {
                apps && apps.map((application, index) => (
                    <DockIcon app={application} key={index}></DockIcon>
                ))
            }
        </nav>
    )
}