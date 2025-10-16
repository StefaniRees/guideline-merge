import React from 'react';
import Link from '@docusaurus/Link';
import styles from './introModern.module.css';

type Card = {
  title: string;
  description: string;
  to: string;
  emoji?: string;       // você pode trocar por SVG depois
};

export default function CardGrid({cards}: {cards: Card[]}) {
  return (
    <div className={styles.grid} role="list">
      {cards.map((c) => (
        <article key={c.to} className={styles.card} role="listitem">
          <Link to={c.to} className={styles.cardLink} aria-label={c.title}>
            {c.emoji && <div className={styles.emoji} aria-hidden="true">{c.emoji}</div>}
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.description}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
