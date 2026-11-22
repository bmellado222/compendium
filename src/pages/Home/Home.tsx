import styles from './Home.module.css'
import Header from "../../components/Header/Header";

export default function Home() {
    return (
        <>
            <section>
                <Header/>
            </section>
            <div className={styles.foo}>

            </div>
        </>
    )
}

