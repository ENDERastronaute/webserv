import useWallpapers from "@utils/hooks/states//useWallpapers";
import WallpaperCard from "../wallpaperCard";

export default function List() {
    const { wallpapers, updateWallpapers } = useWallpapers();

    return (
        <ul>
            {
                wallpapers.map((wallpaper, index) => {
                    return (
                        <li key={index}>
                            <WallpaperCard wallpaper={wallpaper}></WallpaperCard>
                        </li>
                        
                    )
                })
            }
        </ul>
    )
}