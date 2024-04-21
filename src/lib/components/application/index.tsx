import { App } from "@/lib/utils/files/applications"
import dynamic from "next/dynamic";
import Topbar from "../topbar";
import { useRef, useState } from "react";
import styles from './index.module.scss';
import useMovable from "@/lib/utils/hooks/useMovable";
import useApp from "@/lib/utils/hooks/useApp";

interface ApplicationProps {
    app: App;
}

export default function Application({ app }: ApplicationProps) {
    const { application, updateApp } = useApp(app);
    const ApplicationComponent = dynamic(async () => await import(`../../../../apps/${application.name.toLowerCase()}`), { ssr: false });

    const draggedRef = useRef<HTMLDivElement>(null);

    const { pos, startDrag } = useMovable((x, y) => {
        app.left = x;
        app.top = y;  

        updateApp(app);
    }, draggedRef);

    return (
        <article ref={draggedRef} className={`${styles.app} ${application.opened ? styles.open : ''} app_container`} style={{width: application.width, height: application.height, left: application.left + 'px', top: application.top + 'px' }}>
            <Topbar app={application} setApp={updateApp} title="Settings" startDrag={startDrag}></Topbar>
            <ApplicationComponent></ApplicationComponent>
        </article>
    )
}