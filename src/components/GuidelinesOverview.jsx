import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const guidelines = [
  {
    id: 'approval-policy',
    name: 'Approval Policy',
    type: 'Quality Gate',
    typeColor: '#534AB7',
    summary: 'Define critérios mínimos de aprovação de Pull Requests, incluindo número de revisores, papéis envolvidos e exceções permitidas.',
    phase: 'Approval',
    href: '/guideline-merge/docs/guidelines/approval-policy',
  },
  {
    id: 'branch-naming-convention',
    name: 'Branch Naming Convention',
    type: 'Convenção',
    typeColor: '#639922',
    summary: 'Estabelece padrões de nomeação de branches, favorecendo organização e rastreabilidade em alinhamento com histórias e tarefas.',
    phase: 'Planejamento',
    href: '/guideline-merge/docs/guidelines/branch-naming-convention',
  },
  {
    id: 'cicd-quality-gates',
    name: 'CI/CD Quality Gates',
    type: 'Quality Gate',
    typeColor: '#534AB7',
    summary: 'Define gates obrigatórios no pipeline — build, testes automatizados, análise estática e cobertura mínima — antes da integração.',
    phase: 'Pull Request',
    href: '/guideline-merge/docs/guidelines/ci-cd-quality-gates',
  },
  {
    id: 'code-review-checklist',
    name: 'Code Review Checklist',
    type: 'Quality Gate',
    typeColor: '#534AB7',
    summary: 'Fornece critérios mínimos para revisão técnica, contemplando estilo, impacto, testes, riscos e segurança.',
    phase: 'Code Review',
    href: '/guideline-merge/docs/guidelines/code-review-checklist',
  },
  {
    id: 'commit-message-convention',
    name: 'Commit Message Convention',
    type: 'Convenção',
    typeColor: '#639922',
    summary: 'Padroniza mensagens de commit, permitindo rastreamento semântico e associação clara entre mudanças, tickets e issues.',
    phase: 'Desenvolvimento',
    href: '/guideline-merge/docs/guidelines/commit-message',
  },
  {
    id: 'conflict-resolution-procedure',
    name: 'Conflict Resolution Procedure',
    type: 'Procedimento',
    typeColor: '#BA7517',
    summary: 'Descreve práticas recomendadas para resolução colaborativa de conflitos, incluindo registro de decisões e aprendizado organizacional.',
    phase: 'Merge',
    href: '/guideline-merge/docs/guidelines/conflict-resolution-procedure',
  },
  {
    id: 'feature-flags-management',
    name: 'Feature Flags Management',
    type: 'Diretriz',
    typeColor: '#378ADD',
    summary: 'Normatiza a criação, uso e remoção de feature flags, permitindo isolamento de impactos e reversões controladas.',
    phase: 'Release/Deploy',
    href: '/guideline-merge/docs/guidelines/feature-flags-management',
  },
  {
    id: 'pull-request-template',
    name: 'Pull Request Template',
    type: 'Template',
    typeColor: '#378ADD',
    summary: 'Disponibiliza um template estruturado para descrição de contexto, escopo, riscos, testes e artefatos vinculados ao PR.',
    phase: 'Pull Request',
    href: '/guideline-merge/docs/guidelines/pull-request-template',
  },
  {
    id: 'qa-in-homolog',
    name: 'QA in Homolog',
    type: 'Quality Gate',
    typeColor: '#534AB7',
    summary: 'Diretriz para validação das alterações em ambiente de homologação antes do merge final, incluindo testes funcionais e de integração.',
    phase: 'Code Review',
    href: '/guideline-merge/docs/guidelines/qa-homolog',
  },
  {
    id: 'release-notes-standard',
    name: 'Release Notes Standard',
    type: 'Convenção',
    typeColor: '#639922',
    summary: 'Padroniza a geração de notas de versão, promovendo comunicação clara sobre mudanças, riscos e componentes afetados.',
    phase: 'Release/Deploy',
    href: '/guideline-merge/docs/guidelines/release-notes-standard',
  },
  {
    id: 'rollback-strategy',
    name: 'Rollback Strategy',
    type: 'Procedimento',
    typeColor: '#BA7517',
    summary: 'Estabelece estratégias e critérios para reversão controlada de merges ou releases, incluindo registro de incidentes e análise pós-falha.',
    phase: 'Rollback',
    href: '/guideline-merge/docs/guidelines/rollback-strategy',
  },
];

