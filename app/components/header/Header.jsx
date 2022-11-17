

import ItemNav from './components/ItemNav';
import styles from './Header.module.css';
const headerItems = [
    { "icon": "fa-solid  fa-user ", "label": "ABOUT", "route": 0 },
    { "icon": "fa-solid fa-list fa-lg", "label": "EXPERIENCE", "route": 1 },
    { "icon": "fa-solid fa-laptop-code fa-lg", "label": "SKILLS", "route": 2 },
    { "icon": "fa-solid fa-briefcase fa-lg", "label": "WORKS", "route": 3 },
    { "icon": "fa-solid fa-address-book fa-lg", "label": "CONTACT", "route": 4 },

]

export default function Header() {

    return (

        <ul className={styles.header}>
            {headerItems.map(({ icon, label, route }) =>

                <ItemNav key={route} icon={icon} label={label} route={route} />

            )}
        </ul>

    );
}
