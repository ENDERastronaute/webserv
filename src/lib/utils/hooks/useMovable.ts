
import { useCallback, useState } from "react";
import { App } from "../files/applications";

export default function useMovable(callback: (x: number, y: number) => void, dragged: React.RefObject<HTMLElement>) {
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const startDrag = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.preventDefault();

        posX = evt.clientX - dragged.current!.offsetLeft;
        posY = evt.clientY - dragged.current!.offsetTop;

        window.addEventListener('mousemove', moveElement, false);
        document.addEventListener('mouseup', stopDrag, false);

    };

    const moveElement = (evt: MouseEvent) => {
        evt.preventDefault();

        mouseX = evt.clientX - posX;
        mouseY = evt.clientY - posY;
        
        dragged.current!.style.left = mouseX + 'px';
        dragged.current!.style.top = mouseY + 'px';
    }

    const stopDrag = (evt: MouseEvent) => {
        callback(mouseX, mouseY);

        window.removeEventListener('mousemove', moveElement, false);
        document.removeEventListener('mouseup', stopDrag, false);
    };

    return { pos: { x: mouseX, y: mouseY }, startDrag }
}