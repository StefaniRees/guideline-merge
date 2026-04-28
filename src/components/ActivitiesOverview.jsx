import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const activities_pt = [
  { id: 'A1', title: 'Criar Branch', phase: 'Planejamento', phaseColor: '#639922', roles: ['Developer A', 'Developer B'], summary: 'Criar branch curta e rastreável a partir da main/homologação.', href: '/docs/activities/criar-branch' },
  { id: 'A2', title: 'Implementar Mudanças', phase: 'Desenvolvimento', phaseColor: '#639922', roles: ['Developer A', 'Developer B'], summary: 'Implementar mudanças com commits pequenos e atômicos, sincronizando frequentemente com a main.', href: '/docs/activities/implementar-mudancas' },
  { id: 'A3', title: 'Abrir Pull Request', phase: 'Pull Request', phaseColor: '#378ADD', roles: ['Developer A', 'Developer B'], summary: 'Criar PR com contexto, impacto, riscos e evidências utilizando template obrigatório.', href: '/docs/activities/abrir-pr' },
  { id: 'A4', title: 'Executar Build e Testes (CI/CD)', phase: 'Pull Request', phaseColor: '#378ADD', roles: ['Developer A', 'Developer B'], summary: 'Executar pipeline automático para validar build, qualidade, cobertura e segurança.', href: '/docs/activities/build-ci-cd' },
  { id: 'A5', title: 'Code Review', phase: 'Code Review', phaseColor: '#BA7517', roles: ['Mediador'], summary: 'Revisar PR com checklist técnico e colaborativo, garantindo resolução dos comentários.', href: '/docs/activities/code-review' },
  { id: 'A6', title: 'Resolver Conflitos de Merge', phase: 'Merge', phaseColor: '#7F77DD', roles: ['Developer A', 'Developer B', 'Mediador'], summary: 'Identificar e resolver conflitos entre branch e main, registrando causas e decisões.', href: '/docs/activities/resolver-conflitos' },
  { id: 'A7', title: 'Validar em Homologação (QA)', phase: 'Code Review', phaseColor: '#BA7517', roles: ['Developer A', 'Developer B'], summary: 'Executar testes funcionais e regressão em homologação antes do merge final.', href: '/docs/activities/qa-homologacao' },
  { id: 'A8', title: 'Merge Final', phase: 'Merge', phaseColor: '#7F77DD', roles: ['Mediador'], summary: 'Integrar branch na main/release após aprovações e gerar Release Notes.', href: '/docs/activities/merge-final' },
];

const activities_en = [
  { id: 'A1', title: 'Create Branch', phase: 'Planning', phaseColor: '#639922', roles: ['Developer A', 'Developer B'], summary: 'Create a short, traceable branch from main/staging.', href: '/docs/activities/criar-branch' },
  { id: 'A2', title: 'Implement Changes', phase: 'Development', phaseColor: '#639922', roles: ['Developer A', 'Developer B'], summary: 'Implement changes with small, atomic commits, syncing frequently with main.', href: '/docs/activities/implementar-mudancas' },
  { id: 'A3', title: 'Open Pull Request', phase: 'Pull Request', phaseColor: '#378ADD', roles: ['Developer A', 'Developer B'], summary: 'Create PR with context, impact, risks, and evidence using the mandatory template.', href: '/docs/activities/abrir-pr' },
  { id: 'A4', title: 'Run Build and Tests (CI/CD)', phase: 'Pull Request', phaseColor: '#378ADD', roles: ['Developer A', 'Developer B'], summary: 'Run automated pipeline to validate build, quality, coverage, and security.', href: '/docs/activities/build-ci-cd' },
  { id: 'A5', title: 'Code Review', phase: 'Code Review', phaseColor: '#BA7517', roles: ['Mediator'], summary: 'Review PR with a technical and collaborative checklist, ensuring all comments are resolved.', href: '/docs/activities/code-review' },
  { id: 'A6', title: 'Resolve Merge Conflicts', phase: 'Merge', phaseColor: '#7F77DD', roles: ['Developer A', 'Developer B', 'Mediator'], summary: 'Identify and resolve conflicts between branch and main, recording causes and decisions.', href: '/docs/activities/resolver-conflitos' },
  { id: 'A7', title: 'Validate in Staging (QA)', phase: 'Code Review', phaseColor: '#BA7517', roles: ['Developer A', 'Developer B'], summary: 'Run functional and regression tests in staging before the final merge.', href: '/docs/activities/qa-homologacao' },
  { id: 'A8', title: 'Final Merge', phase: 'Merge', phaseColor: '#7F77DD', roles: ['Mediator'], summary: 'Integrate branch into main/release after approvals and generate Release Notes.', href: '/docs/activities/merge-final' },
];

