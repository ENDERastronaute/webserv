'use client'

import {ReactNode, Ref, RefObject, useEffect} from "react";

interface ContextMenuProps {
    menuRef: RefObject<HTMLMenuElement>;
    className?: string;
    children?: ReactNode;
}

export default function ContextMenu({ menuRef, className, children }: ContextMenuProps) {
    const close = (evt: any) => {
        if (!evt.target.classList.contains('contextBtn')) {
            menuRef.current!.style.display = 'none'
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', close);

        return () => {
            document.removeEventListener('mousedown', close);
        }
    }, []);

    return (
        <menu ref={menuRef} className={className}>
            {children}
        </menu>
    )
}
