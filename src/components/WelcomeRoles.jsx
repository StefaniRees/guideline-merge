import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function RoleCard({ role, isEN }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${open ? role.color : '#e5e7eb'}`, borderTop: `3px solid ${role.color}`, borderRadius: '12px', background: '#fff', overflow: 'hidden', transition: 'border-color 0.15s' }}>
      <div onClick={() => setOpen(o => !o)} style={{ padding: '16px', cursor: 'pointer', background: open ? `${role.color}06` : '#fff', borderBottom: open ? `1px solid ${role.color}20` : 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: role.avatarBg, color: role.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>{role.initials}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#111' }}>{role.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '12px', color: role.color, fontWeight: 600 }}>{role.subtitle}</div>
              <span style={{ fontSize: '10px', padding: '1px 8px', borderRadius: '20px', background: role.bg, color: role.color, border: `1px solid ${role.border}`, fontWeight: 600 }}>{role.openup}</span>
            </div>
          </div>
          <Link to={role.href} onClick={e => e.stopPropagation()} style={{ fontSize: '11px', color: role.color, textDecoration: 'none', border: `1px solid ${role.color}`, borderRadius: '6px', padding: '3px 10px', fontWeight: 600, flexShrink: 0 }}>
            {isEN ? 'View page →' : 'Ver página →'}
          </Link>
          <span style={{ fontSize: '12px', color: '#9ca3af', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', marginLeft: '4px' }}>▾</span>
        </div>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{role.description}</p>
      </div>
      {open && (
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{isEN ? 'Responsibilities' : 'Responsabilidades'}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {role.responsibilities.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: role.color, flexShrink: 0, marginTop: '5px' }} />
                  <Link to={r.href} style={{ fontSize: '12px', color: '#374151', lineHeight: 1.5, textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = role.color}
                    onMouseLeave={e => e.currentTarget.style.color = '#374151'}>{r.text}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{isEN ? 'Artifacts and traces' : 'Artefatos e rastros'}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {role.artifacts.map((a, i) => (
                <Link key={i} to={a.href} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: '12px', color: role.color, fontWeight: 500, background: role.bg, border: `1px solid ${role.border}`, borderRadius: '6px', padding: '5px 10px', lineHeight: 1.5, transition: 'opacity 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}>{a.text} →</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WelcomeRoles() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const roles = [
    {
      initials: 'DA', name: 'Developer A', subtitle: isEN ? 'Initial author of the change' : 'Autor inicial da mudança', openup: 'OpenUP: Implementer',
      avatarBg: '#E1F5EE', avatarColor: '#0F6E56', color: '#639922', bg: '#EAF3DE', border: '#97C459', href: '/docs/roles/developer-principal',
      description: isEN ? 'Responsible for the main code increment (micro-increment). Leads development and initiates the integration flow, ensuring context, quality, and traceability.' : 'Responsável pelo incremento principal de código (micro-increment). Conduz o desenvolvimento e inicia o fluxo de integração, garantindo contexto, qualidade e rastreabilidade.',
      responsibilities: [
        { text: isEN ? 'Implement the task with clear and descriptive commits.' : 'Implementar a tarefa com commits claros e descritivos.', href: '/docs/guidelines/commit-message' },
        { text: isEN ? 'Open the Pull Request with contextual description and issue link.' : 'Abrir o Pull Request com descrição contextual e vinculação à issue.', href: '/docs/phases/pull-request' },
        { text: isEN ? 'Fix simple conflicts before review.' : 'Corrigir conflitos simples antes da revisão.', href: '/docs/phases/merge' },
        { text: isEN ? 'Run unit tests and validate the local build.' : 'Executar testes unitários e validar a build local.', href: '/docs/guidelines/ci-cd-quality-gates' },
        { text: isEN ? 'Interact with Developer B during collaborative adjustments.' : 'Interagir com Developer B durante ajustes colaborativos.', href: '/docs/roles/developer-integrador' },
      ],
      artifacts: [
        { text: isEN ? 'Activity branch (feature/ or bugfix/)' : 'Branch de atividade (feature/ ou bugfix/)', href: '/docs/artifacts/branch-atividade' },
        { text: isEN ? 'Initial Pull Request' : 'Pull Request inicial', href: '/docs/artifacts/pull-request' },
        { text: isEN ? 'Standardized commits and build logs' : 'Commits padronizados e logs de build', href: '/docs/artifacts/commits-padronizados' },
      ],
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
    },
    {
      initials: 'DB', name: 'Developer B', subtitle: isEN ? 'Collaborative developer — second pair' : 'Desenvolvedor colaborador — segundo par', openup: 'OpenUP: Reviewer',
      avatarBg: '#E6F1FB', avatarColor: '#185FA5', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', href: '/docs/roles/developer-integrador',
      description: isEN ? 'Collaborative developer acting as a second pair, supporting reviews, local tests, and conflict resolution. Ensures technical coherence and resolves conflicts with cross-dependencies.' : 'Desenvolvedor colaborador que atua como segundo par, apoiando revisões, testes locais e resolução de conflitos. Garante coerência técnica e resolve conflitos com dependências cruzadas.',
      responsibilities: [
        { text: isEN ? 'Review the PR created by Developer A, suggesting improvements.' : 'Revisar o PR criado pelo Developer A, sugerindo melhorias.', href: '/docs/phases/code-review' },
        { text: isEN ? 'Integrate dependencies or related new modules.' : 'Integrar dependências ou novos módulos relacionados.', href: '/docs/phases/merge' },
        { text: isEN ? 'Support conflict resolution between branches.' : 'Apoiar resolução de conflitos entre branches.', href: '/docs/guidelines/conflict-resolution-procedure' },
        { text: isEN ? 'Monitor integration test execution and CI/CD.' : 'Acompanhar execução de testes de integração e CI/CD.', href: '/docs/guidelines/ci-cd-quality-gates' },
        { text: isEN ? 'Communicate blockers or risks to the Mediator.' : 'Comunicar bloqueios ou riscos ao Mediador.', href: '/docs/roles/mediador' },
      ],
      artifacts: [
        { text: isEN ? 'Complementary commits' : 'Commits complementares', href: '/docs/artifacts/commits-padronizados' },
        { text: isEN ? 'Resolved conflict history' : 'Histórico de conflitos resolvidos', href: '/docs/artifacts/historico-conflitos' },
        { text: isEN ? 'Integration pipeline reports' : 'Relatórios de pipeline de integração', href: '/docs/artifacts/relatorio-build-ci' },
      ],
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.5" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><circle cx="16" cy="8" r="3.5" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><path d="M3 20c0-3 2.5-5 6-5M10 20c0-3 2.5-5 6-5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
    },
    {
      initials: 'MD', name: isEN ? 'Mediator' : 'Mediador', subtitle: isEN ? 'Technical reviewer and facilitator' : 'Revisor técnico e facilitador', openup: 'OpenUP: Integrator',
      avatarBg: '#EEEDFE', avatarColor: '#534AB7', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', href: '/docs/roles/mediador',
      description: isEN ? 'Neutral role responsible for supervising the merge flow, facilitating resolutions, and ensuring Quality Gates are followed. Makes the specialized integrator function explicit, recording and communicating critical decisions.' : 'Papel neutro responsável por supervisionar o fluxo de merge, facilitar resoluções e garantir que os Quality Gates sejam seguidos. Torna explícita a função de integrador especializado, registrando e comunicando decisões críticas.',
      responsibilities: [
        { text: isEN ? 'Analyze conflict causes and guide collaborative corrections.' : 'Analisar causas de conflitos e orientar correções colaborativas.', href: '/docs/guidelines/conflict-resolution-procedure' },
        { text: isEN ? 'Mediate complex reviews between Developer A and Developer B.' : 'Intermediar revisões complexas entre Developer A e Developer B.', href: '/docs/phases/code-review' },
        { text: isEN ? 'Validate acceptance criteria and merge traceability.' : 'Validar critérios de aceitação e rastreabilidade dos merges.', href: '/docs/guidelines/approval-policy' },
        { text: isEN ? 'Ensure adherence to Merge Guidelines and Quality Gates.' : 'Garantir aderência aos Merge Guidelines e Quality Gates.', href: '/docs/guidelines' },
        { text: isEN ? 'Execute the Final Merge after approvals.' : 'Executar o Merge Final após aprovações.', href: '/docs/phases/merge' },
        { text: isEN ? 'Communicate resolution results and learning to the team.' : 'Comunicar ao time resultados de resolução e aprendizado.', href: '/docs/artifacts/historico-conflitos' },
      ],
      artifacts: [
        { text: isEN ? 'Resolved conflict history' : 'Histórico de conflitos resolvidos', href: '/docs/artifacts/historico-conflitos' },
        { text: isEN ? 'Decision records (issues, comments, PRs)' : 'Registro de decisões (issues, comentários, PRs)', href: '/docs/artifacts/registro-decisao' },
        { text: isEN ? 'Release Notes and incident records' : 'Release Notes e registro de incidentes', href: '/docs/artifacts/release-notes' },
      ],
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4.5v5c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V7.5L12 3z" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><path d="M9 12l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    },
  ];

  const openupCards = [
    { role: 'Developer A', roleHref: '/docs/roles/developer-principal', openup: 'Implementer', desc: isEN ? 'Develops the functional increment and ensures technical conformance.' : 'Elabora o incremento funcional e garante conformidade técnica.', color: '#639922', bg: '#EAF3DE', border: '#97C459' },
    { role: 'Developer B', roleHref: '/docs/roles/developer-integrador', openup: 'Reviewer', desc: isEN ? 'Continuously verifies, validates, and improves the integrated work.' : 'Verifica, valida e aprimora continuamente o trabalho integrado.', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB' },
    { role: isEN ? 'Mediator' : 'Mediador', roleHref: '/docs/roles/mediador', openup: 'Integrator', desc: isEN ? 'Integrates artifacts, coordinates flow, and mitigates merge risks.' : 'Integra artefatos, coordena o fluxo e mitiga riscos de merge.', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC' },
  ];

  const interactions = [
    { step: isEN ? 'Branch creation and implementation' : 'Criação da branch e implementação', stepHref: '/docs/phases/planejamento', da: isEN ? 'Responsible' : 'Responsável', db: isEN ? 'Monitors' : 'Acompanha', md: '—' },
    { step: isEN ? 'Pull Request opening' : 'Abertura do Pull Request', stepHref: '/docs/phases/pull-request', da: isEN ? 'Responsible' : 'Responsável', db: isEN ? 'Reviewer' : 'Revisor', md: isEN ? 'Supervises' : 'Supervisiona' },
    { step: isEN ? 'Simple conflict resolution' : 'Resolução de conflitos simples', stepHref: '/docs/guidelines/conflict-resolution-procedure', da: isEN ? 'Fixes locally' : 'Corrige localmente', db: isEN ? 'Supports' : 'Apoia', md: '—' },
    { step: isEN ? 'Code Review and staging' : 'Code Review e homologação', stepHref: '/docs/phases/code-review', da: '—', db: isEN ? 'Validates in staging' : 'Valida em homologação', md: isEN ? 'Executes review' : 'Executa revisão' },
    { step: isEN ? 'Complex conflicts / technical decision' : 'Conflitos complexos / decisão técnica', stepHref: '/docs/guidelines/conflict-resolution-procedure', da: '—', db: isEN ? 'Supports' : 'Apoia', md: isEN ? 'Acts as mediator' : 'Atua como mediador' },
    { step: isEN ? 'Final Merge and release' : 'Merge Final e liberação', stepHref: '/docs/phases/merge', da: '—', db: '—', md: isEN ? 'Responsible' : 'Responsável' },
  ];

  const tableHeaders = isEN ? ['Flow step', 'Developer A', 'Developer B', 'Mediator'] : ['Etapa do fluxo', 'Developer A', 'Developer B', 'Mediador'];

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{ background: '#f0faf6', borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px' }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          {isEN
            ? <>MergeTrace defines <strong>3 collaborative roles</strong> for the merge flow, adapted from the Open Unified Process (OpenUP). The merge works as a <strong>dual authorship (A+B)</strong> supported by a third specialized agent for technical decision-making and coordination — the <Link to="/docs/roles/mediador" style={{ color: '#7F77DD', fontWeight: 600 }}>Mediator</Link>. The roles <strong>are not hierarchical</strong> — all collaborate within the same continuous flow, with shared responsibility and distributed risk.</>
            : <>O MergeTrace define <strong>3 papéis colaborativos</strong> para o fluxo de merge, adaptados do Open Unified Process (OpenUP). O merge funciona como uma <strong>dupla autoria (A+B)</strong> com suporte de um terceiro agente especializado em tomada de decisão técnica e coordenação — o <Link to="/docs/roles/mediador" style={{ color: '#7F77DD', fontWeight: 600 }}>Mediador</Link>. Os papéis <strong>não são hierárquicos</strong> — todos colaboram dentro de um mesmo fluxo contínuo, com responsabilidade compartilhada e risco distribuído.</>}
        </p>
      </div>

      {/* Role cards */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? '3 guideline roles — click to see details' : '3 papéis do guideline — clique para ver detalhes'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
        {roles.map(r => <RoleCard key={r.name} role={r} isEN={isEN} />)}
      </div>

      {/* OpenUP relation */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'Relationship with OpenUP' : 'Relação com o OpenUP'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '36px' }}>
        {openupCards.map((item, i) => (
          <Link key={i} to={item.roleHref} style={{ textDecoration: 'none' }}>
            <div style={{ border: `1px solid ${item.border}`, borderRadius: '10px', background: item.bg, padding: '14px 16px', transition: 'box-shadow 0.15s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.07)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: item.color, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>OpenUP: {item.openup}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '6px' }}>{item.role}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Interaction table */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'Role interactions' : 'Interação entre os papéis'}
      </div>
      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr>
              {tableHeaders.map((h, i) => (
                <th key={i} style={{ textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '8px 12px', borderBottom: '1px solid #e5e7eb' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {interactions.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '10px 12px', verticalAlign: 'top' }}>
                  <Link to={row.stepHref} style={{ fontSize: '12px', color: '#374151', fontWeight: 600, textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1D9E75'}
                    onMouseLeave={e => e.currentTarget.style.color = '#374151'}>{row.step}</Link>
                </td>
                {[
                  { val: row.da, color: '#639922', bg: '#EAF3DE' },
                  { val: row.db, color: '#378ADD', bg: '#E6F1FB' },
                  { val: row.md, color: '#7F77DD', bg: '#EEEDFE' },
                ].map((cell, j) => (
                  <td key={j} style={{ padding: '10px 12px', verticalAlign: 'top' }}>
                    {cell.val !== '—'
                      ? <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 9px', borderRadius: '20px', background: cell.bg, color: cell.color, display: 'inline-block' }}>{cell.val}</span>
                      : <span style={{ color: '#d1d5db', fontSize: '13px' }}>—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <div style={{ background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#0F6E56" strokeWidth="1.5"/><path d="M8 5v4M8 11v.5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: 0 }}>
          {isEN
            ? <>MergeTrace records events and role interactions throughout the flow — <Link to="/docs/artifacts/pull-request" style={{ color: '#1D9E75', fontWeight: 600 }}>PRs</Link>, <Link to="/docs/phases/merge" style={{ color: '#1D9E75', fontWeight: 600 }}>merges</Link>, <Link to="/docs/artifacts/relatorio-build-ci" style={{ color: '#1D9E75', fontWeight: 600 }}>builds</Link>, and <Link to="/docs/artifacts/historico-conflitos" style={{ color: '#1D9E75', fontWeight: 600 }}>logs</Link>. Traceability allows identifying <strong>who participated in each technical decision and resolved conflict</strong>, supporting governance and organizational learning.</>
            : <>O MergeTrace registra eventos e interações entre papéis ao longo do fluxo — <Link to="/docs/artifacts/pull-request" style={{ color: '#1D9E75', fontWeight: 600 }}>PRs</Link>, <Link to="/docs/phases/merge" style={{ color: '#1D9E75', fontWeight: 600 }}>merges</Link>, <Link to="/docs/artifacts/relatorio-build-ci" style={{ color: '#1D9E75', fontWeight: 600 }}>builds</Link> e <Link to="/docs/artifacts/historico-conflitos" style={{ color: '#1D9E75', fontWeight: 600 }}>logs</Link>. A rastreabilidade permite identificar <strong>quem participou de cada decisão técnica e conflito resolvido</strong>, apoiando governança e aprendizado organizacional.</>}
        </p>
      </div>
    </div>
  );
}
