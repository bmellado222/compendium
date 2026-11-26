import styles from "../Banner/Banner.module.css";

export default function Banner() {
    return (
        <section className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>Bryan Mellado</h1>
            <h2 className={styles.bannerOccupation}>SOFTWARE ENGINEER | UNDERGRADUATE</h2>
            <p className={styles.bannerAboutMe}>I'm an aspiring software developer and web developer with a Bachelor of Applied Science in Computer Technology and Software Development from Valencia College.
                I have experience working with a variety of programming languages and technologies, including Java 17, Python 3.14, C#, JavaScript, React, and Spring Boot. I'm particularly interested in building practical software solutions, developing user-friendly applications, and exploring new technologies. </p>
            <a href="#projects" className={styles.btn}>Explore Projects</a>

        </section>
    )
}