import React from 'react';
import Link from '@docusaurus/Link';

const quickLinks = [
  {
    title: 'Getting Started',
    description: 'Passo a passo para habilitar o processo no seu repositório.',
    href: '/mergetrace/docs/welcome/getting-started',
    color: '#639922',
    bg: '#EAF3DE',
    icon: (color) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
        <polygon points="11,9 20,14 11,19" fill={color}/>
      </svg>
    ),
  },
  {
    title: 'Core Principles',
    description: 'Princípios que direcionam decisões e qualidade.',
    href: '/mergetrace/docs/welcome/core-principles',
    color: '#378ADD',
    bg: '#E6F1FB',
    icon: (color) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1.5" y="1.5" width="25" height="25" rx="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
        <path d="M8 14h12M8 10h12M8 18h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Fases',
    description: 'As 8 fases operacionais do fluxo de merge.',
    href: '/mergetrace/docs/phases',
    color: '#BA7517',
    bg: '#FAEEDA',
    icon: (color) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1.5" y="1.5" width="25" height="25" rx="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
        <path d="M6 14h4l3-5 3 10 3-5h3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Papéis',
    description: 'Developer A, Developer B e Mediador — responsabilidades e handoffs.',
    href: '/mergetrace/docs/roles',
    color: '#7F77DD',
    bg: '#EEEDFE',
    icon: (color) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1.5" y="1.5" width="25" height="25" rx="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
        <circle cx="10" cy="11" r="3" stroke={color} strokeWidth="1.5"/>
        <circle cx="18" cy="11" r="3" stroke={color} strokeWidth="1.5"/>
        <path d="M4 21c0-3 2.5-5 6-5M14 21c0-3 2.5-5 6-5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Artefatos',
    description: 'Artefatos rastreáveis que conectam fases, atividades e decisões.',
    href: '/mergetrace/docs/artifacts',
    color: '#993556',
    bg: '#FBEAF0',
    icon: (color) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1.5" y="1.5" width="25" height="25" rx="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
        <rect x="7" y="8" width="14" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
        <path d="M10 12h8M10 15h5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Guidelines',
    description: 'Quality gates e diretrizes que governam a progressão do merge.',
    href: '/mergetrace/docs/guidelines',
    color: '#0F6E56',
    bg: '#E1F5EE',
    icon: (color) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1.5" y="1.5" width="25" height="25" rx="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
        <path d="M14 7v7l4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="7" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const principles = [
  { label: 'Micro-incrementos', desc: 'PRs pequenos com contexto claro reduzem conflitos e aceleram revisões.' },
  { label: 'Quality Gates', desc: 'Critérios objetivos de CI, cobertura e revisão antes de cada transição.' },
  { label: 'Rastreabilidade', desc: 'Issues ⇄ PRs ⇄ builds ⇄ releases conectados e auditáveis.' },
];

export default function IntroOverview() {
  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Descrição principal */}
      <div style={{
        background: '#f0faf6', borderLeft: '3px solid #1D9E75',
        borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          O <strong>MergeTrace</strong> organiza o fluxo de merge em 8 fases operacionais, distribuídas
          entre três papéis colaborativos: Developer A, Developer B e Mediator. Cada fase é projetada para
          ser controlada por Quality Gates que verificam pré-condições antes do avanço, e os 
          artefatos gerados garantem rastreabilidade explícita das decisões — do
          planejamento ao pós-merge.
        </p>
      </div>

      {/* Quick links com ícones */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        Explore o guideline
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginBottom: '36px',
      }}>
        {quickLinks.map(link => (
          <Link key={link.href} to={link.href} style={{ textDecoration: 'none' }}>
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px', background: '#fff',
                padding: '18px 16px', cursor: 'pointer',
                transition: 'box-shadow 0.15s, border-color 0.15s',
                display: 'flex', flexDirection: 'column', gap: '10px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = link.color;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              {/* Ícone */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: link.bg, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                {link.icon(link.color)}
              </div>

              {/* Texto */}
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>
                  {link.title}
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>
                  {link.description}
                </div>
              </div>

              <div style={{ fontSize: '11px', color: link.color, fontWeight: 600, marginTop: 'auto' }}>
                Ver mais →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Considerações-chave */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        Considerações-chave
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {principles.map((p, i) => (
          <div key={i} style={{
            border: '1px solid #e5e7eb', borderRadius: '10px',
            padding: '14px 16px', background: '#fafafa',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '6px' }}>
              {p.label}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6 }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}