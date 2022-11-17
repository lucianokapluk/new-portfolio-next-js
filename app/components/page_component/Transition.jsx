import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactPage from "../../contact/contact";
import ExperiencePage from "../../experience/experience";
import HomePage from "../../page";
import SkillsPage from "../../skills/SkillsPage";
import WorksPage from "../../works/works";
import { useTabIndexContext } from "../context";
import styles from "./Transition.module.css";
export const allIngredients = [
    { page: <HomePage />, icon: "🧀", label: 0 },
    { page: <ExperiencePage />, icon: "🍅", label: 1 },
    { page: <SkillsPage />, icon: "🍅", label: 2 },
    { page: <WorksPage />, icon: "🧀", label: 3 },
    { page: <ContactPage />, icon: "🧀", label: 4 },

];

const [home, experience, skills, works, contact] = allIngredients;
export const tabs = [home, experience, skills, works, contact];
export default function Transitions({ children, keys }) {
    const [tabIndex, settabIndex] = useTabIndexContext();
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    useEffect(() => { setSelectedTab(tabs.find((tab) => tab.label === tabIndex)) }, [tabIndex])

    return (

        <>

            <div className={styles.overflow} >
                <AnimatePresence mode="wait">

                    <motion.div
                        key={tabIndex}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, onBlur: () => { 0 } }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >

                        <div className={styles.container} >

                            {selectedTab.page}


                        </div>

                    </motion.div>

                </AnimatePresence>
            </div>
        </>

    );
}
