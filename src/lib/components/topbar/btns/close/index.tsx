
import styles from './index.module.scss';
import CloseIcon from '@mui/icons-material/Close';

interface CloseBtnProps {
    onClick: () => void;
}

export default function CloseBtn({ onClick }: CloseBtnProps) {
    return (
        <button className={styles.btn} onClick={onClick}><CloseIcon className={styles.icon}></CloseIcon></button>
    )
}