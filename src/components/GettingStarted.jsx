import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GettingStarted() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const structure = [
    { label: isEN ? 'Phases' : 'Fases', desc: isEN ? '8 sequential operational phases: from planning to rollback.' : '8 fases operacionais sequenciais: do planejamento ao rollback.', color: '#BA7517', bg: '#FAEEDA', href: '/docs/phases', icon: (c) => (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 11h4l3-5 3 10 3-5h3" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
    { label: isEN ? 'Roles' : 'Papéis', desc: isEN ? 'Developer A, Developer B, and Mediator — explicit responsibilities.' : 'Developer A, Developer B e Mediador — responsabilidades explícitas.', color: '#7F77DD', bg: '#EEEDFE', href: '/docs/roles', icon: (c) => (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="8" cy="8" r="3" stroke={c} strokeWidth="1.5"/><circle cx="14" cy="8" r="3" stroke={c} strokeWidth="1.5"/><path d="M2 18c0-2.5 2-4 6-4M10 18c0-2.5 2-4 6-4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { label: isEN ? 'Activities' : 'Atividades', desc: isEN ? '8 executable activities with inputs, outputs, and quality gates.' : '8 atividades executáveis com entradas, saídas e quality gates.', color: '#639922', bg: '#EAF3DE', href: '/docs/activities', icon: (c) => (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke={c} strokeWidth="1.5"/><path d="M7 8h8M7 11h8M7 14h5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { label: isEN ? 'Artifacts' : 'Artefatos', desc: isEN ? '10 traceable artifacts connecting phases, decisions, and results.' : '10 artefatos rastreáveis que conectam fases, decisões e resultados.', color: '#993556', bg: '#FBEAF0', href: '/docs/artifacts', icon: (c) => (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="3" width="14" height="16" rx="2" stroke={c} strokeWidth="1.5"/><path d="M7 8h8M7 11h8M7 14h5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { label: 'Guidelines', desc: isEN ? '11 quality gates and process governance guidelines.' : '11 quality gates e diretrizes de governança do processo.', color: '#0F6E56', bg: '#E1F5EE', href: '/docs/guidelines', icon: (c) => (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke={c} strokeWidth="1.5"/><path d="M11 7v5l3 3" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>) },
    { label: 'Templates', desc: isEN ? 'Operational checklists per phase to standardize practices.' : 'Checklists operacionais por fase para padronizar práticas.', color: '#378ADD', bg: '#E6F1FB', href: '/docs/templates', icon: (c) => (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke={c} strokeWidth="1.5"/><path d="M7 8l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 13l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  ];

  const steps = [
    { n: '1', color: '#639922', bg: '#EAF3DE', title: isEN ? 'Understand the principles' : 'Entenda os princípios', desc: isEN ? 'Read Core Principles and understand the O1–O4 objectives of the guideline.' : 'Leia Core Principles e compreenda os objetivos O1–O4 do guideline.', href: '/docs/welcome/core-principles' },
    { n: '2', color: '#378ADD', bg: '#E6F1FB', title: isEN ? 'Learn the roles' : 'Conheça os papéis', desc: isEN ? 'Identify who will be Developer A, Developer B, and Mediator in your context.' : 'Identifique quem será Developer A, Developer B e Mediador no seu contexto.', href: '/docs/roles' },
    { n: '3', color: '#BA7517', bg: '#FAEEDA', title: isEN ? 'Walk through the phases' : 'Percorra as fases', desc: isEN ? 'Explore the 8 phases and their quality gates to understand the complete flow.' : 'Explore as 8 fases e seus quality gates para entender o fluxo completo.', href: '/docs/phases' },
    { n: '4', color: '#7F77DD', bg: '#EEEDFE', title: isEN ? 'Adopt the templates' : 'Adote os templates', desc: isEN ? 'Use the per-phase checklists as a practical entry point.' : 'Use os checklists por fase como ponto de entrada prático.', href: '/docs/templates' },
  ];

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{ background: '#f0faf6', borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px' }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          {isEN ? <><strong>MergeTrace</strong> is an operational guideline for software merge, structured into phases, roles, activities, artifacts, and quality gates. It was built from a systematic literature mapping (31 studies), a survey with 36 developers, and interviews with eight specialists. This guideline is applicable across many tools and extensible to numerous branching strategies.</> : <><strong>MergeTrace</strong> é um guideline operacional para merge de software, estruturado em fases, papéis, atividades, artefatos e quality gates. Ele foi construído a partir de um mapeamento sistemático da literatura (31 estudos), um survey com 36 desenvolvedores e algumas entrevistas com oito especialistas. Esse guideline é aplicável em muitas ferramentas e extensível a inúmeras estratégias de branching.</>}
        </p>
      </div>

      {/* Structure */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'Guideline structure' : 'Estrutura do guideline'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '36px' }}>
        {structure.map(s => (
          <Link key={s.href} to={s.href} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', background: '#fff', padding: '14px 16px', cursor: 'pointer', transition: 'box-shadow 0.15s, border-color 0.15s', display: 'flex', alignItems: 'flex-start', gap: '12px' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = s.color; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e5e7eb'; }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.icon(s.color)}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Steps */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'How to get started' : 'Como começar'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '36px' }}>
        {steps.map(s => (
          <Link key={s.n} to={s.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr auto', alignItems: 'center', gap: '14px', border: '1px solid #e5e7eb', borderRadius: '10px', background: '#fff', padding: '12px 16px', transition: 'box-shadow 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.07)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: s.bg, border: `1.5px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: s.color, flexShrink: 0 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '2px' }}>{s.title}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
              <div style={{ fontSize: '14px', color: '#d1d5db' }}>→</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Adoption note */}
      <div style={{ background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#0F6E56" strokeWidth="1.5"/><path d="M8 5v4M8 11v.5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: 0 }}>
          {isEN ? <><strong>Incremental adoption:</strong> start by applying MergeTrace to a single repository or squad. The guideline was designed for gradual adoption — it is not necessary to implement all phases and artifacts at once.</> : <><strong>Adoção incremental:</strong> comece aplicando o MergeTrace em um único repositório ou squad. O guideline foi projetado para adoção gradual — não é necessário implementar todas as fases e artefatos de uma vez.</>}
        </p>
      </div>
    </div>
  );
}
