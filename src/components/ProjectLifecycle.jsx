import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const phases = [
  {
    id: 'inception',
    label: 'Inception',
    color: '#639922', bg: '#EAF3DE', border: '#97C459',
    objective: 'Objetivo e escopo claros, stakeholders mapeados e baseline técnico definido.',
    outputs: [
      'Políticas de PR e branching acordadas',
      'CI inicial rodando',
      'Templates (PR/Issue/ADR) configurados',
    ],
    question: 'Temos o mínimo para integrar com segurança?',
    mergePhases: ['P1 — Planejamento'],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M11 7v5l3 2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'elaboration',
    label: 'Elaboration',
    color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB',
    objective: 'Riscos técnicos priorizados; arquitetura prática para integração contínua; automações de qualidade evoluídas.',
    outputs: [
      'Quality gates ativos (build, testes, cobertura, análise estática)',
      'Ambientes de teste configurados',
      'Feature flags quando necessário',
    ],
    question: 'Os riscos principais estão mitigados e os gates estão confiáveis?',
    mergePhases: ['P2 — Desenvolvimento', 'P3 — Pull Request'],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <rect x="12" y="3" width="7" height="7" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <rect x="7" y="12" width="7" height="7" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
      </svg>
    ),
  },
  {
    id: 'construction',
    label: 'Construction',
    color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    objective: 'Entrega por micro-increments via PRs pequenos, revisão colaborativa e mediação em conflitos.',
    outputs: [
      'Incremento potencialmente liberável a cada iteração',
      'Rastreabilidade completa issue ⇄ PR ⇄ build ⇄ testes',
      'MergeLog sem pendências',
    ],
    question: 'O produto está estável e rastreável para liberar?',
    mergePhases: ['P4 — Code Review', 'P5 — Approval', 'P6 — Merge'],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 14l3-4 3 2 3-5 3 3" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="16" height="16" rx="3" stroke={c} strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'transition',
    label: 'Transition',
    color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
    objective: 'Validação final, rollout controlado e aprendizado documentado.',
    outputs: [
      'Release notes geradas',
      'Plano de rollback validado',
      'Flags/monitoramento configurados',
      'Métricas de entrega consolidadas',
    ],
    question: 'Critérios atendidos e plano de rollback testado?',
    mergePhases: ['P7 — Release / Deploy', 'P8 — Rollback'],
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6L11 3z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={`${c}15`}/>
      </svg>
    ),
  },
];

