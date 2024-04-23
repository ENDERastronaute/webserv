import Wallpaper from "@/lib/components/wallpaper";
import styles from './page.module.scss';
import useApplications from "@utils/hooks/states/useApplications";
import Application from "@/lib/components/application";
import Dock from "@/lib/components/dock";
import ActionsContext from "@/lib/utils/hooks/contexts/actionsContext";
import { AppInstance } from "@/lib/types";
import { ReactElement, useRef } from "react";
import ReactDOM from "react-dom";

export default function Desktop() {
    const applications = useApplications();

    const mainRef = useRef<HTMLDivElement>(null);

    const close = (ref: React.RefObject<HTMLElement>) => {
        ref.current!.remove();
    }

    const open = (instance: AppInstance) => {
        const app: any = <Application app={instance}></Application>;

        ReactDOM.render(app, mainRef.current);
    }
    
    return (
        <main className={styles.main} ref={mainRef}>
            <Wallpaper></Wallpaper>

            <ActionsContext.Provider value={{ open, close }}>
                {
                    applications && applications.map((app, index) => (
                        app.instances.map((instance, instanceIndex) => (
                            <Application app={instance} key={`${index}-${instanceIndex}`}></Application>
                        ))
                    ))
                }

                <Dock applications={applications}></Dock>
            </ActionsContext.Provider>


        </main>
    )
}