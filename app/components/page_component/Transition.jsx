'use client'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Transition.module.css';
export default function Transition({ children }) {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        /*       exit: { opacity: 0, x: 0, y: -100 }, */
        exit: {
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        },
    }
    return (
        <div className={styles.overflow}>

            <AnimatePresence mode='wait'>
                {<motion.div
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    /*       transition={{
                              duration: 0.8,
                              delay: 0.5,
                              ease: [0, 0.71, 0.2, 1.01]
                          }} */
                    className="">

                    <div className={styles.container}>
                        {children}
                    </div>
                </motion.div>}
            </AnimatePresence>
        </div>


    )

}