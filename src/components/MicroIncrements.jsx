import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function AccordionSection({ id, open, onToggle, label, color, children }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
      <div onClick={() => onToggle(id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', cursor: 'pointer', background: open ? `${color}08` : '#f9fafb', borderBottom: open ? `1px solid ${color}30` : 'none' }}>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>{label}</span>
        <span style={{ fontSize: '12px', color: '#9ca3af', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▾</span>
      </div>
      {open && <div style={{ padding: '16px' }}>{children}</div>}
    </div>
  );
}

export default function MicroIncrements() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';
  const [openSection, setOpenSection] = useState(null);
  const toggle = (s) => setOpenSection(prev => prev === s ? null : s);

  const characteristics = [
    { color: '#639922', bg: '#EAF3DE', border: '#97C459', title: isEN ? 'Lean scope' : 'Escopo enxuto', desc: isEN ? 'One problem per PR — ideally small and focused on a single objective.' : 'Um problema por PR — idealmente pequeno e focado em um único objetivo.', icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke={c} strokeWidth="1.5" fill={`${c}15`}/><path d="M7 10l2.5 2.5L13 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
    { color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', title: isEN ? 'Traceable' : 'Rastreável', desc: isEN ? 'PR linked to issue, with links to build, tests, and technical decisions.' : 'PR vinculado à issue, com links para build, testes e decisões técnicas.', icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M10 5l5 5-5 5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
    { color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27', title: isEN ? 'Verifiable' : 'Verificável', desc: isEN ? 'Automated quality gates — build, tests, coverage, and static analysis.' : 'Quality gates automatizados — build, testes, cobertura e análise estática.', icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke={c} strokeWidth="1.5"/><path d="M7 10l2.5 2.5L13 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
    { color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', title: isEN ? 'Collaborative' : 'Colaborativo', desc: isEN ? 'Clear handoff between Developer A → Developer B → Mediator when needed.' : 'Handoff claro entre Developer A → Developer B → Mediador quando necessário.', icon: (c) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="8" r="2.5" stroke={c} strokeWidth="1.5"/><circle cx="13" cy="8" r="2.5" stroke={c} strokeWidth="1.5"/><path d="M3 16c0-2 1.5-3 4-3M10 16c0-2 1.5-3 4-3" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  ];

  const examples = [
    { color: '#639922', bg: '#EAF3DE', title: isEN ? 'Feature behind flag' : 'Feature atrás de flag', desc: isEN ? 'Change protected by feature flag, with updated tests and schema.' : 'Mudança protegida por feature flag, com testes e schema atualizados.' },
    { color: '#378ADD', bg: '#E6F1FB', title: isEN ? 'Fix with test' : 'Correção com teste', desc: isEN ? 'Bugfix accompanied by a test that proves non-regression.' : 'Bugfix acompanhado de teste que comprova a não-regressão.' },
    { color: '#BA7517', bg: '#FAEEDA', title: isEN ? 'CI infrastructure' : 'Infra de CI', desc: isEN ? 'Pipeline adjustment to reduce build time — parallelization, cache.' : 'Ajuste de pipeline para reduzir tempo de build — paralelização, cache.' },
    { color: '#7F77DD', bg: '#EEEDFE', title: isEN ? 'Localized refactoring' : 'Refatoração localizada', desc: isEN ? 'Function/module extraction maintaining or expanding test coverage.' : 'Extração de função/módulo mantendo ou ampliando cobertura de testes.' },
    { color: '#993556', bg: '#FBEAF0', title: isEN ? 'Short ADR' : 'ADR curto', desc: isEN ? 'Record relevant technical decision and reference it in the PR.' : 'Registrar decisão técnica relevante e referenciar no PR.' },
  ];

  const antiPatterns = [
    { label: isEN ? 'Large, multi-focus PRs' : 'PRs grandes e multifoco', desc: isEN ? 'Make review harder and increase the risk of conflicts.' : 'Dificultam revisão e aumentam risco de conflitos.' },
    { label: isEN ? 'Absence of evidence' : 'Ausência de evidências', desc: isEN ? 'No build, tests, or documented coverage.' : 'Sem build, testes ou cobertura documentados.' },
    { label: isEN ? 'Implicit handoff' : 'Handoff implícito', desc: isEN ? 'No clear next step or decision record.' : 'Sem próximo passo claro nem registro de decisão.' },
    { label: isEN ? 'Feature flags without a plan' : 'Feature flags sem plano', desc: isEN ? 'Accumulation of flags without a defined removal criterion.' : 'Acúmulo de flags sem critério de remoção definido.' },
  ];

  const metrics = [
    { label: isEN ? 'PR lead time' : 'Lead time de PR', desc: isEN ? 'Time between opening and merge.' : 'Tempo entre abertura e merge.' },
    { label: isEN ? 'Average PR size' : 'Tamanho médio de PR', desc: isEN ? 'Lines changed per PR.' : 'Linhas alteradas por PR.' },
    { label: isEN ? 'Rework rate' : 'Taxa de retrabalho', desc: isEN ? 'PRs reopened or fixed after merge.' : 'PRs reabertos ou corrigidos após merge.' },
    { label: isEN ? 'Conflicts per PR' : 'Conflitos por PR', desc: isEN ? 'Frequency and resolution time via MergeLog.' : 'Frequência e tempo de resolução via MergeLog.' },
  ];

  const roles = [
    { initials: 'DA', name: 'Developer A', bg: '#E1F5EE', color: '#0F6E56', href: '/guideline-merge/docs/roles/developer-principal', resp: isEN ? 'Implements and opens PR with context and evidence.' : 'Implementa e abre PR com contexto e evidências.' },
    { initials: 'DB', name: 'Developer B', bg: '#E6F1FB', color: '#185FA5', href: '/guideline-merge/docs/roles/developer-integrador', resp: isEN ? 'Reviews, completes integration, and resolves medium-complexity conflicts.' : 'Revisa, complementa integração e resolve conflitos de média complexidade.' },
    { initials: 'MD', name: isEN ? 'Mediator' : 'Mediador', bg: '#EEEDFE', color: '#534AB7', href: '/guideline-merge/docs/roles/mediador', resp: isEN ? 'Facilitates decisions, arbitrates complex conflicts, and ensures adherence to guidelines.' : 'Facilita decisões, arbitra conflitos complexos e garante aderência às guidelines.' },
  ];

  const templateRows = isEN ? [
    { label: 'Context', value: '#1234 — Rounding adjustment in Checkout' },
    { label: 'Scope', value: 'calcTotal() function; no public API change' },
    { label: 'Evidence', value: 'Build ok | Tests ok | Coverage 82% | No criticals' },
    { label: 'Risks', value: 'Impact on financial report; protected by flag pricing_rounding_v2' },
    { label: 'Handoff', value: 'Review by Developer B and execution of manual cases (QA)' },
    { label: 'Links', value: 'PR #5678 | ADR-010 | Pipeline https://...' },
  ] : [
    { label: 'Contexto', value: '#1234 — Ajuste de arredondamento no Checkout' },
    { label: 'Escopo', value: 'Função calcTotal(); sem mudança de API pública' },
    { label: 'Evidências', value: 'Build ok | Testes ok | Cobertura 82% | Sem críticos' },
    { label: 'Riscos', value: 'Impacto em relatório financeiro; protegido por flag pricing_rounding_v2' },
    { label: 'Handoff', value: 'Review do Developer B e execução de casos manuais (QA)' },
    { label: 'Links', value: 'PR #5678 | ADR-010 | Pipeline https://...' },
  ];

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Intro */}
      <div style={{ background: '#f0faf6', borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0', padding: '14px 16px', marginBottom: '32px' }}>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          {isEN
            ? <>In MergeTrace, a <strong>micro-increment</strong> is the smallest visible and traceable unit of value. It typically results in a <strong>small PR</strong> with context and evidence, passing through quality gates and leaving a complete trail: issue ⇄ PR ⇄ build ⇄ tests ⇄ release. Concept consolidated from specialist interviews.</>
            : <>No MergeTrace, um <strong>micro-increment</strong> é a menor unidade de valor visível e rastreável. Geralmente resulta em um <strong>PR pequeno</strong> com contexto e evidências, que passa por quality gates e deixa rastro completo: issue ⇄ PR ⇄ build ⇄ testes ⇄ release. Conceito consolidado a partir de entrevistas com especialistas.</>}
        </p>
      </div>

      {/* Characteristics */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'Characteristics of a micro-increment' : 'Características de um micro-increment'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '32px' }}>
        {characteristics.map((c, i) => (
          <div key={i} style={{ border: '1px solid #e5e7eb', borderLeft: `4px solid ${c.color}`, borderRadius: '10px', background: '#fff', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon(c.color)}</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{c.title}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* PR Template */}
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
        {isEN ? 'Micro-increment template in PR' : 'Template de micro-increment no PR'}
      </div>
      <div style={{ background: '#f8f8f8', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px', marginBottom: '32px', fontFamily: 'monospace' }}>
        {templateRows.map((row, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '8px', fontSize: '12px' }}>
            <span style={{ color: '#1D9E75', fontWeight: 700, minWidth: '90px', flexShrink: 0 }}>{row.label}:</span>
            <span style={{ color: '#374151', lineHeight: 1.5 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Accordion sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        <AccordionSection id="examples" open={openSection === 'examples'} onToggle={toggle} label={isEN ? 'Typical examples' : 'Exemplos típicos'} color="#639922">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
            {examples.map((e, i) => (
              <div key={i} style={{ border: '1px solid #e5e7eb', borderTop: `3px solid ${e.color}`, borderRadius: '8px', padding: '12px', background: '#fff' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{e.title}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{e.desc}</div>
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection id="roles" open={openSection === 'roles'} onToggle={toggle} label={isEN ? 'Roles in the micro-increment' : 'Papéis no micro-increment'} color="#7F77DD">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
            {roles.map(r => (
              <Link key={r.name} to={r.href} style={{ textDecoration: 'none' }}>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px', transition: 'box-shadow 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: r.bg, color: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}>{r.initials}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{r.resp}</div>
                </div>
              </Link>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection id="anti" open={openSection === 'anti'} onToggle={toggle} label={isEN ? 'Anti-patterns to avoid' : 'Anti-padrões a evitar'} color="#993556">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
            {antiPatterns.map((a, i) => (
              <div key={i} style={{ border: '1px solid #F7C1C1', borderRadius: '8px', padding: '12px', background: '#FCEBEB', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A32D2D', flexShrink: 0, marginTop: '5px' }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#791F1F', marginBottom: '3px' }}>{a.label}</div>
                  <div style={{ fontSize: '12px', color: '#A32D2D', lineHeight: 1.5 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection id="metrics" open={openSection === 'metrics'} onToggle={toggle} label={isEN ? 'Micro-increment-oriented metrics' : 'Métricas orientadas a micro-increments'} color="#378ADD">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#378ADD', flexShrink: 0, marginTop: '5px' }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{m.label}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>

      </div>
    </div>
  );
}
