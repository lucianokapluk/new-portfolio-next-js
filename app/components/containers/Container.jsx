

import Title from '../title/title';
import styles from './Container.module.css';
export default function Container({ children, title }) {
    return (

        <div className={styles.container}>
            <Title title={title} />
            <div className={styles.body_container}>
                {children}
            </div>
        </div>
    )
}