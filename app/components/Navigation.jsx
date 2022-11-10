import Header from './header/Header'
import styles from './Navigation.module.css'
export function CVBody() {
    return (
        <>
            <div className={styles.container}>



                <Header />
                <div className={styles.profile_card + ' ' + styles.blur}>
                    <div className={styles.slide}>

                    </div>
                    <div className={styles.body_card_profile}>
                        <span> asdas bdajhsb asds aasd dasd sad sa  djashb ldashb djsahb dljashb dalsjh basjhb d</span>
                    </div>
                </div>
            </div>

        </>
    )
}