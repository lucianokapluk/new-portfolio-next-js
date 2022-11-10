
import ItemNav from './components/ItemNav';
import styles from './Header.module.css';
const headerItems = [
    { "icon": "fa-solid fa-user fa-lg", "label": "About" },
    { "icon": "fa-solid fa-user fa-lg", "label": "Resume" },
    { "icon": "fa-solid fa-user fa-lg", "label": "Works" },
    { "icon": "fa-solid fa-user fa-lg", "label": "Blog" },
    { "icon": "fa-solid fa-user fa-lg", "label": "Contact" },
]
export default function Header() {

    return (
        <ul className={styles.header}>
            {headerItems.map(({ icon, label }) =>
                <ItemNav key={label} icon={icon} label={label} />
            )}
        </ul>
    );
}
