
import styles from './ItemNav.module.css';

export default function ItemNav({ icon, label }) {
    return (
        <li className={styles.item}>
            <span> <i className={icon}></i></span>
            <span>{label}</span>
        </li>
    );
}
