
'use client'
import { motion } from 'framer-motion';
import { useTabIndexContext } from '../../context';
import styles from './ItemNav.module.css';
export default function ItemNav({ icon, label, route }) {

    const [tabIndex, settabIndex] = useTabIndexContext();
    return (

        <div key={route} onClick={() => settabIndex(route)} className={styles.a} >
            <motion.div key={route} whileTap={{ scale: 0.8 }} >
                <li className={label == 'CONTACT' ? styles.item_no_border : styles.item} >
                    <span className={styles.item_icon}> <i className={icon}></i></span>
                    <span>{label}</span>
                </li>
            </motion.div>
        </div>

    );

}
