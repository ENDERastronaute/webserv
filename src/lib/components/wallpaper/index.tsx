'use client'

import WallpaperContext from "@/lib/utils/hooks/wallpaperContext";
import Image from "next/image";
import { useContext } from "react";
import styles from './index.module.scss';

export default function Wallpaper() {
    const { wallpaper } = useContext(WallpaperContext);

    return (
        wallpaper && wallpaper !== ''
        ? <Image src={`/wallpapers/${wallpaper}`} alt="wallpaper" width={1920} height={1080} className={styles.img} priority={true}></Image>
        : <div></div>
    )
}