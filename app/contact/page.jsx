
'use client'
import { motion } from 'framer-motion';
export default function ContactPage() {

    return (

        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: -100 }}


        >
            <h1>ContactPage</h1>

        </motion.div>





    )
}
