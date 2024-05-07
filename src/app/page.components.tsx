'use client'

import Image from "next/image";
import { login } from "./server";
import styles from "./page.module.scss";
import useLockscreen from "@/lib/utils/hooks/states/useLockscreen";
import Input from "@/lib/components/forms/input";
import { useFormState } from "react-dom";
import Submit from "@/lib/components/submit";

export default function Login() {
	const { lockscreen } = useLockscreen();

	const ititialState = {
		message: ''
	}

	const [state, formAction] = useFormState(login, ititialState);

	return (
		<main className={styles.main}>
			{ 
				lockscreen && lockscreen !== ''
				? <Image src={`/wallpapers/${lockscreen}`} alt="wallpaper" width={1920} height={1080}/>
				: <div></div>
			}

			<form action={formAction} className={styles.login}>
				<h1>Login</h1>

				<Input name="username" id="username" placeholder="Username" type="text" required autocomplete="off"></Input>
				<Input name="password" id="password" placeholder="Password" type="password" required autocomplete="off"></Input>

				<Submit text="submit"></Submit>

				<p aria-live="polite" className={`sr-only ${state?.message !== '' ? styles.active : ''}`}>
					{ state?.message }
				</p>
			</form>
		</main>
  	);
}