'use client'

import Image from "next/image";
import WallpaperContext from "@/lib/utils/hooks/wallpaperContext";
import { useContext } from "react";
import { login } from "./server";
import styles from "./page.module.scss";
import useWallpapers from "@/lib/utils/hooks/useWallpapers";

export default function Login() {
    const [wallpaper, updateWallpaper] = useContext(WallpaperContext);
    const {wallpapers} = useWallpapers();
    
    const handleWallpaperChange = () => {
      let newWallpaper;
      
      do {
        newWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
      } while (newWallpaper === wallpaper)

      updateWallpaper(newWallpaper);
    }
  

    return (
      <main className={styles.main}>
        { 
          wallpaper && wallpaper !== ''
          ? <Image src={`/wallpapers/${wallpaper}`} alt="wallpaper" width={1920} height={1080}/>
          : <div></div>
        }
        <form action={login} className={styles.login}>
          <input type="text" name="username" id="username" placeholder="username"/>
          <input type="text" name="password" id="password" placeholder="password"/>
          <button type="submit">submit</button>
        </form>

        <button className={styles.wallpaperbtn} onClick={handleWallpaperChange}>Change wallpaper</button>
      </main>
    );
}