const PHASE_META_PT = {
  'Planejamento':    { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/planejamento' },
  'Desenvolvimento': { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/desenvolvimento' },
  'Pull Request':    { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/docs/phases/pull-request' },
  'Code Review':     { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/docs/phases/code-review' },
  'Merge':           { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC', href: '/docs/phases/merge' },
};

const PHASE_META_EN = {
  'Planning':    { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/planejamento' },
  'Development': { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459', href: '/docs/phases/desenvolvimento' },
  'Pull Request':{ bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/docs/phases/pull-request' },
  'Code Review': { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27', href: '/docs/phases/code-review' },
  'Merge':       { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC', href: '/docs/phases/merge' },
};

const ROLE_META_PT = {
  'Developer A': { bg: '#E1F5EE', color: '#0F6E56', border: '#9FE1CB', href: '/docs/roles/developer-principal' },
  'Developer B': { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/docs/roles/developer-integrador' },
  'Mediador':    { bg: '#EEEDFE', color: '#534AB7', border: '#AFA9EC', href: '/docs/roles/mediador' },
};

const ROLE_META_EN = {
  'Developer A': { bg: '#E1F5EE', color: '#0F6E56', border: '#9FE1CB', href: '/docs/roles/developer-principal' },
  'Developer B': { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB', href: '/docs/roles/developer-integrador' },
  'Mediator':    { bg: '#EEEDFE', color: '#534AB7', border: '#AFA9EC', href: '/docs/roles/mediador' },
};

const FILTER_GROUPS_PT = [
  { label: 'Todas', value: 'all' },
  { label: 'Preparação', value: 'prep', phases: ['Planejamento', 'Desenvolvimento'] },
  { label: 'Validação', value: 'val', phases: ['Pull Request', 'Code Review', 'Approval'] },
  { label: 'Integração', value: 'int', phases: ['Merge', 'Release/Deploy'] },
];

const FILTER_GROUPS_EN = [
  { label: 'All', value: 'all' },
  { label: 'Preparation', value: 'prep', phases: ['Planning', 'Development'] },
  { label: 'Validation', value: 'val', phases: ['Pull Request', 'Code Review', 'Approval'] },
  { label: 'Integration', value: 'int', phases: ['Merge', 'Release/Deploy'] },
];

export default function ActivitiesOverview() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const activities    = isEN ? activities_en    : activities_pt;
  const PHASE_META    = isEN ? PHASE_META_EN    : PHASE_META_PT;
  const ROLE_META     = isEN ? ROLE_META_EN     : ROLE_META_PT;
  const FILTER_GROUPS = isEN ? FILTER_GROUPS_EN : FILTER_GROUPS_PT;
  const intro         = isEN
    ? 'Activities materialize MergeTrace phases into executable actions, with inputs, outputs, and responsible roles. Each activity is linked to a phase and a specific quality gate.'
    : 'As atividades materializam as fases do MergeTrace em ações executáveis, com entradas, saídas e papéis responsáveis. Cada atividade está vinculada a uma fase e a um quality gate específico.';
  const placeholder   = isEN ? 'Search activity...' : 'Buscar atividade...';
  const notFound      = isEN ? 'No activities found for the selected filters.' : 'Nenhuma atividade encontrada para os filtros selecionados.';
  const foundLabel    = isEN
    ? (n) => `${n} activit${n !== 1 ? 'ies' : 'y'} found`
    : (n) => `${n} atividade${n !== 1 ? 's' : ''} encontrada${n !== 1 ? 's' : ''}`;

  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = activities.filter(a => {
    const matchSearch = search === '' || a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase());
    const group = FILTER_GROUPS.find(f => f.value === activeFilter);
    const matchFilter = activeFilter === 'all' ? true : group?.phases?.includes(a.phase);
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

      {/* List */}
      {filtered.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map(activity => {
            const pm = PHASE_META[activity.phase] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb', href: '#' };
            return (
              <Link key={activity.id} to={activity.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid #e5e7eb', borderLeft: `4px solid ${activity.phaseColor}`, borderRadius: '10px', background: '#fff', transition: 'box-shadow 0.15s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

                  {/* Badge ID */}
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${activity.phaseColor}15`, border: `1px solid ${activity.phaseColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: activity.phaseColor, flexShrink: 0 }}>
                    {activity.id}
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{activity.title}</div>
                    <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, marginBottom: '10px' }}>{activity.summary}</div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <Link to={pm.href} onClick={e => e.stopPropagation()} style={{ textDecoration: 'none' }}>
                        <span style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '99px', background: pm.bg, color: pm.color, border: `1px solid ${pm.border}`, fontWeight: 500, display: 'inline-block' }}>{activity.phase}</span>
                      </Link>
                      <span style={{ color: '#e5e7eb', fontSize: '12px' }}>·</span>
                      {activity.roles.map((role, i) => {
                        const rm = ROLE_META[role] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb', href: '#' };
                        return (
                          <Link key={i} to={rm.href} onClick={e => e.stopPropagation()} style={{ textDecoration: 'none' }}>
                            <span style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '99px', background: rm.bg, color: rm.color, border: `1px solid ${rm.border}`, fontWeight: 500, display: 'inline-block' }}>{role}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ fontSize: '16px', color: '#d1d5db', flexShrink: 0 }}>→</div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '48px 0', color: '#9ca3af', fontSize: '14px' }}>{notFound}</div>
      )}
    </div>
  );
}
