import styles from './Home.module.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
//import Compendium from "../../components/Compendium/Compendium";
import type { MouseEvent } from "react";
import projectInformation from '../../assets/projectInformation.json';

async function copyText(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
    }
}

const images = import.meta.glob<string>('/src/assets/*', {
    eager: true,
    query: '?url',
    import: 'default',
})

const resolveImage = (path: string) => images[`/${path}`] ?? ''

export default function Home() {
    const handleCopy = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const text = e.currentTarget.dataset.copy;
        if (text) void copyText(text);
    };

    return (
        <>
            <section className={styles.siteHeader}>
                <Header/>
            </section>
            <main className={styles.siteBody}>
                <section className={styles.spacerTop}/>
                <Banner/>
                <section className={styles.projectsHeadline}>
                    <h1 className={styles.projectsTitle}>Projects</h1>
                    <h1 className={styles.projectsTotal}>{projectInformation.length} curated records</h1>
                </section>
                <section className={styles.projectsBody}>
                    {projectInformation.map((p) => (
                        <Card
                            key={p.title}
                            imageSrc={resolveImage(p.image)}
                            imageAlt={p.title}
                            title={p.title}
                            subtitle={p.subtitle}
                            description={p.description}
                            tags={p.stack}
                            linkHref={p.link}
                        />
                    ))}
                </section>
                <section className={styles.contact}>
                    <h1 className={styles.contactTitle}>CONTACT</h1>
                    <nav className={styles.contactInfo}>
                        <a
                            href="#"
                            className={styles.btn}
                            data-copy="bmellado222@gmail.com"
                            onClick={handleCopy}
                        >
                            bmellado222 [at] gmail (dot) com
                        </a>
                        <a href="https://github.com/bmellado222" target="_blank" className={styles.btn}>Github: @bmellado222</a>
                        <a href="" className={styles.btn}>Back to Top</a>
                    </nav>
                </section>
                <section className={styles.spacerBottom}/>
            </main>
            <section className={styles.siteFooter}>
            <Footer/>
            </section>
        </>
    )
}

