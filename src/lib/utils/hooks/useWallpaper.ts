'use client'

import { useState, useEffect } from "react"

export default function useWallpaper() {
    const [wallpaper, setWallpaper] = useState(null);

    const fetchWallpaper = async () => {
        try {
            const response = await fetch('/api/wallpaper');
            const data = await response.json();

            setWallpaper(data.wallpaper);

        } catch {}
    }

    const updateWallpaper = async (newWallpaper: string) => {
        try {
            const response = await fetch('/api/wallpaper', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ wallpaper: newWallpaper })
            })
            const data = await response.json();
            
            setWallpaper(data.wallpaper);

        } catch {}
    }

    useEffect(() => {
        (async () => await fetchWallpaper())()
    }, []);

    return { wallpaper, updateWallpaper };
}