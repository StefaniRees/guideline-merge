import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const disciplines = [
  {
    n: '1', id: 'coding',
    title: 'Coding',
    color: '#639922', bg: '#EAF3DE', border: '#97C459',
    summary: 'Implementação de mudanças, criação de branches, commits e correções rápidas com foco em atomicidade e rastreabilidade.',
    activities: [
      { label: 'Criar Branch', href: '/mergetrace/docs/activities/criar-branch' },
      { label: 'Implementar Mudanças', href: '/mergetrace/docs/activities/implementar-mudancas' },
    ],
    artifacts: [
      { label: 'Branch de Atividade', href: '/mergetrace/docs/artifacts/branch-atividade' },
      { label: 'Commits Padronizados', href: '/mergetrace/docs/artifacts/commits-padronizados' },
    ],
    guidelines: [
      { label: 'Branch Naming Convention', href: '/mergetrace/docs/guidelines/branch-naming-convention' },
      { label: 'Commit Message Convention', href: '/mergetrace/docs/guidelines/commit-message' },
    ],
    roles: [
      { label: 'Developer A', href: '/mergetrace/docs/roles/developer-principal', color: '#639922', bg: '#EAF3DE', border: '#97C459' },
      { label: 'Developer B', href: '/mergetrace/docs/roles/developer-integrador', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB' },
    ],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 8l-4 3 4 3M15 8l4 3-4 3M13 5l-4 12" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '2', id: 'code-review',
    title: 'Code Review',
    color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB',
    summary: 'Revisão técnica e semântica das alterações com feedback colaborativo, identificação de riscos e aplicação de padrões definidos nas guidelines.',
    activities: [
      { label: 'Code Review', href: '/mergetrace/docs/activities/code-review' },
      { label: 'Validar em Homologação (QA)', href: '/mergetrace/docs/activities/qa-homologacao' },
    ],
    artifacts: [
      { label: 'Checklist de Revisão', href: '/mergetrace/docs/artifacts/checklist-revisao' },
      { label: 'Relatório de QA', href: '/mergetrace/docs/artifacts/relatorio-qa' },
      { label: 'Registro de Decisão', href: '/mergetrace/docs/artifacts/registro-decisao' },
    ],
    guidelines: [
      { label: 'Code Review Checklist', href: '/mergetrace/docs/guidelines/code-review-checklist' },
      { label: 'QA in Homolog', href: '/mergetrace/docs/guidelines/qa-homolog' },
      { label: 'Pull Request Template', href: '/mergetrace/docs/guidelines/pull-request-template' },
    ],
    roles: [
      { label: 'Mediador', href: '/mergetrace/docs/roles/mediador', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC' },
      { label: 'Developer B', href: '/mergetrace/docs/roles/developer-integrador', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB' },
    ],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke={c} strokeWidth="1.5"/>
        <path d="M7 8l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '3', id: 'qa',
    title: 'QA & Test Automation',
    color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    summary: 'Validação contínua dos merges por testes automatizados, garantindo estabilidade das builds e ausência de regressões.',
    activities: [
      { label: 'Executar Build e Testes (CI/CD)', href: '/mergetrace/docs/activities/build-ci-cd' },
      { label: 'Validar em Homologação (QA)', href: '/mergetrace/docs/activities/qa-homologacao' },
    ],
    artifacts: [
      { label: 'Relatório de Build/CI', href: '/mergetrace/docs/artifacts/relatorio-build-ci' },
      { label: 'Relatório de QA', href: '/mergetrace/docs/artifacts/relatorio-qa' },
    ],
    guidelines: [
      { label: 'CI/CD Quality Gates', href: '/mergetrace/docs/guidelines/ci-cd-quality-gates' },
      { label: 'QA in Homolog', href: '/mergetrace/docs/guidelines/qa-homolog' },
    ],
    roles: [
      { label: 'Developer A', href: '/mergetrace/docs/roles/developer-principal', color: '#639922', bg: '#EAF3DE', border: '#97C459' },
      { label: 'Developer B', href: '/mergetrace/docs/roles/developer-integrador', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB' },
    ],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke={c} strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-6" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '4', id: 'cicd',
    title: 'CI/CD',
    color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
    summary: 'Integração e entrega contínuas conectando pipelines, artefatos e quality gates. Garante rastreabilidade total entre builds, merges e deploys.',
    activities: [
      { label: 'Executar Build e Testes (CI/CD)', href: '/mergetrace/docs/activities/build-ci-cd' },
      { label: 'Merge Final', href: '/mergetrace/docs/activities/merge-final' },
    ],
    artifacts: [
      { label: 'Relatório de Build/CI', href: '/mergetrace/docs/artifacts/relatorio-build-ci' },
      { label: 'Release Notes', href: '/mergetrace/docs/artifacts/release-notes' },
      { label: 'Feature Flag', href: '/mergetrace/docs/artifacts/feature-flag' },
    ],
    guidelines: [
      { label: 'CI/CD Quality Gates', href: '/mergetrace/docs/guidelines/ci-cd-quality-gates' },
      { label: 'Release Notes Standard', href: '/mergetrace/docs/guidelines/release-notes-standard' },
      { label: 'Feature Flags Management', href: '/mergetrace/docs/guidelines/feature-flags-management' },
    ],
    roles: [
      { label: 'Mediador', href: '/mergetrace/docs/roles/mediador', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC' },
    ],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h4l2-4 2 8 2-4h4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '5', id: 'governance',
    title: 'Governance & Traceability',
    color: '#993556', bg: '#FBEAF0', border: '#ED93B1',
    summary: 'Monitoramento de conformidade, documentação leve, registro de decisões e aprendizado contínuo baseado em evidências empíricas.',
    activities: [
      { label: 'Resolver Conflitos de Merge', href: '/mergetrace/docs/activities/resolver-conflitos' },
      { label: 'Merge Final', href: '/mergetrace/docs/activities/merge-final' },
    ],
    artifacts: [
      { label: 'Histórico de Conflitos', href: '/mergetrace/docs/artifacts/historico-conflitos' },
      { label: 'Registro de Decisão', href: '/mergetrace/docs/artifacts/registro-decisao' },
      { label: 'Release Notes', href: '/mergetrace/docs/artifacts/release-notes' },
    ],
    guidelines: [
      { label: 'Approval Policy', href: '/mergetrace/docs/guidelines/approval-policy' },
      { label: 'Conflict Resolution Procedure', href: '/mergetrace/docs/guidelines/conflict-resolution-procedure' },
      { label: 'Rollback Strategy', href: '/mergetrace/docs/guidelines/rollback-strategy' },
    ],
    roles: [
      { label: 'Mediador', href: '/mergetrace/docs/roles/mediador', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC' },
      { label: 'Developer A', href: '/mergetrace/docs/roles/developer-principal', color: '#639922', bg: '#EAF3DE', border: '#97C459' },
      { label: 'Developer B', href: '/mergetrace/docs/roles/developer-integrador', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB' },
    ],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V6L11 2z" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M8 11l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function DisciplineCard({ d }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1px solid ${open ? d.color : '#e5e7eb'}`,
      borderLeft: `4px solid ${d.color}`,
      borderRadius: '10px', background: '#fff',
      overflow: 'hidden', transition: 'border-color 0.15s',
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'grid', gridTemplateColumns: '44px 1fr auto',
          alignItems: 'center', gap: '14px',
          padding: '14px 16px', cursor: 'pointer',
          background: open ? `${d.color}06` : '#fff',
          borderBottom: open ? `1px solid ${d.color}20` : 'none',
        }}
      >
        <div style={{
          width: '40px', height: '40px', borderRadius: '8px',
          background: d.bg, border: `1px solid ${d.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {d.icon(d.color)}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{d.title}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{d.summary}</div>
        </div>
        <span style={{
          fontSize: '12px', color: '#9ca3af', flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
        }}>▾</span>
      </div>

      {/* Detail */}
      {open && (
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {/* Atividades */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Atividades
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {d.activities.map((a, i) => (
                <Link key={i} to={a.href} style={{
                  fontSize: '12px', color: d.color, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontWeight: 500,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span style={{ fontSize: '10px' }}>›</span>{a.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Artefatos */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Artefatos
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {d.artifacts.map((a, i) => (
                <Link key={i} to={a.href} style={{
                  fontSize: '12px', color: '#374151', textDecoration: 'none',
                  background: d.bg, border: `1px solid ${d.border}`,
                  borderRadius: '5px', padding: '3px 8px', lineHeight: 1.5,
                  fontWeight: 500,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >{a.label}</Link>
              ))}
            </div>
          </div>

          {/* Guidelines + Roles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Guidelines
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {d.guidelines.map((g, i) => (
                  <Link key={i} to={g.href} style={{
                    fontSize: '12px', color: d.color, textDecoration: 'none', fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: '5px',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <span style={{ fontSize: '10px' }}>✓</span>{g.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Papéis
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {d.roles.map((r, i) => (
                  <Link key={i} to={r.href} style={{ textDecoration: 'none' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: 600, padding: '2px 9px',
                      borderRadius: '20px', background: r.bg, color: r.color,
                      border: `1px solid ${r.border}`, display: 'inline-block',
                    }}>{r.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Disciplines() {
  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{
        background: '#f0faf6', borderLeft: '3px solid #1D9E75',
        borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          As <strong>disciplinas do MergeTrace</strong> agrupam{' '}
          <Link to="/mergetrace/docs/activities" style={{ color: '#1D9E75', fontWeight: 600 }}>atividades</Link> e{' '}
          <Link to="/mergetrace/docs/roles" style={{ color: '#1D9E75', fontWeight: 600 }}>papéis</Link> que
          compartilham um mesmo foco técnico ou colaborativo. Assim como no OpenUP, as disciplinas
          <strong> não são compartimentos isolados</strong> — elas se sobrepõem e interagem
          constantemente ao longo do ciclo de integração, conectando desenvolvedores, revisores e
          mediadores em torno de metas comuns. Clique em cada disciplina para ver detalhes.
        </p>
      </div>

      {/* Disciplinas */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        5 disciplinas do guideline
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
        {disciplines.map(d => <DisciplineCard key={d.id} d={d} />)}
      </div>

      {/* Nota */}
      <div style={{
        background: '#fafafa', border: '1px solid #e5e7eb',
        borderRadius: '10px', padding: '14px 16px',
        display: 'flex', gap: '12px', alignItems: 'flex-start',
      }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: '#E1F5EE', display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#0F6E56" strokeWidth="1.5"/>
            <path d="M8 5v4M8 11v.5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: 0 }}>
          Cada disciplina pode ser representada por um workflow de referência que ilustra as{' '}
          <Link to="/mergetrace/docs/activities" style={{ color: '#1D9E75', fontWeight: 600 }}>atividades</Link> típicas,
          as dependências entre{' '}
          <Link to="/mergetrace/docs/roles" style={{ color: '#1D9E75', fontWeight: 600 }}>papéis</Link> e os{' '}
          <Link to="/mergetrace/docs/artifacts" style={{ color: '#1D9E75', fontWeight: 600 }}>artefatos</Link> gerados.
          Esses fluxos servem como guias educacionais e referência para aprimoramento contínuo do time.
        </p>
      </div>
    </div>
  );
}