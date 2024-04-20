'use client'

import useWallpaper from "@/lib/utils/hooks/useWallpaper";
import WallpaperContext from "@/lib/utils/hooks/wallpaperContext";

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    const { wallpaper, updateWallpaper } = useWallpaper();

    return (
        <WallpaperContext.Provider value={[ wallpaper, updateWallpaper ]}>
            {children}
        </WallpaperContext.Provider>
    )
}