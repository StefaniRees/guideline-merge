import React, { useState } from 'react';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const TOOLS = {
  'Git':            { icon: `${DEVICON}/git/git-original.svg`,               label: 'Git' },
  'GitHub':         { icon: `${DEVICON}/github/github-original.svg`,         label: 'GitHub' },
  'GitLab':         { icon: `${DEVICON}/gitlab/gitlab-original.svg`,         label: 'GitLab' },
  'Bitbucket':      { icon: `${DEVICON}/bitbucket/bitbucket-original.svg`,   label: 'Bitbucket' },
  'Jira':           { icon: `${DEVICON}/jira/jira-original.svg`,             label: 'Jira' },
  'Azure DevOps':   { icon: `${DEVICON}/azure/azure-original.svg`,           label: 'Azure DevOps' },
  'VS Code':        { icon: `${DEVICON}/vscode/vscode-original.svg`,         label: 'VS Code' },
  'IntelliJ IDEA':  { icon: `${DEVICON}/intellij/intellij-original.svg`,     label: 'IntelliJ IDEA' },
  'Jenkins':        { icon: `${DEVICON}/jenkins/jenkins-original.svg`,       label: 'Jenkins' },
  'GitHub Actions': { icon: `${DEVICON}/github/github-original.svg`,         label: 'GitHub Actions' },
};

const PHASE_META = {
  'Planejamento':             { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459' },
  'Desenvolvimento':          { bg: '#EAF3DE', color: '#3B6D11', border: '#97C459' },
  'Pull Request & Code Review':{ bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB' },
  'Resolução de Conflitos':   { bg: '#FAEEDA', color: '#854F0B', border: '#EF9F27' },
  'Approval & Merge':         { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC' },
  'Release / Deploy & Rollback':{ bg: '#FBEAF0', color: '#72243E', border: '#ED93B1' },
};

const phases = [
  {
    name: 'Planejamento',
    color: '#639922',
    tools: [
      {
        category: 'Controle de versão',
        fn: 'Criar e gerenciar branches, realizar commits e sincronizar com a main.',
        toolKeys: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      },
      {
        category: 'Rastreabilidade',
        fn: 'Vincular branches e commits a tickets e histórias.',
        toolKeys: ['Jira', 'Azure DevOps'],
      },
    ],
  },
  {
    name: 'Desenvolvimento',
    color: '#639922',
    tools: [
      {
        category: 'Controle de versão',
        fn: 'Commits atômicos e sincronização frequente com a main.',
        toolKeys: ['Git', 'GitHub', 'GitLab'],
      },
      {
        category: 'Rastreabilidade',
        fn: 'Acompanhar histórico de mudanças associadas à história.',
        toolKeys: ['Jira', 'Azure DevOps'],
      },
    ],
  },
  {
    name: 'Pull Request & Code Review',
    color: '#378ADD',
    tools: [
      {
        category: 'Plataformas de PR',
        fn: 'Abrir PRs com template, revisar diffs e registrar comentários.',
        toolKeys: ['GitHub', 'GitLab', 'Bitbucket'],
      },
      {
        category: 'CI/CD',
        fn: 'Executar build, testes, análise estática e cobertura no pipeline.',
        toolKeys: ['GitHub Actions', 'Jenkins', 'Azure DevOps'],
      },
    ],
  },
  {
    name: 'Resolução de Conflitos',
    color: '#BA7517',
    tools: [
      {
        category: 'Merge visual',
        fn: 'Comparar e resolver conflitos entre branches visualmente.',
        toolKeys: ['VS Code', 'IntelliJ IDEA'],
      },
      {
        category: 'Controle de versão',
        fn: 'Executar rebase, merge e rastrear histórico de resolução.',
        toolKeys: ['Git', 'GitHub', 'GitLab'],
      },
    ],
  },
  {
    name: 'Approval & Merge',
    color: '#7F77DD',
    tools: [
      {
        category: 'Plataformas de PR',
        fn: 'Registrar aprovações, aplicar branch protection e executar merge.',
        toolKeys: ['GitHub', 'GitLab', 'Bitbucket'],
      },
      {
        category: 'CI/CD',
        fn: 'Validar quality gates antes do merge final.',
        toolKeys: ['GitHub Actions', 'Jenkins', 'Azure DevOps'],
      },
    ],
  },
  {
    name: 'Release / Deploy & Rollback',
    color: '#993556',
    tools: [
      {
        category: 'CI/CD',
        fn: 'Automatizar deploy e registrar evidências de build.',
        toolKeys: ['GitHub Actions', 'Jenkins', 'Azure DevOps'],
      },
      {
        category: 'Controle de versão',
        fn: 'Executar reversão controlada e recuperar versão anterior.',
        toolKeys: ['Git', 'GitHub', 'GitLab'],
      },
    ],
  },
];

function ToolChip({ toolKey }) {
  const t = TOOLS[toolKey];
  if (!t) return null;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '5px 10px', borderRadius: '8px',
      border: '1px solid #e5e7eb', background: '#fff',
      fontSize: '12px', color: '#374151', fontWeight: 500,
      whiteSpace: 'nowrap',
    }}>
      <img
        src={t.icon}
        alt={t.label}
        width={16} height={16}
        style={{ flexShrink: 0 }}
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
      {t.label}
    </div>
  );
}

