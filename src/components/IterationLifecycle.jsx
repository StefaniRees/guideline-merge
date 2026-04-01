import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const steps = [
  {
    n: '1', color: '#639922', bg: '#EAF3DE', border: '#97C459',
    title: 'Kick-off leve',
    duration: '0.5–2h',
    desc: 'Developer A/B e Mediador alinham objetivo, riscos, dependências e critérios de aceite. Seleção dos work items que cabem no timebox.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke={c} strokeWidth="1.5"/>
        <path d="M10 6v5l3 2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '2', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB',
    title: 'Execução por Micro-Increments',
    duration: 'Dias',
    desc: 'Developer A implementa e abre PR; Developer B revisa e integra; Mediador facilita decisões e resolve conflitos complexos.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h4l2-4 2 8 2-4h2" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '3', color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27',
    title: 'Qualidade contínua',
    duration: 'Contínuo',
    desc: 'Pipelines executam build, testes e análise estática. Falhas bloqueiam o merge. Tudo gera TestResult, cobertura e MergeLog.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10l4 4 6-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="10" r="8" stroke={c} strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    n: '4', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC',
    title: 'Hardening',
    duration: 'Últimas 24–48h',
    desc: 'Estabilização, correções e documentação mínima — ADRs e registros de decisão.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l1.5 4.5H16l-3.5 2.5 1.5 4.5L10 12l-4 2.5 1.5-4.5L4 7.5h4.5L10 3z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={`${c}15`}/>
      </svg>
    ),
  },
  {
    n: '5', color: '#993556', bg: '#FBEAF0', border: '#ED93B1',
    title: 'Review & Demo',
    duration: 'Final do ciclo',
    desc: 'Validação com stakeholders, registro de valor entregue e impactos observados.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="10" rx="2" stroke={c} strokeWidth="1.5"/>
        <path d="M7 17h6M10 14v3" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '6', color: '#0F6E56', bg: '#E1F5EE', border: '#9FE1CB',
    title: 'Retrospectiva orientada a dados',
    duration: 'Pós-ciclo',
    desc: 'Análise de métricas do ciclo — lead time, conflitos, cobertura — e definição de ações de melhoria.',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l3-4 3 2 3-5 3 3" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8v4h-4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const gates = [
  { label: 'Build verde', desc: 'Testes unitários e de integração passando sem falhas.' },
  { label: 'Cobertura mínima', desc: 'Por módulo, com análise estática sem falhas críticas.' },
  { label: 'DoR / DoD no PR', desc: 'Template preenchido com checklist concluído.' },
  { label: 'Code Review', desc: 'Revisão obrigatória com decisões registradas.' },
];

const metrics = [
  { label: 'Lead time de PR', desc: 'Tempo entre abertura e merge.' },
  { label: 'Tempo de review', desc: 'Tempo médio para aprovação do PR.' },
  { label: 'Taxa de retrabalho', desc: 'PRs reabertos ou corrigidos após merge.' },
  { label: 'Conflitos por PR', desc: 'Frequência e tempo de resolução via MergeLog.' },
];

const roles = [
  {
    initials: 'DA', name: 'Developer A',
    bg: '#E1F5EE', color: '#0F6E56',
    href: '/mergetrace/docs/roles/developer-principal',
    resp: 'Implementa, abre PR com contexto e testa localmente.',
  },
  {
    initials: 'DB', name: 'Developer B',
    bg: '#E6F1FB', color: '#185FA5',
    href: '/mergetrace/docs/roles/developer-integrador',
    resp: 'Revisa tecnicamente, integra dependências e resolve conflitos de média complexidade.',
  },
  {
    initials: 'MD', name: 'Mediador',
    bg: '#EEEDFE', color: '#534AB7',
    href: '/mergetrace/docs/roles/mediador',
    resp: 'Facilita decisões, arbitra conflitos complexos e garante aderência às guidelines.',
  },
];

export default function IterationLifecycle() {
  const [openSection, setOpenSection] = useState('steps');

  const toggle = (s) => setOpenSection(prev => prev === s ? null : s);

  const SectionHeader = ({ id, label, color }) => (
    <div
      onClick={() => toggle(id)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px', cursor: 'pointer',
        background: openSection === id ? `${color}08` : '#f9fafb',
        borderBottom: openSection === id ? `1px solid ${color}30` : 'none',
      }}
    >
      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>{label}</span>
      <span style={{
        fontSize: '12px', color: '#9ca3af',
        transform: openSection === id ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s',
      }}>▾</span>
    </div>
  );

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{
        background: '#f0faf6', borderLeft: '3px solid #1D9E75',
        borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          O <strong>Iteration Lifecycle</strong> no MergeTrace organiza o trabalho em ciclos curtos
          com foco em <strong>PRs pequenos</strong>, <strong>quality gates automatizados</strong> e
          rastreabilidade explícita entre issue ⇄ PR ⇄ build ⇄ testes ⇄ release.
          Definido a partir de entrevistas com especialistas em engenharia, QA e DevOps.
        </p>
      </div>

      {/* Roteiro */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        Roteiro da iteração
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: s.bg, border: `1.5px solid ${s.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.icon(s.color)}
              </div>
              {i < steps.length - 1 && (
                <div style={{ width: '1.5px', height: '20px', background: '#e5e7eb', margin: '4px 0' }} />
              )}
            </div>
            {/* Content */}
            <div style={{
              flex: 1, border: '1px solid #e5e7eb', borderRadius: '10px',
              padding: '12px 14px', background: '#fff', marginBottom: i < steps.length - 1 ? '4px' : 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>{s.title}</span>
                <span style={{
                  fontSize: '10px', padding: '1px 8px', borderRadius: '20px',
                  background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontWeight: 600,
                }}>{s.duration}</span>
              </div>
              <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Papéis */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
          <SectionHeader id="roles" label="Papéis e handoffs na iteração" color="#7F77DD" />
          {openSection === 'roles' && (
            <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
              {roles.map(r => (
                <Link key={r.name} to={r.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px',
                    transition: 'box-shadow 0.15s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                  >
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: r.bg, color: r.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 700, marginBottom: '8px',
                    }}>{r.initials}</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{r.name}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{r.resp}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quality Gates */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
          <SectionHeader id="gates" label="Quality Gates e critérios de aceite" color="#639922" />
          {openSection === 'gates' && (
            <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
              {gates.map((g, i) => (
                <div key={i} style={{
                  border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px',
                  display: 'flex', gap: '10px', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#1D9E75', flexShrink: 0, marginTop: '5px',
                  }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{g.label}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{g.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Métricas */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
          <SectionHeader id="metrics" label="Métricas do ciclo" color="#378ADD" />
          {openSection === 'metrics' && (
            <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
              {metrics.map((m, i) => (
                <div key={i} style={{
                  border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px',
                  display: 'flex', gap: '10px', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#378ADD', flexShrink: 0, marginTop: '5px',
                  }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{m.label}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}