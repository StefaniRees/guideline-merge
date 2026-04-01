import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const categories = [
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento',
    color: '#639922', bg: '#EAF3DE', border: '#97C459',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 7l-4 3 4 3M14 7l4 3-4 3M12 4l-4 12" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    artifacts: [
      {
        name: 'Branch de Atividade',
        href: '/guideline-merge/docs/artifacts/branch-atividade',
        source: 'VCS',
        roles: ['Developer A', 'Developer B'],
        relations: ['Commits Padronizados', 'Pull Request', 'Histórico de Conflitos'],
        desc: 'Branch criada a partir da main para implementar uma mudança de forma isolada e rastreável.',
      },
      {
        name: 'Commits Padronizados',
        href: '/guideline-merge/docs/artifacts/commits-padronizados',
        source: 'VCS',
        roles: ['Developer A', 'Developer B'],
        relations: ['Pull Request', 'Relatório de Build/CI', 'Code Review'],
        desc: 'Commits pequenos e atômicos com mensagens semânticas e referência à issue.',
      },
      {
        name: 'Pull Request (PR)',
        href: '/guideline-merge/docs/artifacts/pull-request',
        source: 'GitHub / GitLab / Azure Repos',
        roles: ['Developer A', 'Developer B', 'Mediador'],
        relations: ['Checklist de Revisão', 'Relatório de Build/CI', 'Registro de Decisão'],
        desc: 'Solicitação formal de integração com contexto, evidências e validações automáticas.',
      },
      {
        name: 'Checklist de Revisão',
        href: '/guideline-merge/docs/artifacts/checklist-revisao',
        source: 'Docs / Repositório',
        roles: ['Mediador', 'Developer B'],
        relations: ['Pull Request', 'Approval Policy', 'Registro de Decisão'],
        desc: 'Guia objetivo para aprovação técnica e registro de pendências de revisão.',
      },
      {
        name: 'Histórico de Conflitos',
        href: '/guideline-merge/docs/artifacts/historico-conflitos',
        source: 'VCS / CI',
        roles: ['Developer A', 'Developer B', 'Mediador'],
        relations: ['Pull Request', 'Commits', 'Registro de Decisão'],
        desc: 'Trilha de resolução de conflitos, incluindo causas, decisões e lições aprendidas.',
      },
    ],
  },
  {
    id: 'qualidade',
    title: 'Qualidade (QA)',
    color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke={c} strokeWidth="1.5"/>
        <path d="M7 10l2.5 2.5L13 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    artifacts: [
      {
        name: 'Relatório de QA',
        href: '/guideline-merge/docs/artifacts/relatorio-qa',
        source: 'CI / Test Runner',
        roles: ['Developer A', 'Developer B'],
        relations: ['Relatório de Build/CI', 'Quality Gates', 'Pull Request'],
        desc: 'Consolidação de evidências de testes funcionais e de regressão em homologação.',
      },
      {
        name: 'Relatório de Build/CI',
        href: '/guideline-merge/docs/artifacts/relatorio-build-ci',
        source: 'CI (Actions, Pipelines)',
        roles: ['Pipeline automático'],
        relations: ['Pull Request', 'Relatório de QA', 'Deploy'],
        desc: 'Evidência automática de build, testes e verificações — gate técnico antes da integração.',
      },
    ],
  },
  {
    id: 'cicd',
    title: 'CI / CD',
    color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10h4l2-4 2 8 2-4h4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    artifacts: [
      {
        name: 'Feature Flag',
        href: '/guideline-merge/docs/artifacts/feature-flag',
        source: 'Plataforma de Flags',
        roles: ['Developer A', 'Developer B', 'Mediador'],
        relations: ['Deploy', 'Rollback Strategy', 'Release Notes'],
        desc: 'Mecanismo de ativação controlada de funcionalidades, reduzindo dependência de branches longas.',
      },
    ],
  },
  {
    id: 'governanca',
    title: 'Governança & Release',
    color: '#993556', bg: '#FBEAF0', border: '#ED93B1',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l6 3.5v4c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7V5.5L10 2z" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M7 10l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    artifacts: [
      {
        name: 'Registro de Decisão',
        href: '/guideline-merge/docs/artifacts/registro-decisao',
        source: 'PRs / Issues / Comentários',
        roles: ['Mediador', 'Developer A', 'Developer B'],
        relations: ['Pull Request', 'Code Review', 'Histórico de Conflitos'],
        desc: 'Justificativas técnicas documentadas em PRs e revisões, apoiando governança e auditoria.',
      },
      {
        name: 'Release Notes',
        href: '/guideline-merge/docs/artifacts/release-notes',
        source: 'Repositório / Portal',
        roles: ['Mediador'],
        relations: ['PRs', 'Issues', 'Builds'],
        desc: 'Resumo das alterações integradas, promovendo comunicação clara e rastreabilidade pós-liberação.',
      },
    ],
  },
];

