import Image from "next/image";
import styles from './index.module.scss';
import { useContext } from "react";
import WallpaperContext from "@/lib/utils/hooks/contexts/wallpaperContext";

interface WallpaperCardProps {
    wallpaper: string
}

export default function WallpaperCard({ wallpaper }: WallpaperCardProps) {
    const { updateWallpaper } = useContext(WallpaperContext);

    const handleChange = async (evt: any) => {
        await updateWallpaper(wallpaper);
    }

    return (
        <article className={styles.card} onClick={handleChange}>
            <span className={styles.filter}></span>
            <Image src={`/wallpapers/${wallpaper}`} alt={wallpaper} width={1280} height={720} className={styles.img}></Image>
        </article>
    )
}