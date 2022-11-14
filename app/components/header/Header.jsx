

import ItemNav from './components/ItemNav';
import styles from './Header.module.css';
const headerItems = [
    { "icon": "fa-solid  fa-user ", "label": "ABOUT", "route": "/" },
    { "icon": "fa-solid fa-list fa-lg", "label": "EXPERIENCE", "route": "/experience" },
    { "icon": "fa-solid fa-laptop-code fa-lg", "label": "SKILLS", "route": "/skills" },
    { "icon": "fa-solid fa-briefcase fa-lg", "label": "WORKS", "route": "/works" },
    { "icon": "fa-solid fa-address-book fa-lg", "label": "CONTACT", "route": "/contact" },

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
