'use client'

import { useFormStatus } from "react-dom";
import styles from './index.module.scss';

interface SubmitProps {
    text: string;
}

export default function Submit({ text }: SubmitProps) {
    const { pending } = useFormStatus();

    return (
        <button className={styles.btn} type="submit" disabled={pending}>{ text }</button>
    )
}