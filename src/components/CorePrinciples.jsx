import React, { useState } from 'react';

const principles = [
  {
    n: '1', color: '#639922', bg: '#EAF3DE', border: '#97C459',
    title: 'Balancear prioridades e maximizar valor',
    summary: 'Equilibrar velocidade, qualidade e valor entregue aos stakeholders em cada integração.',
    detail: 'Envolve práticas que ajudam o time a equilibrar qualidade, prazos e satisfação dos stakeholders. Utiliza políticas claras de PR, revisões efetivas e quality gates para direcionar o foco no que realmente importa — integrações previsíveis que agreguem valor real ao produto.',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l2.5 5.5H20l-4.5 3.5 1.5 6L12 15l-5 3 1.5-6L4 8.5h5.5L12 3z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={`${c}15`}/>
      </svg>
    ),
  },
  {
    n: '2', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB',
    title: 'Colaborar para alinhar interesses e entendimento',
    summary: 'Criar ambiente colaborativo com revisões transparentes e compartilhamento de conhecimento.',
    detail: 'Estimula revisões transparentes e feedback contínuo entre Developer A, Developer B e Mediador. A comunicação clara sobre contexto, impacto e decisões técnicas reduz retrabalho, minimiza conflitos acumulados e melhora a coesão do time ao longo do processo de merge.',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="9" r="3" stroke={c} strokeWidth="1.5"/>
        <circle cx="16" cy="9" r="3" stroke={c} strokeWidth="1.5"/>
        <path d="M3 19c0-2.5 2-4 5-4M11 19c0-2.5 2-4 5-4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 13v3" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '3', color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    title: 'Focar na arquitetura para minimizar riscos',
    summary: 'Antecipar decisões arquiteturais para evitar conflitos estruturais e problemas tardios.',
    detail: 'Antecipar decisões arquiteturais evita problemas estruturais e conflitos de código tardios. Envolve definir convenções de branch, padrões de commit e estratégias de integração antes da codificação — reduzindo a probabilidade de conflitos acumulados e retrabalho no momento do merge.',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <rect x="8" y="13" width="8" height="8" rx="2" stroke={c} strokeWidth="1.5" fill={`${c}15`}/>
        <path d="M7 11v2M17 11v2M12 13v0" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '4', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
    title: 'Evoluir continuamente com feedback e métricas',
    summary: 'Aprender com dados e retrospectivas para promover melhorias incrementais sustentadas.',
    detail: 'Reforça o uso de métricas, análise de dados e retrospectivas para aprimorar processos e práticas. As melhorias são incrementais, sustentadas e guiadas por evidências reais do fluxo de merge — não por suposições. O histórico de conflitos e decisões registradas alimenta esse ciclo de aprendizado.',
    icon: (c) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 17l4-5 4 3 4-7 4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 9v4h-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function PrincipleCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1px solid ${open ? p.color : '#e5e7eb'}`,
      borderLeft: `4px solid ${p.color}`,
      borderRadius: '10px', background: '#fff',
      transition: 'border-color 0.15s',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'grid', gridTemplateColumns: '44px 1fr auto',
          alignItems: 'center', gap: '14px',
          padding: '16px', cursor: 'pointer',
          background: open ? `${p.color}06` : '#fff',
        }}
      >
        <div style={{
          width: '40px', height: '40px', borderRadius: '8px',
          background: p.bg, border: `1px solid ${p.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {p.icon(p.color)}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>
            {p.title}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>
            {p.summary}
          </div>
        </div>
        <div style={{
          fontSize: '12px', color: '#9ca3af', flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
        }}>▾</div>
      </div>

      {/* Detail */}
      {open && (
        <div style={{
          padding: '0 16px 16px 74px',
          borderTop: `1px solid ${p.border}`,
          paddingTop: '14px',
        }}>
          <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
            {p.detail}
          </p>
        </div>
      )}
    </div>
  );
}

export default function CorePrinciples() {
  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{
        background: '#f0faf6', borderLeft: '3px solid #1D9E75',
        borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          Os <strong>Core Principles</strong> do MergeTrace fornecem a base para interpretar papéis,
          artefatos e atividades do guideline. Eles se reforçam mutuamente e conectam decisões técnicas
          com a entrega de valor, promovendo colaboração, rastreabilidade e aprendizado contínuo.
          Clique em cada princípio para ver detalhes.
        </p>
      </div>

      {/* Princípios */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        4 princípios fundamentais
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
        {principles.map(p => <PrincipleCard key={p.n} p={p} />)}
      </div>

      {/* Nota de conexão */}
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
          Estes princípios foram derivados das evidências empíricas coletadas nas entrevistas com especialistas
          (P1–P8) e no survey com desenvolvedores, e estão diretamente relacionados aos temas analíticos
          T1–T5 identificados na análise qualitativa da pesquisa.
        </p>
      </div>
    </div>
  );
}