import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.siteContent}>
            <h1 className={styles.title}>
                <a href="" className={styles.myName}>bmellado</a>
            </h1>
            <nav className={styles.goTo}>
                <a href="https://github.com/bmellado222" target="_blank" className={styles.btn}>Github</a>
                <a href="#contact-info" className={styles.btn}>Contact</a>
            </nav>
        </header>
    )
}