'use client'

import Image from "next/image";
import { login } from "./server";
import styles from "./page.module.scss";
import useLockscreen from "@/lib/utils/hooks/useLockscreen";

export default function Login() {
	const { lockscreen } = useLockscreen();

	return (
		<main className={styles.main}>
			{ 
				lockscreen && lockscreen !== ''
				? <Image src={`/wallpapers/${lockscreen}`} alt="wallpaper" width={1920} height={1080}/>
				: <div></div>
			}
				<form action={login} className={styles.login}>
					<input type="text" name="username" id="username" placeholder="username"/>
					<input type="text" name="password" id="password" placeholder="password"/>
					<button type="submit">submit</button>
				</form>
		</main>
  	);
}