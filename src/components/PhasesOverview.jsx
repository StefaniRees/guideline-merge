import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// ── PT-BR content ────────────────────────────────────────────────────────
const phases_pt = [
  { id: 'P1', title: 'Planejamento', color: '#639922', href: '/docs/phases/planejamento', obj: 'Preparar o contexto para um merge seguro, antecipando riscos e alinhando escopo, convenções e sincronização.', artifacts: 'Ticket priorizado; convenções de branches e commits; plano de sincronização.', roles: ['Developer A', 'Developer B', 'Mediador'], gate: 'Branch Naming Convention' },
  { id: 'P2', title: 'Desenvolvimento', color: '#639922', href: '/docs/phases/desenvolvimento', obj: 'Implementar mudanças com commits pequenos e atômicos. Sincronizar frequentemente com a main e executar testes locais.', artifacts: 'Histórico de commits padronizados; branch atualizada; evidências de testes locais.', roles: ['Developer A', 'Developer B'], gate: 'Commit Message Convention' },
  { id: 'P3', title: 'Pull Request', color: '#378ADD', href: '/docs/phases/pull-request', obj: 'Criar PR com contexto, impacto, riscos e evidências. Utilizar template e checklist obrigatórios.', artifacts: 'PR com template; checklist preenchido; ticket vinculado; diffs de código.', roles: ['Developer A', 'Developer B'], gate: 'Pull Request Template + CI/CD Quality Gates' },
  { id: 'P4', title: 'Code Review', color: '#BA7517', href: '/docs/phases/code-review', obj: 'Revisar PR com checklist técnico e colaborativo. Garantir resolução completa dos comentários. Validar em homologação (QA).', artifacts: 'Comentários de revisão; checklist concluído; registros de decisões técnicas; relatório de QA.', roles: ['Mediador', 'Developer A', 'Developer B'], gate: 'Code Review Checklist + QA in Homolog' },
  { id: 'P5', title: 'Approval', color: '#BA7517', href: '/docs/phases/approval', obj: 'Executar pipeline automático para validar build e qualidade. Autorizar formalmente a integração.', artifacts: 'Registro de aprovação; PR em estado aprovado.', roles: ['Mediador'], gate: 'CI/CD Quality Gates + Approval Policy' },
  { id: 'P6', title: 'Merge', color: '#7F77DD', href: '/docs/phases/merge', obj: 'Identificar e resolver conflitos entre branch e main. Registrar causas, decisões e histórico de resolução. Integrar branch na main/release após aprovações.', artifacts: 'Merge commit ou squash; build de integração; histórico de conflitos; registro de decisão.', roles: ['Mediador', 'Developer A', 'Developer B'], gate: 'Conflict Resolution Procedure + Release Notes Standard' },
  { id: 'P7', title: 'Release / Deploy', color: '#993556', href: '/docs/phases/release-deploy', obj: 'Gerar Release Notes e disponibilizar a versão integrada. Monitorar comportamento em produção.', artifacts: 'Release implantada; release notes; logs de deploy e monitoramento.', roles: ['Developer A', 'Developer B', 'Mediador'], gate: 'Release Notes Standard' },
  { id: 'P8', title: 'Rollback', color: '#993556', href: '/docs/phases/rollback', obj: 'Reverter a integração de forma controlada e documentada quando problemas críticos são detectados em produção.', artifacts: 'Plano de rollback; commit ou versão anterior; registro de incidente.', roles: ['Developer A', 'Developer B', 'Mediador'], gate: 'Rollback Strategy' },
];

const groups_pt = [
  { label: 'Preparação', sublabel: 'Antes do merge', color: '#3B6D11', bg: '#EAF3DE', border: '#97C459', phaseIds: ['P1', 'P2'] },
  { label: 'Validação', sublabel: 'Revisão colaborativa', color: '#854F0B', bg: '#FAEEDA', border: '#EF9F27', phaseIds: ['P3', 'P4', 'P5'] },
  { label: 'Integração', sublabel: 'Liberação e controle', color: '#3C3489', bg: '#EEEDFE', border: '#AFA9EC', phaseIds: ['P6', 'P7', 'P8'] },
];