const PHASE_META = {
  'Planejamento':    { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/guideline-merge/docs/phases/planejamento' },
  'Desenvolvimento': { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/guideline-merge/docs/phases/desenvolvimento' },
  'Pull Request':    { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/guideline-merge/docs/phases/pull-request' },
  'Code Review':     { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/guideline-merge/docs/phases/code-review' },
  'Approval':        { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/guideline-merge/docs/phases/approval' },
  'Merge':           { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC', href: '/guideline-merge/docs/phases/merge' },
  'Release/Deploy':  { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/guideline-merge/docs/phases/release-deploy' },
  'Rollback':        { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/guideline-merge/docs/phases/rollback' },
};

const TYPE_META = {
  'Quality Gate': { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC' },
  'Convenção':    { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459' },
  'Procedimento': { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27' },
  'Diretriz':     { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB' },
  'Template':     { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB' },
};

const FILTER_GROUPS = [
  { label: 'Todos', value: 'all' },
  { label: 'Quality Gates', value: 'Quality Gate' },
  { label: 'Convenções', value: 'Convenção' },
  { label: 'Procedimentos', value: 'Procedimento' },
  { label: 'Diretrizes', value: 'Diretriz' },
  { label: 'Templates', value: 'Template' },
];

export default function GuidelinesOverview() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = guidelines.filter(g => {
    const matchSearch =
      search === '' ||
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.summary.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      activeFilter === 'all' ? true : g.type === activeFilter;

    return matchSearch && matchFilter;
  });

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <p style={{
        fontSize: '14px', color: '#6b7280', lineHeight: 1.6,
        borderLeft: '3px solid #1D9E75', background: '#f0faf6',
        borderRadius: '0 6px 6px 0', padding: '10px 12px', marginBottom: '24px',
      }}>
        Os quality gates e diretrizes de governança do MergeTrace orientam e condicionam a progressão entre as fases do merge.
        Alguns funcionam como gates explícitos — bloqueando o fluxo quando critérios não são atendidos.
        Outros operam como diretrizes normativas, promovendo padronização sem interromper a execução.
      </p>

      {/* Toolbar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: '12px', marginBottom: '20px',
      }}>
        {/* Filtros por tipo */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {FILTER_GROUPS.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{
                padding: '5px 14px', fontSize: '12px', fontWeight: 500,
                borderRadius: '20px', cursor: 'pointer', border: '1px solid',
                borderColor: activeFilter === f.value ? '#1D9E75' : '#e5e7eb',
                background: activeFilter === f.value ? '#E1F5EE' : '#fff',
                color: activeFilter === f.value ? '#0F6E56' : '#6b7280',
                transition: 'all 0.15s',
              }}
            >{f.label}</button>
          ))}
        </div>

        {/* Busca */}
        <input
          type="text"
          placeholder="Buscar guideline..."
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
        {filtered.length} guideline{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          {filtered.map(g => {
            const pm = PHASE_META[g.phase] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb', href: '#' };
            const tm = TYPE_META[g.type] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb' };
            return (
              <Link key={g.id} to={g.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{
                    border: '1px solid #e5e7eb',
                    borderTop: `3px solid ${g.typeColor}`,
                    borderRadius: '10px', background: '#fff',
                    padding: '16px', height: '100%',
                    cursor: 'pointer', transition: 'box-shadow 0.15s',
                    display: 'flex', flexDirection: 'column', gap: '10px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', lineHeight: 1.4 }}>
                      {g.name}
                    </div>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, padding: '2px 8px',
                      borderRadius: '99px', flexShrink: 0,
                      background: tm.bg, color: tm.color, border: `1px solid ${tm.border}`,
                    }}>
                      {g.type}
                    </span>
                  </div>

                  {/* Summary */}
                  <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {g.summary}
                  </p>

                  {/* Footer: fase linkada + seta */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <Link
                      to={pm.href}
                      onClick={e => e.stopPropagation()}
                      style={{ textDecoration: 'none' }}
                    >
                      <span style={{
                        fontSize: '10px', fontWeight: 500, padding: '2px 9px',
                        borderRadius: '99px', background: pm.bg, color: pm.color,
                        border: `1px solid ${pm.border}`, display: 'inline-block',
                      }}>{g.phase}</span>
                    </Link>
                    <span style={{ fontSize: '12px', color: '#d1d5db' }}>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '48px 0', color: '#9ca3af', fontSize: '14px' }}>
          Nenhum guideline encontrado para os filtros selecionados.
        </div>
      )}
    </div>
  );
}
