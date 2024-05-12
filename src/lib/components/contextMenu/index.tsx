'use client'

import {ReactNode, Ref, RefObject, useEffect} from "react";

interface ContextMenuProps {
    menuref: RefObject<HTMLMenuElement>;
    className?: string;
    children?: ReactNode;
}

export default function ContextMenu({ menuref, className, children }: ContextMenuProps) {
    const close = () => {
        menuref.current!.style.display = 'none'
    }

    useEffect(() => {
        document.addEventListener('mousedown', close);

        return () => {
            document.removeEventListener('mousedown', close);
        }
    }, []);

    return (
        <menu ref={menuref} className={className}>
            {children}
        </menu>
    )
}