const wbsRows_pt = [
  { phaseId: 'P1', activity: 'A1 — Criar Branch', roles: ['Developer A', 'Developer B'], gate: 'Branch Naming Convention' },
  { phaseId: 'P2', activity: 'A2 — Implementar Mudanças na Branch', roles: ['Developer A', 'Developer B'], gate: 'Commit Message Convention' },
  { phaseId: 'P3', activity: 'A3 — Abrir Pull Request\nA4 — Executar Build e Testes (CI/CD)', roles: ['Developer A', 'Developer B'], gate: 'Pull Request Template\nCI/CD Quality Gates' },
  { phaseId: 'P4', activity: 'A5 — Code Review\nA7 — Validar em Homologação (QA)', roles: ['Mediador', 'Developer A', 'Developer B'], gate: 'Code Review Checklist\nQA in Homolog' },
  { phaseId: 'P5', activity: 'A4 — Executar Build e Testes (CI/CD)', roles: ['Mediador'], gate: 'CI/CD Quality Gates\nApproval Policy' },
  { phaseId: 'P6', activity: 'A6 — Resolver Conflitos de Merge\nA8 — Merge Final', roles: ['Developer A', 'Developer B', 'Mediador'], gate: 'Conflict Resolution Procedure\nRelease Notes Standard' },
  { phaseId: 'P7', activity: 'A8 — Merge Final (liberação)', roles: ['Developer A', 'Developer B', 'Mediador'], gate: 'Release Notes Standard' },
  { phaseId: 'P8', activity: 'Reversão controlada', roles: ['Developer A', 'Developer B', 'Mediador'], gate: 'Rollback Strategy' },
];

const workProducts_pt = [
  { artifact: 'Branch de atividade; ticket priorizado; plano de sincronização', artifactHref: '/docs/artifacts/branch-atividade', phaseId: 'P1', byList: ['Developer A', 'Developer B', 'Mediador'] },
  { artifact: 'Commits padronizados; branch atualizada; evidências de testes locais', artifactHref: '/docs/artifacts/commits-padronizados', phaseId: 'P2', byList: ['Developer A', 'Developer B'] },
  { artifact: 'Pull Request (template + checklist preenchido)', artifactHref: '/docs/artifacts/pull-request', phaseId: 'P3', byList: ['Developer A', 'Developer B'] },
  { artifact: 'Relatório de Build/CI; Relatório de Qualidade', artifactHref: '/docs/artifacts/relatorio-build-ci', phaseId: 'P3', byList: [], byLabel: 'Pipeline automático' },
  { artifact: 'Checklist de revisão concluído; registros de decisões técnicas', artifactHref: '/docs/artifacts/checklist-revisao', phaseId: 'P4', byList: ['Mediador'] },
  { artifact: 'Relatório de QA', artifactHref: '/docs/artifacts/relatorio-qa', phaseId: 'P4', byList: ['Developer A', 'Developer B'] },
  { artifact: 'Registro de decisão; PR em estado aprovado', artifactHref: '/docs/artifacts/registro-decisao', phaseId: 'P5', byList: ['Mediador'] },
  { artifact: 'Histórico de conflitos; merge commit', artifactHref: '/docs/artifacts/historico-conflitos', phaseId: 'P6', byList: ['Developer A', 'Developer B', 'Mediador'] },
  { artifact: 'Release Notes; release implantada', artifactHref: '/docs/artifacts/release-notes', phaseId: 'P7', byList: ['Developer A', 'Developer B', 'Mediador'] },
  { artifact: 'Feature Flag (ativação controlada)', artifactHref: '/docs/artifacts/feature-flag', phaseId: 'P7', byList: ['Developer A', 'Developer B', 'Mediador'] },
  { artifact: 'Plano de rollback; registro de incidente', artifactHref: null, phaseId: 'P8', byList: ['Developer A', 'Developer B', 'Mediador'] },
];