function PhaseCard({ phase, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const pm = PHASE_META[phase.name] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb' };

  return (
    <div style={{
      border: `1px solid ${open ? phase.color : '#e5e7eb'}`,
      borderRadius: '12px', marginBottom: '10px', overflow: 'hidden',
      transition: 'border-color 0.15s',
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
          padding: '14px 16px',
          background: open ? `${phase.color}08` : '#f9fafb',
          border: 'none',
          borderBottom: open ? `1px solid ${phase.color}30` : 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          width: '28px', height: '28px', borderRadius: '6px',
          background: `${phase.color}18`, border: `1.5px solid ${phase.color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: phase.color }} />
        </span>
        <span style={{ flex: 1, fontSize: '14px', fontWeight: 700, color: '#111' }}>{phase.name}</span>
        <span style={{
          fontSize: '11px', fontWeight: 500, padding: '2px 9px',
          borderRadius: '20px', background: pm.bg, color: pm.color,
          border: `1px solid ${pm.border}`, marginRight: '8px',
        }}>
          {phase.tools.reduce((acc, t) => acc + t.toolKeys.length, 0)} ferramentas
        </span>
        <span style={{
          fontSize: '12px', color: '#9ca3af',
          display: 'inline-block',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
        }}>▾</span>
      </button>

      {/* Body */}
      {open && (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#fff' }}>
          {phase.tools.map((tool, i) => (
            <div key={i} style={{
              border: '1px solid #f0f0f0', borderRadius: '10px',
              padding: '14px 16px', background: '#fafafa',
            }}>
              {/* Category + fn */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  fontSize: '12px', fontWeight: 700, color: phase.color,
                  background: `${phase.color}12`, border: `1px solid ${phase.color}30`,
                  borderRadius: '6px', padding: '2px 9px', flexShrink: 0, marginTop: '1px',
                }}>
                  {tool.category}
                </span>
                <span style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5 }}>
                  {tool.fn}
                </span>
              </div>

              {/* Tool chips com logo */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tool.toolKeys.map((key, j) => (
                  <ToolChip key={j} toolKey={key} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ToolsByPhase() {
  const [search, setSearch] = useState('');

  const filtered = phases.filter(p =>
    search === '' ||
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.tools.some(t =>
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.toolKeys.some(k => k.toLowerCase().includes(search.toLowerCase()))
    )
  );

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <p style={{
        fontSize: '14px', color: '#6b7280', lineHeight: 1.6,
        borderLeft: '3px solid #1D9E75', background: '#f0faf6',
        borderRadius: '0 6px 6px 0', padding: '10px 12px', marginBottom: '24px',
      }}>
        O MergeTrace não prescreve ferramentas específicas — cada equipe opera com seu
        próprio ecossistema. Esta seção mapeia classes de ferramentas recomendadas por
        fase, indicando sua função no guideline sem impor dependências tecnológicas. A
        escolha da ferramenta é da equipe; o guideline orienta quando e para quê utilizá-la.
      </p>

      {/* Busca */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar ferramenta ou fase..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '7px 12px', fontSize: '13px', borderRadius: '8px',
            border: '1px solid #e5e7eb', outline: 'none', width: '220px',
            color: '#374151', background: '#fff',
          }}
        />
      </div>

      {/* Fases */}
      {filtered.length > 0 ? (
        filtered.map((phase, i) => (
          <PhaseCard key={i} phase={phase} defaultOpen={i === 0} />
        ))
      ) : (
        <div style={{ textAlign: 'center', padding: '48px 0', color: '#9ca3af', fontSize: '14px' }}>
          Nenhuma ferramenta encontrada para a busca realizada.
        </div>
      )}
    </div>
  );
}
