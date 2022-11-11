

import ItemNav from './components/ItemNav';
import styles from './Header.module.css';
const headerItems = [
    { "icon": "fa-solid  fa-user ", "label": "ABOUT", "route": "/about" },
    { "icon": "fa-solid fa-list fa-lg", "label": "EXPERIENCE", "route": "/" },
    { "icon": "fa-solid fa-laptop-code fa-lg", "label": "SKILLS", "route": "" },
    { "icon": "fa-solid fa-briefcase fa-lg", "label": "WORKS", "route": "" },
    { "icon": "fa-solid fa-address-book fa-lg", "label": "CONTACT", "route": "" },

]

export default function Header() {

    return (

        <ul className={styles.header}>
            {headerItems.map(({ icon, label, route }) =>

                <ItemNav key={label} icon={icon} label={label} route={route} />

            )}
        </ul>

    );
}
