
'use client'

import useWallpaper from "@/lib/utils/hooks/useWallpaper";
import Wallpapers from "./wallpapers";
import { useContext } from "react";
import WallpaperContext from "@/lib/utils/hooks/wallpaperContext";

export default function Page() {
    const [ wallpaper, updateWallpaper ] = useContext(WallpaperContext);
    
    const handleChange = () => {
        const newWallpaper = 'filters quality(95)format(webp).webp';
        updateWallpaper(newWallpaper);
    }

    return (
        <div>
            {
                wallpaper && <img src={`/wallpapers/${wallpaper}`} alt="" />
            }

            <button onClick={handleChange}></button>

            <Wallpapers></Wallpapers>
        </div>
        
    )
}