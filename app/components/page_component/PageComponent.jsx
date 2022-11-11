'use client'
import { motion } from 'framer-motion';
import styles from './PageComponent.module.css';
export default function PageComponent({ children }) {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    return (
        <div className={styles.overflow}>


            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'easeInOut' }} // Set the transition to linear
                className="">

                <div className={styles.container}>
                    {children}
                </div>
            </motion.main>
        </div>


    )

}