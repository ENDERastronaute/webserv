import { App, AppInstance } from "$types";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styles from './index.module.scss';
import ActionsContext from "@/lib/utils/hooks/contexts/actionsContext";
import InstancesContext from "@/lib/utils/hooks/contexts/instancesContext";

interface DockIconProps {
    app: App
}

export default function DockIcon({ app }: DockIconProps) {
    const allInstances = useContext(InstancesContext)!;
    const [instances, setInstances] = useState<AppInstance[]>();

    useEffect(() => {
        if (allInstances) {
          const filteredInstances = allInstances.instances.filter(instance => instance.name === app.name);
          setInstances(filteredInstances);
        }
      }, [allInstances]);

    const actions = useContext(ActionsContext);

    const handleClick = async () => {
        if (instances?.length === 0) {
            const res = await fetch('/api/apps/instances', {
                method: 'PUT',
                body: JSON.stringify({ name: app.name })
            })

            const instance = await res.json();
            actions!.open(instance);

            setInstances([...instances, instance]);
        }
    }

    return (
        instances && <article className={`${styles.article} ${instances!.length > 0 ? styles.active : ''}`} onClick={handleClick}>
            <Image className={styles.img} src={`/api/apps/instances/icons/${app.name.toLowerCase()}`} alt="icon" width={64} height={64}></Image>
            <div></div>
        </article>
    )
}