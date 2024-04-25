import Wallpaper from "@/lib/components/wallpaper";
import styles from './page.module.scss';
import useApplications from "@utils/hooks/states/useApplications";
import Application from "@/lib/components/application";
import Dock from "@/lib/components/dock";
import ActionsContext from "@/lib/utils/hooks/contexts/actionsContext";
import InstancesContext from "@/lib/utils/hooks/contexts/instancesContext";
import { AppInstance } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

export default function Desktop() {
    const { applications, setApplications } = useApplications();
    const [instances, setInstances] = useState<AppInstance[]>([]);

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

    const close = (pid: string) => {   
        const tempInstances = instances?.filter(instance => instance.pid !== pid);

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
    
    return (
        <ActionsContext.Provider value={{ open, close }}>
            {
                instances && 
                <InstancesContext.Provider value={{ instances, setInstances }}>
                    <main className={styles.main} ref={mainRef}>
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