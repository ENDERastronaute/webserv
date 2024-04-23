import { App, AppInstance } from "$types";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styles from './index.module.scss';
import ActionsContext from "@/lib/utils/hooks/contexts/actionsContext";

interface DockIconProps {
    app: App
}

export default function DockIcon({ app }: DockIconProps) {
    const [instances, setInstances] = useState<AppInstance[]>();

    const actions = useContext(ActionsContext);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/apps/instances', {
                method: 'post',
                body: JSON.stringify({ name: app.name })
            });

            setInstances(await res.json());
        })()
    }, [])

    const handleClick = async () => {
        if (instances?.length === 0) {
            const res = await fetch('/api/apps', {
                method: 'PUT',
                body: JSON.stringify({ name: app.name })
            })

            const instance = await res.json();

            actions!.open(instance);
        }
    }

    return (
        <article className={styles.article} onClick={handleClick}>
            
        </article>
    )
}