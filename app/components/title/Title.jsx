import styles from './Title.module.css';
export default function Title({ title }) {

    return (
        <div className={styles.title}>
            <h1 className={styles.margin_zero}>{title}</h1>
        </div>
    )
}