const teamAllocation_pt = [
  { initials: 'DA', name: 'Developer A', avatarBg: '#E1F5EE', avatarColor: '#0F6E56', href: '/docs/roles/developer-principal', desc: 'Responsável pela criação da branch, implementação das mudanças e abertura do PR. Colabora na resolução de conflitos e na validação em homologação.', phaseIds: ['P1','P2','P3','P4','P6','P7','P8'] },
  { initials: 'DB', name: 'Developer B', avatarBg: '#E6F1FB', avatarColor: '#185FA5', href: '/docs/roles/developer-integrador', desc: 'Co-desenvolve, sincroniza a branch com a main e colabora na resolução de conflitos e nos testes locais antes do PR.', phaseIds: ['P1','P2','P3','P4','P6','P7','P8'] },
  { initials: 'MD', name: 'Mediador', avatarBg: '#EEEDFE', avatarColor: '#534AB7', href: '/docs/roles/mediador', desc: 'Conduz o code review, formaliza a aprovação, coordena a resolução de conflitos não triviais e executa o merge final e o rollback.', phaseIds: ['P1','P4','P5','P6','P7','P8'] },
];

const TABS_pt = ['Descrição', 'Work Breakdown', 'Alocação de Papéis', 'Work Products'];
const intro_pt = 'O MergeTrace estrutura o processo de merge em 8 fases operacionais sequenciais, organizadas em 3 estágios. Cada fase tem objetivo central, artefatos-chave, papéis envolvidos e um quality gate de transição.';
const verPagina_pt = 'Ver página →';
const objetivo_pt = 'Objetivo';
const artefatos_pt = 'Artefatos-chave';
const papeis_pt = 'Papéis envolvidos';
const gate_pt = 'Quality Gate';
const atuaFases_pt = 'Atua nas fases:';
const wbsCols_pt = ['Fase', 'Atividade (Tab. 19)', 'Papéis', 'Quality Gate'];
const wpCols_pt = ['Artefato (Tab. 18)', 'Fase', 'Produzido por'];
const fluxo_pt = 'Fluxo de fases — 3 estágios';

// ── EN content ────────────────────────────────────────────────────────────
const phases_en = [
  { id: 'P1', title: 'Planning', color: '#639922', href: '/docs/phases/planejamento', obj: 'Prepare the context for a safe merge, anticipating risks and aligning scope, conventions, and synchronization.', artifacts: 'Prioritized ticket; branch and commit conventions; synchronization plan.', roles: ['Developer A', 'Developer B', 'Mediator'], gate: 'Branch Naming Convention' },
  { id: 'P2', title: 'Development', color: '#639922', href: '/docs/phases/desenvolvimento', obj: 'Implement changes with small, atomic commits. Sync frequently with main and run local tests.', artifacts: 'Standardized commit history; updated branch; local test evidence.', roles: ['Developer A', 'Developer B'], gate: 'Commit Message Convention' },
  { id: 'P3', title: 'Pull Request', color: '#378ADD', href: '/docs/phases/pull-request', obj: 'Create PR with context, impact, risks, and evidence. Use mandatory template and checklist.', artifacts: 'PR with template; filled checklist; linked ticket; code diffs.', roles: ['Developer A', 'Developer B'], gate: 'Pull Request Template + CI/CD Quality Gates' },
  { id: 'P4', title: 'Code Review', color: '#BA7517', href: '/docs/phases/code-review', obj: 'Review PR with technical and collaborative checklist. Ensure complete resolution of comments. Validate in staging (QA).', artifacts: 'Review comments; completed checklist; technical decision records; QA report.', roles: ['Mediator', 'Developer A', 'Developer B'], gate: 'Code Review Checklist + QA in Homolog' },
  { id: 'P5', title: 'Approval', color: '#BA7517', href: '/docs/phases/approval', obj: 'Run automated pipeline to validate build and quality. Formally authorize integration.', artifacts: 'Approval record; PR in approved state.', roles: ['Mediator'], gate: 'CI/CD Quality Gates + Approval Policy' },
  { id: 'P6', title: 'Merge', color: '#7F77DD', href: '/docs/phases/merge', obj: 'Identify and resolve conflicts between branch and main. Record causes, decisions, and resolution history. Integrate branch into main/release after approvals.', artifacts: 'Merge commit or squash; integration build; conflict history; decision record.', roles: ['Mediator', 'Developer A', 'Developer B'], gate: 'Conflict Resolution Procedure + Release Notes Standard' },
  { id: 'P7', title: 'Release / Deploy', color: '#993556', href: '/docs/phases/release-deploy', obj: 'Generate Release Notes and make the integrated version available. Monitor production behavior.', artifacts: 'Deployed release; release notes; deploy and monitoring logs.', roles: ['Developer A', 'Developer B', 'Mediator'], gate: 'Release Notes Standard' },
  { id: 'P8', title: 'Rollback', color: '#993556', href: '/docs/phases/rollback', obj: 'Revert the integration in a controlled and documented manner when critical issues are detected in production.', artifacts: 'Rollback plan; previous commit or version; incident record.', roles: ['Developer A', 'Developer B', 'Mediator'], gate: 'Rollback Strategy' },
];

