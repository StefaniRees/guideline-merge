import React from 'react';
import Link from '@docusaurus/Link';
import styles from './introModern.module.css';

type Item = {label: string; to: string};

export default function RelationshipList({items}: {items: Item[]}) {
  return (
    <div className={styles.relBox}>
      <div className={styles.relHeader}>Contents</div>
      <ul className={styles.relList}>
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to}>{it.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
