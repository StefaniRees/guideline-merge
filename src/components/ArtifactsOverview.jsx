import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const artifacts_pt = [
  { id: 'branch-atividade', name: 'Branch de Atividade', required: true, summary: 'Branch criada a partir da main ou homologação para implementar uma mudança de forma isolada e rastreável.', phases: ['Planejamento', 'Desenvolvimento'], href: '/docs/artifacts/branch-atividade' },
  { id: 'commits-padronizados', name: 'Commits Padronizados', required: true, summary: 'Commits pequenos e atômicos seguindo convenções semânticas, permitindo rastrear alterações e apoiar automação.', phases: ['Desenvolvimento', 'Pull Request'], href: '/docs/artifacts/commits-padronizados' },
  { id: 'pull-request', name: 'Pull Request (PR)', required: true, summary: 'Solicitação formal de integração contendo contexto, evidências e registros de revisão, com validações automáticas.', phases: ['Pull Request', 'Code Review', 'Approval'], href: '/docs/artifacts/pull-request' },
  { id: 'checklist-revisao', name: 'Checklist de Revisão', required: true, summary: 'Checklist estruturado para revisão técnica, assegurando critérios mínimos antes da aprovação do PR.', phases: ['Code Review', 'Approval'], href: '/docs/artifacts/checklist-revisao' },
  { id: 'feature-flag', name: 'Feature Flag', required: false, summary: 'Mecanismo de ativação controlada de funcionalidades, reduzindo dependência de branches de longa duração.', phases: ['Planejamento', 'Desenvolvimento', 'Release/Deploy'], href: '/docs/artifacts/feature-flag' },
  { id: 'historico-conflitos', name: 'Histórico de Conflitos', required: true, summary: 'Registro estruturado de conflitos, incluindo causas, decisões adotadas e lições aprendidas.', phases: ['Merge', 'Release/Deploy'], href: '/docs/artifacts/historico-conflitos' },
  { id: 'relatorio-build-ci', name: 'Relatório de Build/CI', required: true, summary: 'Evidência automática de build, testes e verificações, atuando como gate técnico antes da integração.', phases: ['Pull Request', 'Code Review'], href: '/docs/artifacts/relatorio-build-ci' },
  { id: 'relatorio-qa', name: 'Relatório de QA', required: true, summary: 'Consolidação de evidências de testes funcionais e de regressão em homologação.', phases: ['Approval', 'Merge'], href: '/docs/artifacts/relatorio-qa' },
  { id: 'release-notes', name: 'Release Notes', required: true, summary: 'Resumo das alterações integradas, promovendo comunicação clara e rastreabilidade pós-liberação.', phases: ['Release/Deploy'], href: '/docs/artifacts/release-notes' },
  { id: 'registro-decisao', name: 'Registro de Decisão', required: false, summary: 'Justificativas técnicas documentadas em PRs, revisões ou discussões, apoiando governança e auditoria.', phases: ['Pull Request', 'Code Review', 'Merge'], href: '/docs/artifacts/registro-decisao' },
];