const groups_en = [
  { label: 'Preparation', sublabel: 'Before the merge', color: '#3B6D11', bg: '#EAF3DE', border: '#97C459', phaseIds: ['P1', 'P2'] },
  { label: 'Validation', sublabel: 'Collaborative review', color: '#854F0B', bg: '#FAEEDA', border: '#EF9F27', phaseIds: ['P3', 'P4', 'P5'] },
  { label: 'Integration', sublabel: 'Release and control', color: '#3C3489', bg: '#EEEDFE', border: '#AFA9EC', phaseIds: ['P6', 'P7', 'P8'] },
];

const wbsRows_en = [
  { phaseId: 'P1', activity: 'A1 — Create Branch', roles: ['Developer A', 'Developer B'], gate: 'Branch Naming Convention' },
  { phaseId: 'P2', activity: 'A2 — Implement Changes in Branch', roles: ['Developer A', 'Developer B'], gate: 'Commit Message Convention' },
  { phaseId: 'P3', activity: 'A3 — Open Pull Request\nA4 — Run Build and Tests (CI/CD)', roles: ['Developer A', 'Developer B'], gate: 'Pull Request Template\nCI/CD Quality Gates' },
  { phaseId: 'P4', activity: 'A5 — Code Review\nA7 — Validate in Staging (QA)', roles: ['Mediator', 'Developer A', 'Developer B'], gate: 'Code Review Checklist\nQA in Homolog' },
  { phaseId: 'P5', activity: 'A4 — Run Build and Tests (CI/CD)', roles: ['Mediator'], gate: 'CI/CD Quality Gates\nApproval Policy' },
  { phaseId: 'P6', activity: 'A6 — Resolve Merge Conflicts\nA8 — Final Merge', roles: ['Developer A', 'Developer B', 'Mediator'], gate: 'Conflict Resolution Procedure\nRelease Notes Standard' },
  { phaseId: 'P7', activity: 'A8 — Final Merge (release)', roles: ['Developer A', 'Developer B', 'Mediator'], gate: 'Release Notes Standard' },
  { phaseId: 'P8', activity: 'Controlled rollback', roles: ['Developer A', 'Developer B', 'Mediator'], gate: 'Rollback Strategy' },
];