const roleColors = {
  'Developer A':      { color: '#639922', bg: '#EAF3DE', border: '#97C459', href: '/guideline-merge/docs/roles/developer-principal' },
  'Developer B':      { color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', href: '/guideline-merge/docs/roles/developer-integrador' },
  'Mediador':         { color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', href: '/guideline-merge/docs/roles/mediador' },
  'Pipeline automático': { color: '#6b7280', bg: '#f3f4f6', border: '#e5e7eb', href: null },
};

function ArtifactRow({ a, color, bg, border }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #f3f4f6' }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          alignItems: 'center', gap: '12px',
          padding: '12px 14px', cursor: 'pointer',
          background: open ? `${color}06` : '#fff',
        }}
      >
        <div>
          <Link
            to={a.href}
            onClick={e => e.stopPropagation()}
            style={{ fontSize: '13px', fontWeight: 700, color, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >{a.name} →</Link>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px', lineHeight: 1.5 }}>{a.desc}</div>
        </div>
        <span style={{
          fontSize: '12px', color: '#9ca3af',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s', flexShrink: 0,
        }}>▾</span>
      </div>

      {open && (
        <div style={{ padding: '12px 14px 14px', background: '#fafafa', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Fonte de verdade
            </div>
            <span style={{
              fontSize: '11px', padding: '2px 9px', borderRadius: '20px',
              background: bg, color, border: `1px solid ${border}`, fontWeight: 600,
            }}>{a.source}</span>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Responsáveis
            </div>
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
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Relações principais
            </div>
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

function CategorySection({ cat }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '12px 16px', cursor: 'pointer',
          background: open ? `${cat.color}08` : '#f9fafb',
          borderBottom: open ? `1px solid ${cat.border}` : 'none',
        }}
      >
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: cat.bg, border: `1px solid ${cat.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {cat.icon(cat.color)}
        </div>
        <span style={{ flex: 1, fontSize: '14px', fontWeight: 700, color: '#111' }}>{cat.title}</span>
        <span style={{
          fontSize: '11px', fontWeight: 600, padding: '2px 9px',
          borderRadius: '20px', background: cat.bg, color: cat.color,
          border: `1px solid ${cat.border}`, marginRight: '8px',
        }}>{cat.artifacts.length} artefato{cat.artifacts.length !== 1 ? 's' : ''}</span>
        <span style={{
          fontSize: '12px', color: '#9ca3af',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
        }}>▾</span>
      </div>
      {open && (
        <div>
          {cat.artifacts.map((a, i) => (
            <ArtifactRow key={i} a={a} color={cat.color} bg={cat.bg} border={cat.border} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorkProducts() {
  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{
        background: '#f0faf6', borderLeft: '3px solid #1D9E75',
        borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          No MergeTrace, os <strong>Work Products</strong> são os{' '}
          <Link to="/guideline-merge/docs/artifacts" style={{ color: '#1D9E75', fontWeight: 600 }}>artefatos rastreáveis</Link>{' '}
          que tornam cada mudança <strong>verificável e auditável</strong> — de issue ⇄ PR ⇄ build ⇄ testes ⇄ release.
          Cada artefato tem uma fonte de verdade, responsáveis explícitos e relações com os demais elementos do fluxo,
          viabilizando governança leve, métricas e melhoria contínua. Clique em cada artefato para ver detalhes.
        </p>
      </div>

      {/* Resumo em números */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '32px' }}>
        {[
          { n: '10', label: 'Artefatos', href: '/guideline-merge/docs/artifacts', color: '#1D9E75', bg: '#E1F5EE' },
          { n: '8', label: 'Atividades', href: '/guideline-merge/docs/activities', color: '#378ADD', bg: '#E6F1FB' },
          { n: '3', label: 'Papéis', href: '/guideline-merge/docs/roles', color: '#7F77DD', bg: '#EEEDFE' },
          { n: '11', label: 'Quality Gates', href: '/guideline-merge/docs/guidelines', color: '#BA7517', bg: '#FAEEDA' },
        ].map((s, i) => (
          <Link key={i} to={s.href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: s.bg, borderRadius: '10px', padding: '14px 16px',
              textAlign: 'center', transition: 'opacity 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <div style={{ fontSize: '24px', fontWeight: 700, color: s.color }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: s.color, fontWeight: 600 }}>{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Categorias */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        Artefatos por categoria
      </div>
      {categories.map(cat => <CategorySection key={cat.id} cat={cat} />)}

      {/* Nota */}
      <div style={{
        background: '#fafafa', border: '1px solid #e5e7eb',
        borderRadius: '10px', padding: '14px 16px', marginTop: '20px',
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
          Os artefatos operacionalizam os princípios de simplicidade, transparência e rastreabilidade do MergeTrace.
          Eles viabilizam mecanismos de explicabilidade e auditoria — apontados pelos especialistas (P1–P8)
          como essenciais para mitigar riscos entre equipes, apoiar{' '}
          <Link to="/guideline-merge/docs/welcome/roles" style={{ color: '#1D9E75', fontWeight: 600 }}>colaboração técnica</Link>{' '}
          e permitir análise posterior de incidentes e decisões.
        </p>
      </div>
    </div>
  );
}