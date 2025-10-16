import React, {PropsWithChildren, useEffect, useId, useState} from 'react';
import clsx from 'clsx';
import {useExpandableCtx} from './ExpandableProvider';
import styles from './intro.module.css';

type Props = { title: string; defaultOpen?: boolean };

export default function ExpandableSection({
  title,
  defaultOpen = false,
  children,
}: PropsWithChildren<Props>) {
  const {register} = useExpandableCtx();
  const [open, setOpen] = useState(defaultOpen);

  // ids de acessibilidade
  const baseId = useId();
  const btnId = `exp-btn-${baseId}`;
  const panelId = `exp-panel-${baseId}`;

  useEffect(() => {
    // registra o setter no provider (para Expand All/Collapse All)
    register(setOpen);
  }, [register]);

  return (
    <section className={clsx(styles.expandable, open && styles.open)}>
      <h3 className={styles.visuallyHidden}>{title}</h3>
      <button
        id={btnId}
        type="button"
        className={styles.expandHeader}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className={styles.chevron} aria-hidden="true">▶</span>
        <span>{title}</span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={clsx(styles.expandBody, !open && styles.hidden)}
      >
        {children}
      </div>
    </section>
  );
}