const mergePhaseMeta = {
  'P1 — Planejamento':    { color: '#639922', bg: '#EAF3DE', border: '#97C459', href: '/guideline-merge/docs/phases/planejamento' },
  'P2 — Desenvolvimento': { color: '#639922', bg: '#EAF3DE', border: '#97C459', href: '/guideline-merge/docs/phases/desenvolvimento' },
  'P3 — Pull Request':    { color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', href: '/guideline-merge/docs/phases/pull-request' },
  'P4 — Code Review':     { color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27', href: '/guideline-merge/docs/phases/code-review' },
  'P5 — Approval':        { color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27', href: '/guideline-merge/docs/phases/approval' },
  'P6 — Merge':           { color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', href: '/guideline-merge/docs/phases/merge' },
  'P7 — Release / Deploy':{ color: '#993556', bg: '#FBEAF0', border: '#ED93B1', href: '/guideline-merge/docs/phases/release-deploy' },
  'P8 — Rollback':        { color: '#993556', bg: '#FBEAF0', border: '#ED93B1', href: '/guideline-merge/docs/phases/rollback' },
};

const vectors = [
  {
    color: '#E24B4A', bg: '#FCEBEB', border: '#F09595',
    title: 'Redução de risco',
    desc: 'Decisões registradas (ADR), feature flags, canary releases e automações de verificação.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l7 4v5c0 3.5-3 6.5-7 8-4-1.5-7-4.5-7-8V6L10 2z" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M7 10l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    color: '#1D9E75', bg: '#E1F5EE', border: '#9FE1CB',
    title: 'Criação de valor',
    desc: 'PRs pequenos que chegam em produção com impacto mensurável a cada iteração.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 13l3-4 3 2 3-5 3 3" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8v4h-4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function PhaseCard({ phase, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(phase.id)}
      style={{
        border: `1.5px solid ${selected ? phase.color : '#e5e7eb'}`,
        borderTop: `3px solid ${phase.color}`,
        borderRadius: '10px', background: selected ? `${phase.color}06` : '#fff',
        padding: '14px 16px', cursor: 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
        display: 'flex', flexDirection: 'column', gap: '8px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '8px',
          background: phase.bg, border: `1px solid ${phase.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {phase.icon(phase.color)}
        </div>
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{phase.label}</span>
      </div>
      <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>{phase.objective}</p>
    </div>
  );
}

export default function ProjectLifecycle() {
  const [selected, setSelected] = useState('inception');
  const phase = phases.find(p => p.id === selected);

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Nota de distinção */}
      <div style={{
        background: '#FAEEDA', border: '1px solid #EF9F27',
        borderRadius: '10px', padding: '14px 16px', marginBottom: '20px',
        display: 'flex', gap: '12px', alignItems: 'flex-start',
      }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: '#fff', border: '1px solid #EF9F27',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#BA7517" strokeWidth="1.5"/>
            <path d="M8 5v4M8 11v.5" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <p style={{ fontSize: '13px', color: '#854F0B', lineHeight: 1.6, margin: 0 }}>
          <strong>Project Lifecycle ≠ Fases do MergeTrace.</strong> O Project Lifecycle
          (Inception, Elaboration, Construction, Transition) representa o <strong>macro ciclo do projeto</strong> —
          inspirado no OpenUP — e define como o time organiza o trabalho ao longo do tempo.
          As <Link to="/guideline-merge/docs/phases" style={{ color: '#854F0B', fontWeight: 600 }}>Fases operacionais do MergeTrace (P1–P8)</Link> são
          o fluxo técnico de cada integração de código, que ocorre <strong>dentro</strong> dessas fases maiores.
        </p>
      </div>

      {/* Intro */}
      <div style={{
        background: '#f0faf6', borderLeft: '3px solid #1D9E75',
        borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          O <strong>Project Lifecycle</strong> oferece visibilidade, transparência e pontos
          objetivos de decisão ao longo do projeto. Organizado em <strong>4 fases</strong> com marcos
          e critérios objetivos de saída, garantindo previsibilidade e rastreabilidade
          completa: issue ⇄ PR ⇄ build ⇄ testes ⇄ release.
        </p>
      </div>

      {/* Fases — grid clicável */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        4 fases do ciclo de vida do projeto
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {phases.map(p => (
          <PhaseCard key={p.id} phase={p} selected={selected === p.id} onSelect={setSelected} />
        ))}
      </div>

      {/* Detail panel */}
      {phase && (
        <div style={{
          border: `1px solid ${phase.color}`, borderRadius: '12px',
          padding: '18px 20px', background: '#fafafa', marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '12px', fontWeight: 700, color: phase.color,
              background: phase.bg, border: `1px solid ${phase.border}`,
              borderRadius: '6px', padding: '3px 10px',
            }}>{phase.label}</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{phase.objective}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Saídas mínimas
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {phase.outputs.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: phase.color, flexShrink: 0, marginTop: '5px' }} />
                    <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Pergunta de decisão
              </div>
              <div style={{
                background: phase.bg, border: `1px solid ${phase.border}`,
                borderRadius: '8px', padding: '12px',
                fontSize: '13px', color: phase.color, fontWeight: 600,
                lineHeight: 1.6, fontStyle: 'italic',
              }}>
                "{phase.question}"
              </div>
            </div>
          </div>

          {/* Fases do MergeTrace correspondentes */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Fases do MergeTrace que ocorrem nesta etapa
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {phase.mergePhases.map((mp, i) => {
                const meta = mergePhaseMeta[mp];
                return (
                  <Link key={i} to={meta?.href || '#'} style={{ textDecoration: 'none' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: 600, padding: '3px 10px',
                      borderRadius: '20px', background: meta?.bg, color: meta?.color,
                      border: `1px solid ${meta?.border}`, display: 'inline-block',
                    }}>{mp}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Vetores */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        Vetores que guiam todo o ciclo
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '32px' }}>
        {vectors.map((v, i) => (
          <div key={i} style={{
            border: `1px solid ${v.border}`, borderRadius: '10px',
            background: v.bg, padding: '14px 16px',
            display: 'flex', gap: '12px', alignItems: 'flex-start',
          }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: '#fff', border: `1px solid ${v.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {v.icon(v.color)}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{v.title}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{v.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Nota final */}
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
          O MergeTrace integra planejamento leve, automação de qualidade e controle de versão,
          promovendo <strong>entregas previsíveis e sustentáveis</strong> em cada fase do ciclo de vida.
          As fases operacionais P1–P8 materializam as práticas do guideline dentro de cada etapa do projeto.
        </p>
      </div>

    </div>
  );
}