const artifacts_en = [
  { id: 'branch-atividade', name: 'Activity Branch', required: true, summary: 'Branch created from main or staging to implement a change in an isolated and traceable way.', phases: ['Planning', 'Development'], href: '/docs/artifacts/branch-atividade' },
  { id: 'commits-padronizados', name: 'Standardized Commits', required: true, summary: 'Small, atomic commits following semantic conventions, enabling change tracking and supporting automation.', phases: ['Development', 'Pull Request'], href: '/docs/artifacts/commits-padronizados' },
  { id: 'pull-request', name: 'Pull Request (PR)', required: true, summary: 'Formal integration request containing context, evidence, and review records, with automated validations.', phases: ['Pull Request', 'Code Review', 'Approval'], href: '/docs/artifacts/pull-request' },
  { id: 'checklist-revisao', name: 'Review Checklist', required: true, summary: 'Structured checklist for technical review, ensuring minimum criteria before PR approval.', phases: ['Code Review', 'Approval'], href: '/docs/artifacts/checklist-revisao' },
  { id: 'feature-flag', name: 'Feature Flag', required: false, summary: 'Controlled feature activation mechanism, reducing dependency on long-lived branches.', phases: ['Planning', 'Development', 'Release/Deploy'], href: '/docs/artifacts/feature-flag' },
  { id: 'historico-conflitos', name: 'Conflict History', required: true, summary: 'Structured record of conflicts, including causes, decisions made, and lessons learned.', phases: ['Merge', 'Release/Deploy'], href: '/docs/artifacts/historico-conflitos' },
  { id: 'relatorio-build-ci', name: 'Build/CI Report', required: true, summary: 'Automatic evidence of build, tests, and checks, acting as a technical gate before integration.', phases: ['Pull Request', 'Code Review'], href: '/docs/artifacts/relatorio-build-ci' },
  { id: 'relatorio-qa', name: 'QA Report', required: true, summary: 'Consolidation of functional and regression test evidence in staging.', phases: ['Approval', 'Merge'], href: '/docs/artifacts/relatorio-qa' },
  { id: 'release-notes', name: 'Release Notes', required: true, summary: 'Summary of integrated changes, promoting clear communication and post-release traceability.', phases: ['Release/Deploy'], href: '/docs/artifacts/release-notes' },
  { id: 'registro-decisao', name: 'Decision Record', required: false, summary: 'Technical justifications documented in PRs, reviews, or discussions, supporting governance and auditing.', phases: ['Pull Request', 'Code Review', 'Merge'], href: '/docs/artifacts/registro-decisao' },
];

