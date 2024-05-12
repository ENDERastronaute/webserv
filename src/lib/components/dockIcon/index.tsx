import { App, AppInstance } from "$types";
import dynamic from "next/dynamic";
import Image from "next/image";
import {useContext, useEffect, useRef, useState} from "react";
import styles from './index.module.scss';
import ActionsContext from "@/lib/utils/hooks/contexts/actionsContext";
import InstancesContext from "@/lib/utils/hooks/contexts/instancesContext";
import ContextMenu from "@/lib/components/contextMenu";

interface DockIconProps {
    app: App
}

export default function DockIcon({ app }: DockIconProps) {
    const allInstances = useContext(InstancesContext)!;
    const [instances, setInstances] = useState<AppInstance[]>();
    const [Menu, setMenu] = useState<any>(null);

    const menuRef = useRef<HTMLMenuElement>(null);


    useEffect(() => {
        if (allInstances) {
          const filteredInstances = allInstances.instances.filter(instance => instance.name === app.name);
          setInstances(filteredInstances);
        }

        (async () => {
            const module = await import(`../../../../apps/${app.name.toLocaleLowerCase()}`);

            setMenu(module._dockmenu_ ? module._dockmenu_ : null);
        })()
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

    const handleMenu = async (evt: React.MouseEvent<any>) => {
        evt.preventDefault();

        menuRef.current!.style.display = "block";
    }

    return (
        instances &&
        <article className={`${styles.article} ${instances!.length > 0 ? styles.active : ''}`} onClick={handleClick}>
            <Image className={styles.img} src={`/api/apps/instances/icons/${app.name.toLowerCase()}`} alt="icon" width={64} height={64} onContextMenu={handleMenu}></Image>
            <ContextMenu menuref={menuRef} className={styles.menu}>
                {
                    Menu
                        ? [Menu][0]
                        : <div></div>
                }
            </ContextMenu>

        </article>
    )
}
