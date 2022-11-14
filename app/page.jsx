import styles from './About.module.css';
import Container from './components/containers/Container';

export default function HomePage() {

    return (



        <Container title={"About"}>
            <div >
                <p className={styles.paragraph}>{" I'm from Argentina, I discovered de programing when I was 16 years old and a loved it! In all these years I learned many languages ​​and frameworks like Javascript, React js, React Native, Php, Laravel and more...But now I'm specializing in Flutter"}</p>
            </div>

        </Container>







    )
}
