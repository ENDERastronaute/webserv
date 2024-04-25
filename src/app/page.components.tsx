'use client'

import Image from "next/image";
import { login } from "./server";
import styles from "./page.module.scss";
import useLockscreen from "@/lib/utils/hooks/states/useLockscreen";
import Input from "@/lib/components/forms/input";

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
				<Input name="username" id="username" placeholder="Username" type="text" required autocomplete="off"></Input>
				<Input name="password" id="password" placeholder="Password" type="password" required autocomplete="off"></Input>

				<button type="submit">submit</button>
			</form>
		</main>
  	);
}