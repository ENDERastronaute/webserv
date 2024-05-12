import Wallpaper from "../../lib/components/desktop/wallpaper";
import styles from './page.module.scss';
import useApplications from "@utils/hooks/states/useApplications";
import Application from "../../lib/components/desktop/application";
import Dock from "../../lib/components/docks/dock";
import ActionsContext from "@/lib/utils/hooks/contexts/actionsContext";
import InstancesContext from "@/lib/utils/hooks/contexts/instancesContext";
import { AppInstance } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import { logout } from "./server";

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Desktop() {
    const { applications, setApplications } = useApplications();
    const [instances, setInstances] = useState<AppInstance[]>([]);
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

    useEffect(() => {
        const tempInstances: AppInstance[] = []

        applications?.forEach(application => {
            application.instances.forEach(instance => {
                tempInstances.push(instance);
            });
        });

        setInstances(tempInstances);
    }, [applications])

    const mainRef = useRef<HTMLDivElement>(null);

    const close = async (instance: AppInstance) => {
        const tempInstances = instances?.filter(instance => instance.pid !== instance.pid);

        await fetch('/api/apps/instances', {
            method: 'delete',
            body: JSON.stringify({ instance: instance })
        })

        applications?.forEach(application => {
            application.instances = tempInstances.filter(instance => instance.name === application.name);
        });
        
        setInstances(tempInstances);
        
    }

    const open = (instance: AppInstance) => {
        const appName = instance.name;

        const targetAppIndex = applications?.findIndex(app => app.name = appName);

        if (targetAppIndex !== undefined) {
            applications![targetAppIndex].instances.push(instance);

            setApplications([...applications!])
        }
    }

    const handleShowUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    }

    const handleLogout = async () => {
        await logout();
    }

    const handleMenu = (evt: React.MouseEvent<any>) => {
        evt.preventDefault();
    }
    
    return (
        <ActionsContext.Provider value={{ open, close }}>
            <header className={styles.header}>
                <div className={styles.user}>
                    <button className={styles.openmenu} onClick={handleShowUserMenu}><PersonIcon className={styles.icon}></PersonIcon></button>

                    <menu className={`${styles.menu} ${showUserMenu ? styles.active : ''}`}>
                        <button className={styles.logout} onClick={handleLogout}><LogoutIcon className={styles.icon}></LogoutIcon></button>
                    </menu>
                </div>
            </header>
            {
                instances && 
                <InstancesContext.Provider value={{ instances, setInstances }}>
                    <main className={styles.main} ref={mainRef} onContextMenu={handleMenu}>
                        <Wallpaper></Wallpaper>
                        {
                            instances && instances.map((instance, instanceIndex) => (
                                <Application app={instance} key={instanceIndex}></Application>
                            ))
                        }
                        <Dock></Dock>
                    </main>
                </InstancesContext.Provider>
            }
        </ActionsContext.Provider>
    )
}
