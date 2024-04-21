'use client'

import { useState, useEffect } from "react"

export default function useWallpapers() {
    const [wallpapers, setWallpapers] = useState([]);

    const fetchWallpapers = async () => {
        try {
            const response = await fetch('/api/wallpaper', {
                method: 'PUT'
            });
            const data = await response.json();

            setWallpapers(data.wallpapers);

        } catch {}
    }

    const updateWallpapers = async (newWallpaper: string) => {
        try {
            const response = await fetch('/api/wallpaper', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ wallpaper: newWallpaper })
            })
            const data = await response.json();
            
            setWallpapers(data.wallpapers);

        } catch {}
    }

    useEffect(() => {
        (async () => await fetchWallpapers())()
    }, []);

    return { wallpapers, updateWallpapers };
}