const PHASE_COLORS_PT = {
  'Planejamento':    { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/planejamento' },
  'Desenvolvimento': { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/desenvolvimento' },
  'Pull Request':    { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/docs/phases/pull-request' },
  'Code Review':     { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/docs/phases/code-review' },
  'Approval':        { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/docs/phases/approval' },
  'Merge':           { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC', href: '/docs/phases/merge' },
  'Release/Deploy':  { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/docs/phases/release-deploy' },
  'Rollback':        { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/docs/phases/rollback' },
};

const PHASE_COLORS_EN = {
  'Planning':        { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/planejamento' },
  'Development':     { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/desenvolvimento' },
  'Pull Request':    { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/docs/phases/pull-request' },
  'Code Review':     { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/docs/phases/code-review' },
  'Approval':        { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/docs/phases/approval' },
  'Merge':           { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC', href: '/docs/phases/merge' },
  'Release/Deploy':  { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/docs/phases/release-deploy' },
  'Rollback':        { bg: '#FBEAF0', color: '#72243E', border: '#ED93B1', href: '/docs/phases/rollback' },
};

const FILTER_GROUPS_PT = [
  { label: 'Todos', value: 'all' },
  { label: 'Preparação', value: 'prep', phases: ['Planejamento', 'Desenvolvimento'] },
  { label: 'Validação', value: 'val', phases: ['Pull Request', 'Code Review', 'Approval'] },
  { label: 'Integração', value: 'int', phases: ['Merge', 'Release/Deploy', 'Rollback'] },
  { label: 'Obrigatórios', value: 'required' },
  { label: 'Opcionais', value: 'optional' },
];

const FILTER_GROUPS_EN = [
  { label: 'All', value: 'all' },
  { label: 'Preparation', value: 'prep', phases: ['Planning', 'Development'] },
  { label: 'Validation', value: 'val', phases: ['Pull Request', 'Code Review', 'Approval'] },
  { label: 'Integration', value: 'int', phases: ['Merge', 'Release/Deploy', 'Rollback'] },
  { label: 'Required', value: 'required' },
  { label: 'Optional', value: 'optional' },
];

export default function ArtifactsOverview() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const artifacts      = isEN ? artifacts_en      : artifacts_pt;
  const PHASE_COLORS   = isEN ? PHASE_COLORS_EN   : PHASE_COLORS_PT;
  const FILTER_GROUPS  = isEN ? FILTER_GROUPS_EN  : FILTER_GROUPS_PT;
  const intro          = isEN
    ? 'MergeTrace artifacts materialize decisions, technical actions, and role interactions, constituting the main traceability mechanism by connecting phases, activities, responsibilities, and results.'
    : 'Os artefatos do MergeTrace materializam decisões, ações técnicas e interações entre papéis, constituindo o principal mecanismo de rastreabilidade ao conectar fases, atividades, responsáveis e resultados.';
  const placeholder    = isEN ? 'Search artifact...' : 'Buscar artefato...';
  const notFound       = isEN ? 'No artifacts found for the selected filters.' : 'Nenhum artefato encontrado para os filtros selecionados.';
  const requiredLabel  = isEN ? 'Required' : 'Obrigatório';
  const optionalLabel  = isEN ? 'Optional' : 'Opcional';
  const foundLabel     = isEN
    ? (n) => `${n} artifact${n !== 1 ? 's' : ''} found`
    : (n) => `${n} artefato${n !== 1 ? 's' : ''} encontrado${n !== 1 ? 's' : ''}`;

  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = artifacts.filter(a => {
    const matchSearch = search === '' || a.name.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase());
    const group = FILTER_GROUPS.find(f => f.value === activeFilter);
    const matchFilter =
      activeFilter === 'all'      ? true :
      activeFilter === 'required' ? a.required :
      activeFilter === 'optional' ? !a.required :
      a.phases.some(p => group?.phases?.includes(p));
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, borderLeft: '3px solid #1D9E75', background: '#f0faf6', borderRadius: '0 6px 6px 0', padding: '10px 12px', marginBottom: '24px' }}>
        {intro}
      </p>

      {/* Toolbar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {FILTER_GROUPS.map(f => (
            <button key={f.value} onClick={() => setActiveFilter(f.value)} style={{ padding: '5px 14px', fontSize: '12px', fontWeight: 500, borderRadius: '20px', cursor: 'pointer', border: '1px solid', borderColor: activeFilter === f.value ? '#1D9E75' : '#e5e7eb', background: activeFilter === f.value ? '#E1F5EE' : '#fff', color: activeFilter === f.value ? '#0F6E56' : '#6b7280', transition: 'all 0.15s' }}>{f.label}</button>
          ))}
        </div>
        <input type="text" placeholder={placeholder} value={search} onChange={e => setSearch(e.target.value)} style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none', width: '200px', color: '#374151', background: '#fff' }} />
      </div>

      {/* Counter */}
      <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '16px' }}>
        {foundLabel(filtered.length)}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
          {filtered.map(artifact => (
            <Link key={artifact.id} to={artifact.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ border: '1px solid #e5e7eb', borderTop: `3px solid ${artifact.required ? '#1D9E75' : '#d1d5db'}`, borderRadius: '10px', background: '#fff', padding: '16px', height: '100%', cursor: 'pointer', transition: 'box-shadow 0.15s', display: 'flex', flexDirection: 'column', gap: '10px' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', lineHeight: 1.4 }}>{artifact.name}</div>
                  <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '99px', flexShrink: 0, background: artifact.required ? '#E1F5EE' : '#F3F4F6', color: artifact.required ? '#0F6E56' : '#6b7280', border: `1px solid ${artifact.required ? '#9FE1CB' : '#e5e7eb'}` }}>
                    {artifact.required ? requiredLabel : optionalLabel}
                  </span>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6, margin: 0, flex: 1 }}>{artifact.summary}</p>

                {/* Phase pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: 'auto' }}>
                  {artifact.phases.map((phase, i) => {
                    const c = PHASE_COLORS[phase] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb', href: '#' };
                    return (
                      <Link key={i} to={c.href} onClick={e => e.stopPropagation()} style={{ textDecoration: 'none' }}>
                        <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '99px', background: c.bg, color: c.color, border: `1px solid ${c.border}`, display: 'inline-block' }}>{phase}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '48px 0', color: '#9ca3af', fontSize: '14px' }}>{notFound}</div>
      )}
    </div>
  );
}
