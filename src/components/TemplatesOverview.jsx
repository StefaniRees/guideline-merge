import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const templates = [
  {
    id: 'planejamento',
    title: 'Planejamento',
    subtitle: 'Checklist',
    phase: 'Planejamento',
    phaseColor: '#639922',
    description: 'Alinhar escopo, riscos e dependências antes do desenvolvimento. Garante que branch, convenções e sincronização estejam definidos.',
    href: '/mergetrace/docs/templates/planejamento',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento',
    subtitle: 'Checklist',
    phase: 'Desenvolvimento',
    phaseColor: '#639922',
    description: 'Orientar boas práticas de implementação com commits atômicos, sincronização frequente e testes locais.',
    href: '/mergetrace/docs/templates/desenvolvimento',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
  {
    id: 'pull-request',
    title: 'Pull Request',
    subtitle: 'Checklist',
    phase: 'Pull Request',
    phaseColor: '#378ADD',
    description: 'Estruturar a descrição do PR com contexto, impacto, riscos e evidências antes de solicitar revisão.',
    href: '/mergetrace/docs/templates/pull-request',
    sections: ['Pré-condições', 'Execução', 'Quality Gates'],
  },
  {
    id: 'code-review',
    title: 'Code Review',
    subtitle: 'Checklist',
    phase: 'Code Review',
    phaseColor: '#BA7517',
    description: 'Estabelecer critérios objetivos de revisão técnica, contemplando estilo, impacto, testes e segurança.',
    href: '/mergetrace/docs/templates/code-review',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
  {
    id: 'approval',
    title: 'Approval',
    subtitle: 'Checklist',
    phase: 'Approval',
    phaseColor: '#BA7517',
    description: 'Formalizar critérios de aprovação do PR, incluindo validações de CI/CD e aprovações mínimas necessárias.',
    href: '/mergetrace/docs/templates/approval',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
  {
    id: 'merge',
    title: 'Merge',
    subtitle: 'Checklist',
    phase: 'Merge',
    phaseColor: '#7F77DD',
    description: 'Garantir integração segura e rastreável na branch principal, com resolução de conflitos documentada.',
    href: '/mergetrace/docs/templates/merge',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
  {
    id: 'release-deploy',
    title: 'Release / Deploy',
    subtitle: 'Checklist',
    phase: 'Release/Deploy',
    phaseColor: '#993556',
    description: 'Padronizar liberação e registro de evidências de build, deploy e monitoramento em produção.',
    href: '/mergetrace/docs/templates/release-deploy',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
  {
    id: 'rollback',
    title: 'Rollback',
    subtitle: 'Checklist',
    phase: 'Rollback',
    phaseColor: '#993556',
    description: 'Orientar reversões preservando histórico, contexto e rastreabilidade do incidente.',
    href: '/mergetrace/docs/templates/rollback',
    sections: ['Pré-condições', 'Execução', 'Quality Gate'],
  },
];

const PHASE_META = {
  'Planejamento':    { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/mergetrace/docs/phases/planejamento' },
  'Desenvolvimento': { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/mergetrace/docs/phases/desenvolvimento' },
  'Pull Request':    { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/mergetrace/docs/phases/pull-request' },
  'Code Review':     { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/mergetrace/docs/phases/code-review' },
  'Approval':        { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/mergetrace/docs/phases/approval' },
  'Merge':           { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC', href: '/mergetrace/docs/phases/merge' },
  'Release/Deploy':  { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/mergetrace/docs/phases/release-deploy' },
  'Rollback':        { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/mergetrace/docs/phases/rollback' },
};

const GROUPS = [
  { label: 'Todos', value: 'all' },
  { label: 'Preparação', value: 'prep', phases: ['Planejamento', 'Desenvolvimento'] },
  { label: 'Validação', value: 'val', phases: ['Pull Request', 'Code Review', 'Approval'] },
  { label: 'Integração', value: 'int', phases: ['Merge', 'Release/Deploy', 'Rollback'] },
];

function ChecklistIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="16" height="16" rx="4" stroke={color} strokeWidth="1.5" fill={`${color}12`} />
      <path d="M5 9l2.5 2.5L13 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TemplatesOverview() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = templates.filter(t => {
    const matchSearch =
      search === '' ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());

    const group = GROUPS.find(g => g.value === activeGroup);
    const matchGroup =
      activeGroup === 'all' ? true :
      group?.phases?.includes(t.phase);

    return matchSearch && matchGroup;
  });

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <p style={{
        fontSize: '14px', color: '#6b7280', lineHeight: 1.6,
        borderLeft: '3px solid #1D9E75', background: '#f0faf6',
        borderRadius: '0 6px 6px 0', padding: '10px 12px', marginBottom: '24px',
      }}>
        Conjunto de checklists operacionais por fase, concebidos para padronizar práticas,
        reduzir ambiguidades e garantir que critérios mínimos sejam atendidos antes de progredir no fluxo de merge.
      </p>

      {/* Toolbar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: '12px', marginBottom: '20px',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {GROUPS.map(g => (
            <button
              key={g.value}
              onClick={() => setActiveGroup(g.value)}
              style={{
                padding: '5px 14px', fontSize: '12px', fontWeight: 500,
                borderRadius: '20px', cursor: 'pointer', border: '1px solid',
                borderColor: activeGroup === g.value ? '#1D9E75' : '#e5e7eb',
                background: activeGroup === g.value ? '#E1F5EE' : '#fff',
                color: activeGroup === g.value ? '#0F6E56' : '#6b7280',
                transition: 'all 0.15s',
              }}
            >{g.label}</button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Buscar template..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '7px 12px', fontSize: '13px', borderRadius: '8px',
            border: '1px solid #e5e7eb', outline: 'none', width: '200px',
            color: '#374151', background: '#fff',
          }}
        />
      </div>

      {/* Contador */}
      <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '16px' }}>
        {filtered.length} template{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '12px',
        }}>
          {filtered.map(t => {
            const pm = PHASE_META[t.phase] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb', href: '#' };
            return (
              <Link key={t.id} to={t.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{
                    border: '1px solid #e5e7eb',
                    borderTop: `3px solid ${t.phaseColor}`,
                    borderRadius: '10px', background: '#fff',
                    padding: '16px', height: '100%',
                    cursor: 'pointer', transition: 'box-shadow 0.15s',
                    display: 'flex', flexDirection: 'column', gap: '10px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ChecklistIcon color={t.phaseColor} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', lineHeight: 1.3 }}>
                        {t.title}
                      </div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '1px' }}>
                        {t.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {t.description}
                  </p>

                  {/* Sections */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {t.sections.map((s, i) => (
                      <span key={i} style={{
                        fontSize: '10px', padding: '2px 8px', borderRadius: '99px',
                        background: '#f3f4f6', color: '#6b7280',
                        border: '1px solid #e5e7eb',
                      }}>{s}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #f3f4f6' }}>
                    <Link
                      to={pm.href}
                      onClick={e => e.stopPropagation()}
                      style={{ textDecoration: 'none' }}
                    >
                      <span style={{
                        fontSize: '10px', fontWeight: 500, padding: '2px 9px',
                        borderRadius: '99px', background: pm.bg, color: pm.color,
                        border: `1px solid ${pm.border}`, display: 'inline-block',
                      }}>{t.phase}</span>
                    </Link>
                    <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>
                      Ver checklist →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '48px 0', color: '#9ca3af', fontSize: '14px' }}>
          Nenhum template encontrado para os filtros selecionados.
        </div>
      )}
    </div>
  );
}
