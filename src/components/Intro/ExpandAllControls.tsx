import React from 'react';
import {useExpandableCtx} from './ExpandableProvider';
import styles from './intro.module.css';

export default function ExpandAllControls() {
  const {toggleAll} = useExpandableCtx();
  return (
    <div className={styles.controls} role="group" aria-label="Expand controls">
      <button type="button" className={styles.pill} onClick={() => toggleAll(true)}>
        Expand all
      </button>
      <button type="button" className={styles.pill} onClick={() => toggleAll(false)}>
        Collapse all
      </button>
    </div>
  );
}
