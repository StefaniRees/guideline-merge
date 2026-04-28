import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function ArtifactRow({ a, color, bg, border, isEN, roleColors }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #f3f4f6' }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '12px', padding: '12px 14px', cursor: 'pointer', background: open ? `${color}06` : '#fff' }}>
        <div>
          <Link to={a.href} onClick={e => e.stopPropagation()} style={{ fontSize: '13px', fontWeight: 700, color, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>{a.name} →</Link>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px', lineHeight: 1.5 }}>{a.desc}</div>
        </div>
        <span style={{ fontSize: '12px', color: '#9ca3af', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: '12px 14px 14px', background: '#fafafa', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{isEN ? 'Source of truth' : 'Fonte de verdade'}</div>
            <span style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '20px', background: bg, color, border: `1px solid ${border}`, fontWeight: 600 }}>{a.source}</span>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{isEN ? 'Responsible' : 'Responsáveis'}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {a.roles.map((r, i) => {
                const rm = roleColors[r];
                return rm?.href ? (
                  <Link key={i} to={rm.href} style={{ textDecoration: 'none' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 9px', borderRadius: '20px', background: rm.bg, color: rm.color, border: `1px solid ${rm.border}` }}>{r}</span>
                  </Link>
                ) : (
                  <span key={i} style={{ fontSize: '11px', fontWeight: 600, padding: '2px 9px', borderRadius: '20px', background: rm?.bg || '#f3f4f6', color: rm?.color || '#6b7280', border: `1px solid ${rm?.border || '#e5e7eb'}` }}>{r}</span>
                );
              })}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{isEN ? 'Main relations' : 'Relações principais'}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {a.relations.map((r, i) => (
                <span key={i} style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '20px', background: '#f3f4f6', color: '#6b7280', border: '1px solid #e5e7eb' }}>{r}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CategorySection({ cat, isEN, roleColors }) {
  const [open, setOpen] = useState(true);
  const artifactLabel = isEN
    ? `${cat.artifacts.length} artifact${cat.artifacts.length !== 1 ? 's' : ''}`
    : `${cat.artifacts.length} artefato${cat.artifacts.length !== 1 ? 's' : ''}`;
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', cursor: 'pointer', background: open ? `${cat.color}08` : '#f9fafb', borderBottom: open ? `1px solid ${cat.border}` : 'none' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: cat.bg, border: `1px solid ${cat.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{cat.icon(cat.color)}</div>
        <span style={{ flex: 1, fontSize: '14px', fontWeight: 700, color: '#111' }}>{cat.title}</span>
        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 9px', borderRadius: '20px', background: cat.bg, color: cat.color, border: `1px solid ${cat.border}`, marginRight: '8px' }}>{artifactLabel}</span>
        <span style={{ fontSize: '12px', color: '#9ca3af', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▾</span>
      </div>
      {open && (
        <div>
          {cat.artifacts.map((a, i) => <ArtifactRow key={i} a={a} color={cat.color} bg={cat.bg} border={cat.border} isEN={isEN} roleColors={roleColors} />)}
        </div>
      )}
    </div>
  );
}

export default function WorkProducts() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const roleColors = {
    'Developer A':           { color: '#639922', bg: '#EAF3DE', border: '#97C459', href: '/docs/roles/developer-principal' },
    'Developer B':           { color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', href: '/docs/roles/developer-integrador' },
    [isEN ? 'Mediator' : 'Mediador']: { color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', href: '/docs/roles/mediador' },
    'Mediador':              { color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', href: '/docs/roles/mediador' },
    [isEN ? 'Automated pipeline' : 'Pipeline automático']: { color: '#6b7280', bg: '#f3f4f6', border: '#e5e7eb', href: null },
    'Pipeline automático':   { color: '#6b7280', bg: '#f3f4f6', border: '#e5e7eb', href: null },
  };

  const categories = [
    {
      id: 'desenvolvimento', title: isEN ? 'Development' : 'Desenvolvimento', color: '#639922', bg: '#EAF3DE', border: '#97C459',
      icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 7l-4 3 4 3M14 7l4 3-4 3M12 4l-4 12" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
      artifacts: [
        { name: isEN ? 'Activity Branch' : 'Branch de Atividade', href: '/docs/artifacts/branch-atividade', source: 'VCS', roles: ['Developer A', 'Developer B'], relations: isEN ? ['Standardized Commits', 'Pull Request', 'Conflict History'] : ['Commits Padronizados', 'Pull Request', 'Histórico de Conflitos'], desc: isEN ? 'Branch created from main to implement a change in an isolated and traceable way.' : 'Branch criada a partir da main para implementar uma mudança de forma isolada e rastreável.' },
        { name: isEN ? 'Standardized Commits' : 'Commits Padronizados', href: '/docs/artifacts/commits-padronizados', source: 'VCS', roles: ['Developer A', 'Developer B'], relations: ['Pull Request', isEN ? 'Build/CI Report' : 'Relatório de Build/CI', 'Code Review'], desc: isEN ? 'Small, atomic commits with semantic messages and issue reference.' : 'Commits pequenos e atômicos com mensagens semânticas e referência à issue.' },
        { name: 'Pull Request (PR)', href: '/docs/artifacts/pull-request', source: 'GitHub / GitLab / Azure Repos', roles: ['Developer A', 'Developer B', isEN ? 'Mediator' : 'Mediador'], relations: [isEN ? 'Review Checklist' : 'Checklist de Revisão', isEN ? 'Build/CI Report' : 'Relatório de Build/CI', isEN ? 'Decision Record' : 'Registro de Decisão'], desc: isEN ? 'Formal integration request with context, evidence, and automated validations.' : 'Solicitação formal de integração com contexto, evidências e validações automáticas.' },
        { name: isEN ? 'Review Checklist' : 'Checklist de Revisão', href: '/docs/artifacts/checklist-revisao', source: isEN ? 'Docs / Repository' : 'Docs / Repositório', roles: [isEN ? 'Mediator' : 'Mediador', 'Developer B'], relations: ['Pull Request', 'Approval Policy', isEN ? 'Decision Record' : 'Registro de Decisão'], desc: isEN ? 'Objective guide for technical approval and review pending items.' : 'Guia objetivo para aprovação técnica e registro de pendências de revisão.' },
        { name: isEN ? 'Conflict History' : 'Histórico de Conflitos', href: '/docs/artifacts/historico-conflitos', source: 'VCS / CI', roles: ['Developer A', 'Developer B', isEN ? 'Mediator' : 'Mediador'], relations: ['Pull Request', 'Commits', isEN ? 'Decision Record' : 'Registro de Decisão'], desc: isEN ? 'Conflict resolution trail, including causes, decisions, and lessons learned.' : 'Trilha de resolução de conflitos, incluindo causas, decisões e lições aprendidas.' },
      ],
    },
    {
      id: 'qualidade', title: isEN ? 'Quality (QA)' : 'Qualidade (QA)', color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
      icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke={c} strokeWidth="1.5"/><path d="M7 10l2.5 2.5L13 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
      artifacts: [
        { name: isEN ? 'QA Report' : 'Relatório de QA', href: '/docs/artifacts/relatorio-qa', source: 'CI / Test Runner', roles: ['Developer A', 'Developer B'], relations: [isEN ? 'Build/CI Report' : 'Relatório de Build/CI', 'Quality Gates', 'Pull Request'], desc: isEN ? 'Consolidation of functional and regression test evidence in staging.' : 'Consolidação de evidências de testes funcionais e de regressão em homologação.' },
        { name: isEN ? 'Build/CI Report' : 'Relatório de Build/CI', href: '/docs/artifacts/relatorio-build-ci', source: 'CI (Actions, Pipelines)', roles: [isEN ? 'Automated pipeline' : 'Pipeline automático'], relations: ['Pull Request', isEN ? 'QA Report' : 'Relatório de QA', 'Deploy'], desc: isEN ? 'Automatic evidence of build, tests, and checks — technical gate before integration.' : 'Evidência automática de build, testes e verificações — gate técnico antes da integração.' },
      ],
    },
    {
      id: 'cicd', title: 'CI / CD', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
      icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10h4l2-4 2 8 2-4h4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
      artifacts: [
        { name: 'Feature Flag', href: '/docs/artifacts/feature-flag', source: isEN ? 'Flags Platform' : 'Plataforma de Flags', roles: ['Developer A', 'Developer B', isEN ? 'Mediator' : 'Mediador'], relations: ['Deploy', 'Rollback Strategy', 'Release Notes'], desc: isEN ? 'Controlled feature activation mechanism, reducing dependency on long-lived branches.' : 'Mecanismo de ativação controlada de funcionalidades, reduzindo dependência de branches longas.' },
      ],
    },
    {
      id: 'governanca', title: isEN ? 'Governance & Release' : 'Governança & Release', color: '#993556', bg: '#FBEAF0', border: '#ED93B1',
      icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l6 3.5v4c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7V5.5L10 2z" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><path d="M7 10l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
      artifacts: [
        { name: isEN ? 'Decision Record' : 'Registro de Decisão', href: '/docs/artifacts/registro-decisao', source: isEN ? 'PRs / Issues / Comments' : 'PRs / Issues / Comentários', roles: [isEN ? 'Mediator' : 'Mediador', 'Developer A', 'Developer B'], relations: ['Pull Request', 'Code Review', isEN ? 'Conflict History' : 'Histórico de Conflitos'], desc: isEN ? 'Technical justifications documented in PRs and reviews, supporting governance and auditing.' : 'Justificativas técnicas documentadas em PRs e revisões, apoiando governança e auditoria.' },
        { name: 'Release Notes', href: '/docs/artifacts/release-notes', source: isEN ? 'Repository / Portal' : 'Repositório / Portal', roles: [isEN ? 'Mediator' : 'Mediador'], relations: ['PRs', 'Issues', 'Builds'], desc: isEN ? 'Summary of integrated changes, promoting clear communication and post-release traceability.' : 'Resumo das alterações integradas, promovendo comunicação clara e rastreabilidade pós-liberação.' },
      ],
    },
  ];

  const summaryStats = [
    { n: '10', label: isEN ? 'Artifacts' : 'Artefatos', href: '/docs/artifacts', color: '#1D9E75', bg: '#E1F5EE' },
    { n: '8',  label: isEN ? 'Activities' : 'Atividades', href: '/docs/activities', color: '#378ADD', bg: '#E6F1FB' },
    { n: '3',  label: isEN ? 'Roles' : 'Papéis', href: '/docs/roles', color: '#7F77DD', bg: '#EEEDFE' },
    { n: '11', label: 'Quality Gates', href: '/docs/guidelines', color: '#BA7517', bg: '#FAEEDA' },
  ];

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{ background: '#f0faf6', borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px' }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          {isEN
            ? <>In MergeTrace, <strong>Work Products</strong> are the{' '}<Link to="/docs/artifacts" style={{ color: '#1D9E75', fontWeight: 600 }}>traceable artifacts</Link>{' '}that make each change <strong>verifiable and auditable</strong> — from issue ⇄ PR ⇄ build ⇄ tests ⇄ release. Each artifact has a source of truth, explicit responsibilities, and relationships with other flow elements, enabling lightweight governance, metrics, and continuous improvement. Click each artifact to see details.</>
            : <>No MergeTrace, os <strong>Work Products</strong> são os{' '}<Link to="/docs/artifacts" style={{ color: '#1D9E75', fontWeight: 600 }}>artefatos rastreáveis</Link>{' '}que tornam cada mudança <strong>verificável e auditável</strong> — de issue ⇄ PR ⇄ build ⇄ testes ⇄ release. Cada artefato tem uma fonte de verdade, responsáveis explícitos e relações com os demais elementos do fluxo, viabilizando governança leve, métricas e melhoria contínua. Clique em cada artefato para ver detalhes.</>}
        </p>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '32px' }}>
        {summaryStats.map((s, i) => (
          <Link key={i} to={s.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: s.bg, borderRadius: '10px', padding: '14px 16px', textAlign: 'center', transition: 'opacity 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: s.color }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: s.color, fontWeight: 600 }}>{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Categories */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'Artifacts by category' : 'Artefatos por categoria'}
      </div>
      {categories.map(cat => <CategorySection key={cat.id} cat={cat} isEN={isEN} roleColors={roleColors} />)}

      {/* Footer note */}
      <div style={{ background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', marginTop: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#0F6E56" strokeWidth="1.5"/><path d="M8 5v4M8 11v.5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: 0 }}>
          {isEN
            ? <>Artifacts operationalize MergeTrace's principles of simplicity, transparency, and traceability. They enable explainability and audit mechanisms — identified by specialists (P1–P8) as essential for mitigating risks between teams, supporting{' '}<Link to="/docs/welcome/roles" style={{ color: '#1D9E75', fontWeight: 600 }}>technical collaboration</Link>{' '}and enabling post-incident analysis of decisions.</>
            : <>Os artefatos operacionalizam os princípios de simplicidade, transparência e rastreabilidade do MergeTrace. Eles viabilizam mecanismos de explicabilidade e auditoria — apontados pelos especialistas (P1–P8) como essenciais para mitigar riscos entre equipes, apoiar{' '}<Link to="/docs/welcome/roles" style={{ color: '#1D9E75', fontWeight: 600 }}>colaboração técnica</Link>{' '}e permitir análise posterior de incidentes e decisões.</>}
        </p>
      </div>
    </div>
  );
}
