import styles from './Home.module.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//import Banner from "../../components/Banner/Banner";
//import Compendium from "../../components/Compendium/Compendium";
//import Card from "../../components/Card/Card";

export default function Home() {
    return (
        <>
            <section className={styles.siteHeader}>
                <Header/>
            </section>
            <main className={styles.siteBody}>

            </main>
            <section className={styles.siteFooter}>
                <Footer/>
            </section>
        </>
    )
}