const workProducts_en = [
  { artifact: 'Activity branch; prioritized ticket; sync plan', artifactHref: '/docs/artifacts/branch-atividade', phaseId: 'P1', byList: ['Developer A', 'Developer B', 'Mediator'] },
  { artifact: 'Standardized commits; updated branch; local test evidence', artifactHref: '/docs/artifacts/commits-padronizados', phaseId: 'P2', byList: ['Developer A', 'Developer B'] },
  { artifact: 'Pull Request (template + filled checklist)', artifactHref: '/docs/artifacts/pull-request', phaseId: 'P3', byList: ['Developer A', 'Developer B'] },
  { artifact: 'Build/CI Report; Quality Report', artifactHref: '/docs/artifacts/relatorio-build-ci', phaseId: 'P3', byList: [], byLabel: 'Automated pipeline' },
  { artifact: 'Completed review checklist; technical decision records', artifactHref: '/docs/artifacts/checklist-revisao', phaseId: 'P4', byList: ['Mediator'] },
  { artifact: 'QA Report', artifactHref: '/docs/artifacts/relatorio-qa', phaseId: 'P4', byList: ['Developer A', 'Developer B'] },
  { artifact: 'Decision record; PR in approved state', artifactHref: '/docs/artifacts/registro-decisao', phaseId: 'P5', byList: ['Mediator'] },
  { artifact: 'Conflict history; merge commit', artifactHref: '/docs/artifacts/historico-conflitos', phaseId: 'P6', byList: ['Developer A', 'Developer B', 'Mediator'] },
  { artifact: 'Release Notes; deployed release', artifactHref: '/docs/artifacts/release-notes', phaseId: 'P7', byList: ['Developer A', 'Developer B', 'Mediator'] },
  { artifact: 'Feature Flag (controlled activation)', artifactHref: '/docs/artifacts/feature-flag', phaseId: 'P7', byList: ['Developer A', 'Developer B', 'Mediator'] },
  { artifact: 'Rollback plan; incident record', artifactHref: null, phaseId: 'P8', byList: ['Developer A', 'Developer B', 'Mediator'] },
];

const teamAllocation_en = [
  { initials: 'DA', name: 'Developer A', avatarBg: '#E1F5EE', avatarColor: '#0F6E56', href: '/docs/roles/developer-principal', desc: 'Responsible for creating the branch, implementing changes, and opening the PR. Collaborates on conflict resolution and staging validation.', phaseIds: ['P1','P2','P3','P4','P6','P7','P8'] },
  { initials: 'DB', name: 'Developer B', avatarBg: '#E6F1FB', avatarColor: '#185FA5', href: '/docs/roles/developer-integrador', desc: 'Co-develops, syncs the branch with main, and collaborates on conflict resolution and local tests before the PR.', phaseIds: ['P1','P2','P3','P4','P6','P7','P8'] },
  { initials: 'MD', name: 'Mediator', avatarBg: '#EEEDFE', avatarColor: '#534AB7', href: '/docs/roles/mediador', desc: 'Conducts code review, formalizes approval, coordinates non-trivial conflict resolution, and executes the final merge and rollback.', phaseIds: ['P1','P4','P5','P6','P7','P8'] },
];

const TABS_en = ['Description', 'Work Breakdown', 'Role Allocation', 'Work Products'];
const intro_en = 'MergeTrace structures the merge process into 8 sequential operational phases, organized into 3 stages. Each phase has a central objective, key artifacts, roles involved, and a transition quality gate.';
const verPagina_en = 'View page →';
const objetivo_en = 'Objective';
const artefatos_en = 'Key artifacts';
const papeis_en = 'Roles involved';
const gate_en = 'Quality Gate';
const atuaFases_en = 'Active in phases:';
const wbsCols_en = ['Phase', 'Activity (Tab. 19)', 'Roles', 'Quality Gate'];
const wpCols_en = ['Artifact (Tab. 18)', 'Phase', 'Produced by'];
const fluxo_en = 'Phase flow — 3 stages';

