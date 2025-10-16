import React, {useEffect, useMemo, useState} from 'react';

type FlatItem = { id: string; label: string; hint?: string };
type Section = { id: string; title: string; icon?: string; items: FlatItem[] };

type ChecklistProps =
  | {
      title?: string;
      storageKey: string;
      items: FlatItem[];
      sections?: never;
      compact?: boolean;
    }
  | {
      title?: string;
      storageKey: string;
      items?: never;
      sections: Section[];
      compact?: boolean;
    };

const isBrowser = () => typeof window !== 'undefined';

export default function Checklist(props: ChecklistProps) {
  const {title, storageKey, compact} = props;

  // normaliza para uma lista plana de itens + metadados para render
  const allItems: FlatItem[] = useMemo(() => {
    if ('items' in props && props.items) return props.items;
    if ('sections' in props && props.sections)
      return props.sections.flatMap(s => s.items);
    return [];
  }, [props]);

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // carrega estado
  useEffect(() => {
    if (!isBrowser()) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  // persiste estado
  useEffect(() => {
    if (!isBrowser()) return;
    localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked, storageKey]);

  const total = allItems.length;
  const done = useMemo(
    () => allItems.reduce((acc, it) => acc + (checked[it.id] ? 1 : 0), 0),
    [allItems, checked]
  );
  const progress = total ? Math.round((done / total) * 100) : 0;

  const toggle = (id: string) =>
    setChecked(prev => ({...prev, [id]: !prev[id]}));

  const reset = () => setChecked({});

  const Container = ({children}: {children: React.ReactNode}) => (
    <div
      style={{
        border: '1px solid var(--ifm-toc-border-color)',
        borderRadius: 12,
        padding: compact ? '0.75rem' : '1rem',
        margin: '1rem 0',
        background: 'var(--ifm-background-surface-color)',
      }}
    >
      {children}
    </div>
  );

  const Progress = () => (
    <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <div
        style={{
          flex: 1,
          height: 10,
          background: 'var(--ifm-color-emphasis-200)',
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--ifm-color-primary)',
            transition: 'width .2s ease',
          }}
        />
      </div>
      <span style={{whiteSpace: 'nowrap', fontWeight: 600}}>
        {done}/{total} ({progress}%)
      </span>
      <button className="button button--sm button--secondary" onClick={reset}>
        Reset
      </button>
    </div>
  );

  const renderItem = (it: FlatItem) => (
    <li
      key={it.id}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: compact ? '6px 0' : '8px 0',
        borderTop: '1px solid var(--ifm-toc-border-color)',
      }}
    >
      <input
        id={it.id}
        type="checkbox"
        checked={!!checked[it.id]}
        onChange={() => toggle(it.id)}
        style={{marginTop: 4}}
      />
      <label htmlFor={it.id} style={{cursor: 'pointer'}}>
        <div style={{fontWeight: 600}}>{it.label}</div>
        {it.hint && (
          <div style={{opacity: 0.8, fontSize: '0.9rem'}}>{it.hint}</div>
        )}
      </label>
    </li>
  );

  // render com ou sem seções
  return (
    <Container>
      {title && <h3 style={{marginTop: 0}}>{title}</h3>}
      <Progress />

      {'sections' in props && props.sections ? (
        <div style={{marginTop: 12}}>
          {props.sections.map(section => (
            <div key={section.id} style={{marginTop: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                {section.icon ? <span>{section.icon}</span> : null}
                <h4 style={{margin: '0.2rem 0'}}>{section.title}</h4>
              </div>
              <ul style={{listStyle: 'none', padding: 0, marginTop: 6}}>
                {section.items.map(renderItem)}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul style={{listStyle: 'none', padding: 0, marginTop: 16}}>
          {allItems.map(renderItem)}
        </ul>
      )}
    </Container>
  );
}
