

import Title from '../title/Title';
import styles from './Container.module.css';
export default function Container({ children, title, id }) {
    return (

        <div className={styles.container} id={id}>
            <Title title={title} />
            <div className={styles.body_container}>
                {children}
            </div>
        </div>
    )
}