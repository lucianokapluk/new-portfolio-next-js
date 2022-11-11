
'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ItemNav.module.css';
export default function ItemNav({ icon, label, route }) {
    return (
        <Link href={route} className={styles.a} >
            <motion.div key={label} whileTap={{ scale: 0.8 }} >
                <li className={label == 'CONTACT' ? styles.item_no_border : styles.item} >
                    <span className={styles.item_icon}> <i className={icon}></i></span>
                    <span>{label}</span>
                </li>
            </motion.div>
        </Link>

    );

}
