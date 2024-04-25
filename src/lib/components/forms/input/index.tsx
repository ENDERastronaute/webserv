
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from 'react';
import styles from './index.module.scss';

interface InputProps {
    type: HTMLInputTypeAttribute;
    name: string;
    id: string;
    placeholder: string;
    required?: boolean;
    autocomplete?: HTMLInputAutoCompleteAttribute;
}

export default function Input({ type, name, id, placeholder, required=false, autocomplete='on' }: InputProps) {
    return (
        <fieldset className={styles.fieldset}>
            <input type={type} name={name} id={id} placeholder={placeholder} required={required} autoComplete={autocomplete}/>
            <label htmlFor={id}>{placeholder}</label>
        </fieldset>
    )
}