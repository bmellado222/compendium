import styles from './Card.module.css'

export interface CardProps {
    imageSrc: string
    imageAlt?: string
    title: string
    subtitle?: string
    description: string
    tags?: string[]
    linkHref: string
    linkLabel?: string
    className?: string
}

export default function Card({
                                 imageSrc,
                                 imageAlt = '',
                                 title,
                                 subtitle,
                                 description,
                                 tags = [],
                                 linkHref,
                                 linkLabel = 'Learn more',
                                 className = '',
                             }: CardProps) {
    return (
        <article className={`${styles.card} ${className}`.trim()}>
            <header className={styles.card__header}>
                <img className={styles.card__image} src={imageSrc} alt={imageAlt} />
                <div className={styles.card__intro}>
                    <h3 className={styles.card__title}>{title}</h3>
                    {subtitle && <p className={styles.card__subtitle}>{subtitle}</p>}
                    <p className={styles.card__description}>{description}</p>
                </div>
            </header>

            <footer className={styles.card__footer}>

                <ul className={styles.card__tags}>
                    Stack:
                    {tags.map((tag) => (
                        <li key={tag} className={styles.card__tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <a
                    className={styles.card__button}
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {linkLabel}
                </a>
            </footer>
        </article>
    )
}