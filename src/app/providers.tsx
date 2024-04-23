'use client'

import useWallpaper from "@utils/hooks/states//useWallpaper";
import WallpaperContext from "@utils/hooks/contexts/wallpaperContext";

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    const { wallpaper, updateWallpaper } = useWallpaper();

    return (
        <WallpaperContext.Provider value={{ wallpaper, updateWallpaper }}>
            {children}
        </WallpaperContext.Provider>
    )
}