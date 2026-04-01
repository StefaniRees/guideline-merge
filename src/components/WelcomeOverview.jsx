import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const stats = [
  { n: '8', label: 'Fases operacionais', href: '/guideline-merge/docs/phases', color: '#1D9E75', bg: '#E1F5EE' },
  { n: '3', label: 'Papéis colaborativos', href: '/guideline-merge/docs/roles', color: '#7F77DD', bg: '#EEEDFE' },
  { n: '11', label: 'Quality Gates', href: '/guideline-merge/docs/guidelines', color: '#BA7517', bg: '#FAEEDA' },
  { n: '10', label: 'Artefatos rastreáveis', href: '/guideline-merge/docs/artifacts', color: '#993556', bg: '#FBEAF0' },
];

const welcomePages = [
  {
    title: 'Introdução ao MergeTrace',
    desc: 'Visão geral do guideline, sua origem empírica e os atalhos visuais para começar.',
    href: '/guideline-merge/docs/welcome/introduction',
    color: '#1D9E75', bg: '#E1F5EE', border: '#9FE1CB',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M12 8v5l3 2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Getting Started',
    desc: 'Estrutura do guideline e quatro passos para começar a aplicar o MergeTrace.',
    href: '/guideline-merge/docs/welcome/getting-started',
    color: '#639922', bg: '#EAF3DE', border: '#97C459',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <polygon points="10,8 17,12 10,16" fill={c}/>
      </svg>
    ),
  },
  {
    title: 'Core Principles',
    desc: 'Quatro princípios fundamentais que orientam decisões, papéis e qualidade no fluxo de merge.',
    href: '/guideline-merge/docs/welcome/core-principles',
    color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M8 12h8M8 8h8M8 16h5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Iteration Lifecycle',
    desc: 'Ciclo de vida da iteração com roteiro de 6 etapas, quality gates e métricas.',
    href: '/guideline-merge/docs/welcome/iteration-lifecycle',
    color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 16l4-5 4 3 4-6 4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="4" stroke={c} strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Micro-Increments',
    desc: 'A menor unidade de valor rastreável — PRs pequenos com contexto e quality gates.',
    href: '/guideline-merge/docs/welcome/micro-increments',
    color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Project Lifecycle',
    desc: '4 fases do ciclo de vida do projeto (Inception → Transition) e sua relação com as fases operacionais.',
    href: '/guideline-merge/docs/welcome/project-lifecycle',
    color: '#993556', bg: '#FBEAF0', border: '#ED93B1',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l2.5 6H21l-5.5 4 2 6.5L12 16l-5.5 3.5 2-6.5L3 9h6.5L12 3z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={`${c}15`}/>
      </svg>
    ),
  },
  {
    title: 'Roles',
    desc: 'Developer A, Developer B e Mediador — responsabilidades, artefatos e relação com o OpenUP.',
    href: '/guideline-merge/docs/welcome/roles',
    color: '#0F6E56', bg: '#E1F5EE', border: '#9FE1CB',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3.5" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <circle cx="16" cy="8" r="3.5" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M3 20c0-3 2.5-5 6-5M11 20c0-3 2.5-5 6-5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Disciplines',
    desc: '5 disciplinas que organizam atividades e papéis por foco técnico ou colaborativo.',
    href: '/guideline-merge/docs/welcome/disciplines',
    color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <rect x="8" y="13" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
      </svg>
    ),
  },
  {
    title: 'Work Products',
    desc: '10 artefatos rastreáveis que conectam fases, papéis, atividades e decisões do fluxo.',
    href: '/guideline-merge/docs/welcome/work-products',
    color: '#534AB7', bg: '#EEEDFE', border: '#AFA9EC',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="3" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M8 9h8M8 13h8M8 17h5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const foundations = [
  { label: '31 estudos', desc: 'Mapeamento sistemático da literatura', color: '#378ADD', bg: '#E6F1FB' },
  { label: '36 respondentes', desc: 'Survey com desenvolvedores', color: '#639922', bg: '#EAF3DE' },
  { label: '8 especialistas', desc: 'Entrevistas qualitativas (P1–P8)', color: '#7F77DD', bg: '#EEEDFE' },
  { label: 'OpenUP', desc: 'Base metodológica adaptada', color: '#BA7517', bg: '#FAEEDA' },
];

export default function WelcomeOverview() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #f0faf6 0%, #e8f4fd 100%)',
        border: '1px solid #9FE1CB',
        borderRadius: '16px', padding: '28px 32px', marginBottom: '36px',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#E1F5EE', border: '1px solid #9FE1CB',
              borderRadius: '20px', padding: '3px 12px', marginBottom: '14px',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#0F6E56', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Guidelines para Merge de Software
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111', margin: '0 0 12px', lineHeight: 1.3 }}>
              O que é o MergeTrace?
            </h2>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>
              O <strong>MergeTrace</strong> é um guideline operacional para merge de software,
              construído a partir de evidências empíricas. Estrutura{' '}
              <Link to="/guideline-merge/docs/phases" style={{ color: '#1D9E75', fontWeight: 600 }}>fases</Link>,{' '}
              <Link to="/guideline-merge/docs/roles" style={{ color: '#1D9E75', fontWeight: 600 }}>papéis</Link>,{' '}
              <Link to="/guideline-merge/docs/activities" style={{ color: '#1D9E75', fontWeight: 600 }}>atividades</Link> e{' '}
              <Link to="/guideline-merge/docs/artifacts" style={{ color: '#1D9E75', fontWeight: 600 }}>artefatos</Link> para
              reduzir riscos, padronizar decisões e tornar a rastreabilidade explícita e extensível a diferentes estratégias de merge.
            </p>
            <Link to="/guideline-merge/docs/welcome/getting-started" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#1D9E75', color: '#fff', textDecoration: 'none',
              fontSize: '13px', fontWeight: 700, padding: '8px 18px',
              borderRadius: '8px', transition: 'opacity 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Começar agora →
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', minWidth: '220px' }}>
            {stats.map((s, i) => (
              <Link key={i} to={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: s.bg, borderRadius: '10px', padding: '12px 14px',
                  textAlign: 'center', transition: 'opacity 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <div style={{ fontSize: '26px', fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '11px', color: s.color, fontWeight: 600, marginTop: '4px', lineHeight: 1.3 }}>{s.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Base empírica */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
        Fundamentado em evidências empíricas
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '36px' }}>
        {foundations.map((f, i) => (
          <div key={i} style={{
            background: f.bg, borderRadius: '10px', padding: '12px 14px',
          }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: f.color, marginBottom: '3px' }}>{f.label}</div>
            <div style={{ fontSize: '11px', color: f.color, lineHeight: 1.4, opacity: 0.85 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      {/* Navegação das páginas do Welcome */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        Explore a seção Welcome
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px', marginBottom: '36px',
      }}>
        {welcomePages.map((page, i) => (
          <Link key={i} to={page.href} style={{ textDecoration: 'none' }}>
            <div
              style={{
                border: `1px solid ${hoveredCard === i ? page.color : '#e5e7eb'}`,
                borderTop: `3px solid ${page.color}`,
                borderRadius: '12px', background: '#fff',
                padding: '16px', cursor: 'pointer',
                transition: 'box-shadow 0.15s, border-color 0.15s',
                display: 'flex', flexDirection: 'column', gap: '10px',
                height: '100%',
              }}
              onMouseEnter={e => {
                setHoveredCard(i);
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.09)';
              }}
              onMouseLeave={e => {
                setHoveredCard(null);
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: page.bg, border: `1px solid ${page.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {page.icon(page.color)}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '5px' }}>{page.title}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6 }}>{page.desc}</div>
              </div>
              <div style={{ fontSize: '12px', color: page.color, fontWeight: 600, marginTop: 'auto' }}>
                Ver página →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Nota final */}
      <div style={{
        background: '#fafafa', border: '1px solid #e5e7eb',
        borderRadius: '10px', padding: '16px 18px',
        display: 'flex', gap: '14px', alignItems: 'flex-start',
      }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '8px',
          background: '#E1F5EE', border: '1px solid #9FE1CB',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2l9 5v5c0 4.5-4 8-9 9-5-1-9-4.5-9-9V7L9 2z" stroke="#0F6E56" strokeWidth="1.5" fill="#E1F5EE"/>
            <path d="M6 9l2.5 2.5L12 7" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          O MergeTrace foi desenvolvido como artefato de pesquisa de mestrado na{' '}
          <strong>UNISINOS</strong> (Pós-Graduação em Computação Aplicada). O guideline está disponível publicamente em{' '}
          <a href="https://github.com/StefaniRees/mergetrace" target="_blank" rel="noopener noreferrer"
            style={{ color: '#1D9E75', fontWeight: 600 }}>
            github.com/StefaniRees/mergetrace
          </a>{' '}
          e pode ser adotado de forma incremental em qualquer contexto organizacional.
        </p>
      </div>

    </div>
  );
}