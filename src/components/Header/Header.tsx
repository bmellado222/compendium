import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <h1 className={styles.title}>
                <a href="" className={styles.myName}>bmellado</a>
            </h1>
            <nav className={styles.goTo}>
                <a href="#github" className={styles.btn}>Github</a>
                <a href="#contact-info" className={styles.btn}>Contact</a>
            </nav>
        </header>
    )
}