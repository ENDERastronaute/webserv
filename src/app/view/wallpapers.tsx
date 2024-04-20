import WallpapersManager from "@/lib/utils/files/wallpapers";
import useWallpaper from "@/lib/utils/hooks/useWallpaper";
import useWallpapers from "@/lib/utils/hooks/useWallpapers";
import WallpaperContext from "@/lib/utils/hooks/wallpaperContext";
import { useContext, useEffect } from "react";

export default function Wallpapers() {
    const { wallpapers } = useWallpapers();
    const [wallpaper, updateWallpaper] = useContext(WallpaperContext);

    console.log(wallpapers);

    const handle_click = (evt: any) => {
        updateWallpaper(evt.target.id)
    }
    

    return (
        <div>
            {
                wallpapers.map(wallpaper => {
                    return (
                        <img src={`/wallpapers/${wallpaper}`} alt="" key={wallpaper} onClick={handle_click} id={wallpaper}/>
                    )
                })
            }
        </div>
    )
}