import { AppInstance } from "$types"
import dynamic from "next/dynamic";
import Topbar from "../topbar";
import { useRef, useState } from "react";
import styles from './index.module.scss';
import useMovable from "@utils/hooks/states/useMovable";
import useApp from "@utils/hooks/states/useApp";

interface ApplicationProps {
    app: AppInstance;
}

export default function Application({ app }: ApplicationProps) {
    const { application, updateApp } = useApp(app);
    const ApplicationComponent = dynamic(async () => await import(`../../../../apps/${application.name.toLowerCase()}`), { ssr: false });

    const draggedRef = useRef<HTMLDivElement>(null);

    const { startDrag } = useMovable((x, y) => {
        app.left = x;
        app.top = y;  

        updateApp(app);
    }, draggedRef);
    

    return (
        <article ref={draggedRef} className={`${styles.app} app_container`} style={{width: application.width, height: application.height, left: application.left + 'px', top: application.top + 'px' }}>
            <Topbar app={application} title={app.name} startDrag={startDrag}></Topbar>
            <ApplicationComponent></ApplicationComponent>
        </article>
    )
}