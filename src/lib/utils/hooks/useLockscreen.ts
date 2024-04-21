'use client'

import { useState, useEffect } from "react"

export default function useLockscreen() {
    const [lockscreen, setLockscreen] = useState(null);

    const fetchLockscreen = async () => {
        try {
            const response = await fetch('/api/lockscreen');
            const data = await response.json();

            setLockscreen(data.wallpaper);

        } catch {}
    }

    const updateLockscreen = async (newWallpaper: string) => {
        try {
            const response = await fetch('/api/lockscreen', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ wallpaper: newWallpaper })
            })
            const data = await response.json();

            console.log(data);
            
            setLockscreen(data.wallpaper);

        } catch {}
    }

    useEffect(() => {
        (async () => await fetchLockscreen())()
    }, []);

    return { lockscreen, updateLockscreen };
}