// ── Shared styles ─────────────────────────────────────────────────────────
const sl = { fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' };
const pill = (bg, color) => ({ display: 'inline-block', fontSize: '11px', padding: '3px 9px', borderRadius: '20px', background: bg, color, margin: '2px' });
const thSt = { textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '8px 12px', borderBottom: '1px solid #e5e7eb' };
const tdSt = { padding: '10px 12px', verticalAlign: 'top', borderBottom: '1px solid #f3f4f6' };

const roleColor = {
  'Developer A': { bg: '#E1F5EE', color: '#0F6E56' },
  'Developer B': { bg: '#E6F1FB', color: '#185FA5' },
  'Mediador':    { bg: '#EEEDFE', color: '#534AB7' },
  'Mediator':    { bg: '#EEEDFE', color: '#534AB7' },
};

const roleHref_pt = { 'Developer A': '/docs/roles/developer-principal', 'Developer B': '/docs/roles/developer-integrador', 'Mediador': '/docs/roles/mediador' };
const roleHref_en = { 'Developer A': '/docs/roles/developer-principal', 'Developer B': '/docs/roles/developer-integrador', 'Mediator': '/docs/roles/mediador' };

function RolePill({ role, roleHref }) {
  return (
    <Link to={roleHref[role]} style={{ textDecoration: 'none' }}>
      <span style={pill(roleColor[role]?.bg, roleColor[role]?.color)}>{role}</span>
    </Link>
  );
}

export default function PhasesOverview() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const phases        = isEN ? phases_en        : phases_pt;
  const groups        = isEN ? groups_en        : groups_pt;
  const wbsRows       = isEN ? wbsRows_en       : wbsRows_pt;
  const workProducts  = isEN ? workProducts_en  : workProducts_pt;
  const teamAlloc     = isEN ? teamAllocation_en : teamAllocation_pt;
  const TABS          = isEN ? TABS_en          : TABS_pt;
  const roleHref      = isEN ? roleHref_en      : roleHref_pt;
  const intro         = isEN ? intro_en         : intro_pt;
  const verPagina     = isEN ? verPagina_en     : verPagina_pt;
  const labelObj      = isEN ? objetivo_en      : objetivo_pt;
  const labelArt      = isEN ? artefatos_en     : artefatos_pt;
  const labelPap      = isEN ? papeis_en        : papeis_pt;
  const labelGate     = isEN ? gate_en          : gate_pt;
  const labelFases    = isEN ? atuaFases_en     : atuaFases_pt;
  const wbsCols       = isEN ? wbsCols_en       : wbsCols_pt;
  const wpCols        = isEN ? wpCols_en        : wpCols_pt;
  const labelFluxo    = isEN ? fluxo_en         : fluxo_pt;

  const [activeTab, setActiveTab] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState(0);
  const phase = phases[selectedPhase];

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, borderLeft: '3px solid #1D9E75', background: '#f0faf6', borderRadius: '0 6px 6px 0', padding: '10px 12px', marginBottom: '24px' }}>
        {intro} <em>(Table 18)</em>
      </p>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: '24px' }}>
        {TABS.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)} style={{
            padding: '8px 18px', fontSize: '13px', fontWeight: 500,
            color: activeTab === i ? '#1D9E75' : '#6b7280',
            background: 'none', border: 'none',
            borderBottom: activeTab === i ? '2px solid #1D9E75' : '2px solid transparent',
            cursor: 'pointer', marginBottom: '-1px',
          }}>{tab}</button>
        ))}
      </div>

      {/* TAB 0: Description */}
      {activeTab === 0 && (
        <>
          <div style={sl}>{labelFluxo}</div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {groups.map((g, gi) => (
              <React.Fragment key={g.label}>
                <div style={{ flex: 1, minWidth: '180px', border: `1.5px solid ${g.border}`, borderRadius: '12px', background: g.bg, padding: '12px 10px' }}>
                  <div style={{ marginBottom: '12px', paddingBottom: '8px', borderBottom: `1px solid ${g.border}` }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: g.color }}>{g.label}</div>
                    <div style={{ fontSize: '11px', color: g.color, opacity: 0.75, marginTop: '2px' }}>{g.sublabel}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {g.phaseIds.map((pid, pi) => {
                      const p = phases.find(ph => ph.id === pid);
                      const idx = phases.indexOf(p);
                      const isSel = selectedPhase === idx;
                      return (
                        <React.Fragment key={pid}>
                          <div onClick={() => setSelectedPhase(idx)} style={{ background: isSel ? `${p.color}15` : '#fff', border: `1.5px solid ${isSel ? p.color : '#e5e7eb'}`, borderRadius: '8px', padding: '10px 12px', cursor: 'pointer', transition: 'border-color 0.15s', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}`, borderRadius: '6px', padding: '3px 8px', flexShrink: 0 }}>{p.id}</span>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{p.title}</span>
                          </div>
                          {pi < g.phaseIds.length - 1 && <div style={{ textAlign: 'center', color: g.color, fontSize: '13px', opacity: 0.5 }}>↓</div>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                {gi < groups.length - 1 && <div style={{ display: 'flex', alignItems: 'center', fontSize: '22px', color: '#d1d5db', flexShrink: 0 }}>›</div>}
              </React.Fragment>
            ))}
          </div>

          {/* Detail panel */}
          <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '18px 20px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: phase.color, background: `${phase.color}15`, border: `1px solid ${phase.color}`, borderRadius: '6px', padding: '3px 9px' }}>{phase.id}</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#111' }}>{phase.title}</span>
              </div>
              <Link to={phase.href} style={{ fontSize: '12px', color: phase.color, textDecoration: 'none', border: `1px solid ${phase.color}`, borderRadius: '6px', padding: '4px 12px', fontWeight: 500 }}>
                {verPagina}
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div><div style={sl}>{labelObj}</div><div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{phase.obj}</div></div>
              <div><div style={sl}>{labelArt}</div><div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{phase.artifacts}</div></div>
              <div><div style={sl}>{labelPap}</div><div>{phase.roles.map(r => <RolePill key={r} role={r} roleHref={roleHref} />)}</div></div>
              <div><div style={sl}>{labelGate}</div><span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', background: '#E1F5EE', color: '#0F6E56' }}>✓ {phase.gate}</span></div>
            </div>
          </div>
        </>
      )}

      {/* TAB 1: Work Breakdown */}
      {activeTab === 1 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr>{wbsCols.map(h => <th key={h} style={thSt}>{h}</th>)}</tr></thead>
            <tbody>
              {wbsRows.map((row, i) => {
                const p = phases.find(ph => ph.id === row.phaseId);
                return (
                  <tr key={i}>
                    <td style={tdSt}><Link to={p?.href} style={{ textDecoration: 'none' }}><span style={{ ...pill(`${p?.color}15`, p?.color), border: `1px solid ${p?.color}`, fontWeight: 700 }}>{row.phaseId}</span><span style={{ fontSize: '12px', color: '#374151', marginLeft: '6px' }}>{p?.title}</span></Link></td>
                    <td style={{ ...tdSt, color: '#374151', whiteSpace: 'pre-line' }}>{row.activity}</td>
                    <td style={tdSt}><div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>{row.roles.map(r => <RolePill key={r} role={r} roleHref={roleHref} />)}</div></td>
                    <td style={{ ...tdSt, color: '#374151', whiteSpace: 'pre-line' }}>{row.gate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 2: Role Allocation */}
      {activeTab === 2 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {teamAlloc.map(member => (
            <Link key={member.name} to={member.href} style={{ textDecoration: 'none' }}>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'box-shadow 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.07)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: member.avatarBg, color: member.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>{member.initials}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '6px' }}>{member.name}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, marginBottom: '12px' }}>{member.desc}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px' }}>{labelFases}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {member.phaseIds.map(pid => { const p = phases.find(ph => ph.id === pid); return <span key={pid} style={{ ...pill(`${p?.color}15`, p?.color), border: `1px solid ${p?.color}` }}>{pid}</span>; })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* TAB 3: Work Products */}
      {activeTab === 3 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr>{wpCols.map(h => <th key={h} style={thSt}>{h}</th>)}</tr></thead>
            <tbody>
              {workProducts.map((wp, i) => {
                const p = phases.find(ph => ph.id === wp.phaseId);
                return (
                  <tr key={i}>
                    <td style={tdSt}>{wp.artifactHref ? <Link to={wp.artifactHref} style={{ color: '#374151', textDecoration: 'underline', textDecorationColor: '#d1d5db' }}>{wp.artifact}</Link> : <span style={{ color: '#374151' }}>{wp.artifact}</span>}</td>
                    <td style={{ ...tdSt, whiteSpace: 'nowrap' }}><Link to={p?.href} style={{ textDecoration: 'none' }}><span style={{ ...pill(`${p?.color}15`, p?.color), border: `1px solid ${p?.color}`, fontWeight: 700 }}>{wp.phaseId}</span></Link></td>
                    <td style={tdSt}>{wp.byLabel ? <span style={{ color: '#6b7280' }}>{wp.byLabel}</span> : <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>{wp.byList.map(r => <RolePill key={r} role={r} roleHref={roleHref} />)}</div>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
