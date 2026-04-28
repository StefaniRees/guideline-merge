import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function PrincipleCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${open ? p.color : '#e5e7eb'}`, borderLeft: `4px solid ${p.color}`, borderRadius: '10px', background: '#fff', transition: 'border-color 0.15s', overflow: 'hidden' }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', alignItems: 'center', gap: '14px', padding: '16px', cursor: 'pointer', background: open ? `${p.color}06` : '#fff' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: p.bg, border: `1px solid ${p.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {p.icon(p.color)}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{p.title}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{p.summary}</div>
        </div>
        <div style={{ fontSize: '12px', color: '#9ca3af', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▾</div>
      </div>
      {open && (
        <div style={{ padding: '14px 16px 16px 74px', borderTop: `1px solid ${p.border}` }}>
          <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, margin: 0 }}>{p.detail}</p>
        </div>
      )}
    </div>
  );
}

export default function CorePrinciples() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const principles = [
    {
      n: '1', color: '#639922', bg: '#EAF3DE', border: '#97C459',
      title: isEN ? 'Balance priorities and maximize value' : 'Balancear prioridades e maximizar valor',
      summary: isEN ? 'Balance speed, quality, and value delivered to stakeholders in each integration.' : 'Equilibrar velocidade, qualidade e valor entregue aos stakeholders em cada integração.',
      detail: isEN ? 'Involves practices that help the team balance quality, deadlines, and stakeholder satisfaction. Uses clear PR policies, effective reviews, and quality gates to focus on what really matters — predictable integrations that deliver real value to the product.' : 'Envolve práticas que ajudam o time a equilibrar qualidade, prazos e satisfação dos stakeholders. Utiliza políticas claras de PR, revisões efetivas e quality gates para direcionar o foco no que realmente importa — integrações previsíveis que agreguem valor real ao produto.',
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 5.5H20l-4.5 3.5 1.5 6L12 15l-5 3 1.5-6L4 8.5h5.5L12 3z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={`${c}15`}/></svg>),
    },
    {
      n: '2', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB',
      title: isEN ? 'Collaborate to align interests and understanding' : 'Colaborar para alinhar interesses e entendimento',
      summary: isEN ? 'Create a collaborative environment with transparent reviews and knowledge sharing.' : 'Criar ambiente colaborativo com revisões transparentes e compartilhamento de conhecimento.',
      detail: isEN ? 'Encourages transparent reviews and continuous feedback among Developer A, Developer B, and Mediator. Clear communication about context, impact, and technical decisions reduces rework, minimizes accumulated conflicts, and improves team cohesion throughout the merge process.' : 'Estimula revisões transparentes e feedback contínuo entre Developer A, Developer B e Mediador. A comunicação clara sobre contexto, impacto e decisões técnicas reduz retrabalho, minimiza conflitos acumulados e melhora a coesão do time ao longo do processo de merge.',
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="3" stroke={c} strokeWidth="1.5"/><circle cx="16" cy="9" r="3" stroke={c} strokeWidth="1.5"/><path d="M3 19c0-2.5 2-4 5-4M11 19c0-2.5 2-4 5-4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M12 13v3" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
    },
    {
      n: '3', color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
      title: isEN ? 'Focus on architecture to minimize risks' : 'Focar na arquitetura para minimizar riscos',
      summary: isEN ? 'Anticipate architectural decisions to avoid structural conflicts and late-stage problems.' : 'Antecipar decisões arquiteturais para evitar conflitos estruturais e problemas tardios.',
      detail: isEN ? 'Anticipating architectural decisions avoids structural problems and late code conflicts. Involves defining branch conventions, commit standards, and integration strategies before coding — reducing the likelihood of accumulated conflicts and rework at merge time.' : 'Antecipar decisões arquiteturais evita problemas estruturais e conflitos de código tardios. Envolve definir convenções de branch, padrões de commit e estratégias de integração antes da codificação — reduzindo a probabilidade de conflitos acumulados e retrabalho no momento do merge.',
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><rect x="13" y="3" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><rect x="8" y="13" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><path d="M7 11v2M17 11v2M12 13v0" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
    },
    {
      n: '4', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
      title: isEN ? 'Continuously evolve with feedback and metrics' : 'Evoluir continuamente com feedback e métricas',
      summary: isEN ? 'Learn from data and retrospectives to promote sustained incremental improvements.' : 'Aprender com dados e retrospectivas para promover melhorias incrementais sustentadas.',
      detail: isEN ? 'Reinforces the use of metrics, data analysis, and retrospectives to improve processes and practices. Improvements are incremental, sustained, and guided by real evidence from the merge flow — not assumptions. The history of recorded conflicts and decisions feeds this learning cycle.' : 'Reforça o uso de métricas, análise de dados e retrospectivas para aprimorar processos e práticas. As melhorias são incrementais, sustentadas e guiadas por evidências reais do fluxo de merge — não por suposições. O histórico de conflitos e decisões registradas alimenta esse ciclo de aprendizado.',
      icon: (c) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 17l4-5 4 3 4-7 4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 9v4h-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    },
  ];

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{ background: '#f0faf6', borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px' }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          {isEN
            ? <><strong>Core Principles</strong> of MergeTrace provide the foundation for interpreting the guideline's roles, artifacts, and activities. They reinforce each other and connect technical decisions with value delivery, promoting collaboration, traceability, and continuous learning. Click each principle to see details.</>
            : <>Os <strong>Core Principles</strong> do MergeTrace fornecem a base para interpretar papéis, artefatos e atividades do guideline. Eles se reforçam mutuamente e conectam decisões técnicas com a entrega de valor, promovendo colaboração, rastreabilidade e aprendizado contínuo. Clique em cada princípio para ver detalhes.</>}
        </p>
      </div>

      {/* Principles */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? '4 fundamental principles' : '4 princípios fundamentais'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
        {principles.map(p => <PrincipleCard key={p.n} p={p} />)}
      </div>

      {/* Footer note */}
      <div style={{ background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#0F6E56" strokeWidth="1.5"/><path d="M8 5v4M8 11v.5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: 0 }}>
          {isEN
            ? 'These principles were derived from empirical evidence collected in interviews with specialists (P1–P8) and the developer survey, and are directly related to analytical themes T1–T5 identified in the qualitative research analysis.'
            : 'Estes princípios foram derivados das evidências empíricas coletadas nas entrevistas com especialistas (P1–P8) e no survey com desenvolvedores, e estão diretamente relacionados aos temas analíticos T1–T5 identificados na análise qualitativa da pesquisa.'}
        </p>
      </div>
    </div>
  );
}
