$content = @'
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const sections_pt = [
  { title: 'Fases', href: '/docs/phases', color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27', desc: '8 fases operacionais do fluxo de merge — do planejamento ao rollback.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 18l4-6 4 4 4-8 4 5" stroke="#BA7517" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="24" height="24" rx="5" stroke="#BA7517" strokeWidth="1.5"/></svg> },
  { title: 'Papéis', href: '/docs/roles', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', desc: 'Developer A, Developer B e Mediador — responsabilidades e handoffs explícitos.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="10" r="4" stroke="#7F77DD" strokeWidth="1.5"/><circle cx="19" cy="10" r="4" stroke="#7F77DD" strokeWidth="1.5"/><path d="M3 24c0-3.5 3-6 7-6M13 24c0-3.5 3-6 7-6" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Atividades', href: '/docs/activities', color: '#639922', bg: '#EAF3DE', border: '#97C459', desc: '8 atividades executáveis com entradas, saídas e quality gates definidos.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#639922" strokeWidth="1.5"/><path d="M9 10l3 3 6-6" stroke="#639922" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 18h10" stroke="#639922" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Artefatos', href: '/docs/artifacts', color: '#993556', bg: '#FBEAF0', border: '#ED93B1', desc: '10 artefatos rastreáveis que conectam fases, papéis e decisões.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="3" width="20" height="22" rx="3" stroke="#993556" strokeWidth="1.5"/><path d="M9 10h10M9 15h10M9 20h6" stroke="#993556" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Guidelines', href: '/docs/guidelines', color: '#0F6E56', bg: '#E1F5EE', border: '#9FE1CB', desc: '11 quality gates e diretrizes que governam a progressão do fluxo.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3l10 5.5v6c0 5-4 9-10 10.5C8 23.5 4 19.5 4 14.5v-6L14 3z" stroke="#0F6E56" strokeWidth="1.5"/><path d="M10 14l3 3 5-6" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Templates', href: '/docs/templates', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', desc: 'Checklists operacionais por fase para padronizar práticas da equipe.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#378ADD" strokeWidth="1.5"/><path d="M9 10l3 3 6-6M9 18l3 3 6-6" stroke="#378ADD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

const sections_en = [
  { title: 'Phases', href: '/docs/phases', color: '#BA7517', bg: '#FAEEDA', border: '#EF9F27', desc: '8 operational merge flow phases — from planning to rollback.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 18l4-6 4 4 4-8 4 5" stroke="#BA7517" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="24" height="24" rx="5" stroke="#BA7517" strokeWidth="1.5"/></svg> },
  { title: 'Roles', href: '/docs/roles', color: '#7F77DD', bg: '#EEEDFE', border: '#AFA9EC', desc: 'Developer A, Developer B, and Mediator — explicit responsibilities and handoffs.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="10" r="4" stroke="#7F77DD" strokeWidth="1.5"/><circle cx="19" cy="10" r="4" stroke="#7F77DD" strokeWidth="1.5"/><path d="M3 24c0-3.5 3-6 7-6M13 24c0-3.5 3-6 7-6" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Activities', href: '/docs/activities', color: '#639922', bg: '#EAF3DE', border: '#97C459', desc: '8 executable activities with defined inputs, outputs, and quality gates.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#639922" strokeWidth="1.5"/><path d="M9 10l3 3 6-6" stroke="#639922" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 18h10" stroke="#639922" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Artifacts', href: '/docs/artifacts', color: '#993556', bg: '#FBEAF0', border: '#ED93B1', desc: '10 traceable artifacts connecting phases, roles, and decisions.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="3" width="20" height="22" rx="3" stroke="#993556" strokeWidth="1.5"/><path d="M9 10h10M9 15h10M9 20h6" stroke="#993556" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: 'Guidelines', href: '/docs/guidelines', color: '#0F6E56', bg: '#E1F5EE', border: '#9FE1CB', desc: '11 quality gates and governance guidelines for the merge flow.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3l10 5.5v6c0 5-4 9-10 10.5C8 23.5 4 19.5 4 14.5v-6L14 3z" stroke="#0F6E56" strokeWidth="1.5"/><path d="M10 14l3 3 5-6" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Templates', href: '/docs/templates', color: '#378ADD', bg: '#E6F1FB', border: '#85B7EB', desc: 'Operational checklists per phase to standardize team practices.', icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#378ADD" strokeWidth="1.5"/><path d="M9 10l3 3 6-6M9 18l3 3 6-6" stroke="#378ADD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

const features_pt = [
  { title: 'Colaboração estruturada', desc: 'Papéis explícitos (Developer A, Developer B, Mediador) garantem que cada decisão técnica seja compartilhada, registrada e rastreável.', img: useBaseUrl('img/pair-programming.svg'), href: '/docs/roles', color: '#7F77DD', badge: 'Colaboração' },
  { title: 'Revisão orientada à qualidade', desc: 'Checklists e quality gates objetivos em cada fase eliminam ambiguidades e reduzem conflitos tardios de integração.', img: useBaseUrl('img/undraw_code-review_jdgp.svg'), href: '/docs/guidelines/code-review-checklist', color: '#BA7517', badge: 'Qualidade' },
  { title: 'Rastreabilidade ponta a ponta', desc: 'De issue a release — cada artefato conecta fases, papéis e decisões, viabilizando auditoria e aprendizado organizacional.', img: useBaseUrl('img/undraw_version-control.svg'), href: '/docs/artifacts', color: '#993556', badge: 'Rastreabilidade' },
];

const features_en = [
  { title: 'Structured collaboration', desc: 'Explicit roles (Developer A, Developer B, Mediator) ensure every technical decision is shared, recorded, and traceable.', img: useBaseUrl('img/pair-programming.svg'), href: '/docs/roles', color: '#7F77DD', badge: 'Collaboration' },
  { title: 'Quality-driven review', desc: 'Objective checklists and quality gates at each phase eliminate ambiguities and reduce late integration conflicts.', img: useBaseUrl('img/undraw_code-review_jdgp.svg'), href: '/docs/guidelines/code-review-checklist', color: '#BA7517', badge: 'Quality' },
  { title: 'End-to-end traceability', desc: 'From issue to release — each artifact connects phases, roles, and decisions, enabling auditing and organizational learning.', img: useBaseUrl('img/undraw_version-control.svg'), href: '/docs/artifacts', color: '#993556', badge: 'Traceability' },
];

const stats_pt = [
  { n: '31', label: 'Estudos analisados',  sub: 'Mapeamento sistemático' },
  { n: '36', label: 'Desenvolvedores',      sub: 'Survey quantitativo' },
  { n: '8',  label: 'Especialistas',        sub: 'Entrevistas P1–P8' },
  { n: '8',  label: 'Fases operacionais',   sub: 'Guideline MergeTrace' },
];

const stats_en = [
  { n: '31', label: 'Studies analyzed',    sub: 'Systematic mapping' },
  { n: '36', label: 'Developers',          sub: 'Quantitative survey' },
  { n: '8',  label: 'Specialists',         sub: 'Interviews P1–P8' },
  { n: '8',  label: 'Operational phases',  sub: 'MergeTrace guideline' },
];

const empirical_pt = [
  { label: '31 estudos',      desc: 'Mapeamento sistemático da literatura', color: '#378ADD', bg: '#E6F1FB' },
  { label: '36 respondentes', desc: 'Survey com desenvolvedores',           color: '#639922', bg: '#EAF3DE' },
  { label: '8 especialistas', desc: 'Entrevistas qualitativas (P1–P8)',     color: '#7F77DD', bg: '#EEEDFE' },
  { label: 'OpenUP',          desc: 'Base metodológica adaptada',           color: '#BA7517', bg: '#FAEEDA' },
];

const empirical_en = [
  { label: '31 studies',      desc: 'Systematic literature mapping',       color: '#378ADD', bg: '#E6F1FB' },
  { label: '36 respondents',  desc: 'Developer survey',                    color: '#639922', bg: '#EAF3DE' },
  { label: '8 specialists',   desc: 'Qualitative interviews (P1–P8)',      color: '#7F77DD', bg: '#EEEDFE' },
  { label: 'OpenUP',          desc: 'Adapted methodological base',         color: '#BA7517', bg: '#FAEEDA' },
];

export default function Home(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const sections  = isEN ? sections_en  : sections_pt;
  const features  = isEN ? features_en  : features_pt;
  const stats     = isEN ? stats_en     : stats_pt;
  const empirical = isEN ? empirical_en : empirical_pt;

  const heroTitle    = isEN ? <>Software Merge<br/>Guidelines</> : <>Software Merge<br/>Guidelines</>;
  const heroDesc     = isEN ? 'An operational guideline for software merge focused on quality, traceability, and collaboration — built from empirical evidence.' : 'Um guideline operacional para merge de software orientado à qualidade, rastreabilidade e colaboração — construído a partir de evidências empíricas.';
  const ctaExplore   = isEN ? 'Explore the guideline →' : 'Explorar o guideline →';
  const ctaStart     = isEN ? 'Get started' : 'Como começar';
  const compLabel    = isEN ? 'Components' : 'Componentes';
  const compTitle    = isEN ? 'Guideline structure → MergeTrace' : 'Estrutura do guideline → MergeTrace';
  const compDesc     = isEN ? 'MergeTrace is organized into six interdependent components, each with explicit roles, artifacts, and quality gates.' : 'O MergeTrace é organizado em seis componentes interdependentes, cada um com papéis, artefatos e quality gates explícitos.';
  const exploreBtn   = isEN ? 'Explore →' : 'Explorar →';
  const whyLabel     = isEN ? 'Why MergeTrace?' : 'Por que o MergeTrace?';
  const whyTitle     = isEN ? 'Quality-driven merge' : 'Merge orientado à qualidade';
  const learnMore    = isEN ? 'Learn more →' : 'Saiba mais →';
  const empLabel     = isEN ? 'Grounded in empirical evidence' : 'Fundamentado em evidências empíricas';
  const empTitle     = isEN ? 'Built from rigorous research' : 'Construído a partir de pesquisa rigorosa';
  const empDesc      = isEN ? 'MergeTrace combines a systematic literature mapping, a quantitative developer survey, and qualitative interviews with industry specialists — resulting in an empirically grounded and methodologically consistent guideline.' : 'O MergeTrace combina mapeamento sistemático da literatura, survey quantitativo com desenvolvedores e entrevistas qualitativas com especialistas da indústria — resultando em um guideline empiricamente fundamentado e metodologicamente consistente.';
  const empBtn       = isEN ? 'Learn more about MergeTrace →' : 'Saiba mais sobre o MergeTrace →';
  const ctaReady     = isEN ? 'Ready to get started?' : 'Pronto para começar?';
  const ctaReadyDesc = isEN ? 'The guideline is publicly available and can be adopted incrementally in any organizational context.' : 'O guideline está disponível publicamente e pode ser adotado de forma incremental em qualquer contexto organizacional.';
  const githubBtn    = isEN ? 'View on GitHub' : 'Ver no GitHub';

  return (
    <Layout title={siteConfig.title} description={isEN ? 'Operational guideline for quality-driven software merge' : 'Guideline operacional para merge de software orientado à qualidade'}>
      <main style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

        {/* HERO */}
        <div style={{ background: 'linear-gradient(135deg, #0d7a5f 0%, #1D9E75 60%, #25b585 100%)', padding: '72px 24px 0', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '40px', alignItems: 'flex-end' }}>
            <div style={{ paddingBottom: '64px' }}>
              <h1 style={{ fontSize: '52px', fontWeight: 800, color: '#fff', margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.5px' }}>{heroTitle}</h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', margin: '0 0 36px', lineHeight: 1.7, maxWidth: '480px' }}>{heroDesc}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/docs/welcome" style={{ background: '#fff', color: '#0F6E56', textDecoration: 'none', fontSize: '15px', fontWeight: 800, padding: '14px 28px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', transition: 'transform 0.15s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}>
                  {ctaExplore}
                </Link>
                <Link to="/docs/welcome/getting-started" style={{ background: 'transparent', color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', border: '2px solid rgba(255,255,255,0.5)', transition: 'border-color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)'}>
                  {ctaStart}
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img src={useBaseUrl("img/Software integration-rafiki.svg")} alt="Software integration illustration" style={{ width: '100%', maxWidth: '400px', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '32px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px', borderRight: i < 3 ? '1px solid #e5e7eb' : 'none' }}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginTop: '6px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTIONS */}
        <div style={{ background: '#fafafa', padding: '72px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>{compLabel}</div>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#111', margin: '0 0 14px', letterSpacing: '-0.3px' }}>{compTitle}</h2>
              <p style={{ fontSize: '16px', color: '#6b7280', margin: '0 auto', lineHeight: 1.7, maxWidth: '540px' }}>{compDesc}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
              {sections.map((s, i) => (
                <Link key={i} to={s.href} style={{ textDecoration: 'none' }}>
                  <div style={{ border: '1px solid #e5e7eb', borderTop: `3px solid ${s.color}`, borderRadius: '14px', background: '#fff', padding: '22px', cursor: 'pointer', transition: 'box-shadow 0.15s, transform 0.15s', display: 'flex', flexDirection: 'column', gap: '12px' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
                    <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: s.bg, border: `1px solid ${s.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
                    <div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#111', marginBottom: '6px' }}>{s.title}</div>
                      <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65 }}>{s.desc}</div>
                    </div>
                    <div style={{ fontSize: '13px', color: s.color, fontWeight: 700, marginTop: 'auto' }}>{exploreBtn}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ background: '#fff', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>{whyLabel}</div>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#111', margin: '0', letterSpacing: '-0.3px' }}>{whyTitle}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 380px' : '380px 1fr', gap: '56px', alignItems: 'center' }}>
                  {i % 2 !== 0 && <div style={{ display: 'flex', justifyContent: 'center' }}><img src={f.img} alt={f.title} style={{ width: '100%', maxWidth: '340px' }}/></div>}
                  <div>
                    <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, color: f.color, textTransform: 'uppercase', letterSpacing: '0.07em', background: `${f.color}14`, border: `1px solid ${f.color}40`, borderRadius: '20px', padding: '3px 12px', marginBottom: '16px' }}>{f.badge}</div>
                    <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#111', margin: '0 0 14px', letterSpacing: '-0.2px' }}>{f.title}</h3>
                    <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.7, margin: '0 0 24px' }}>{f.desc}</p>
                    <Link to={f.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: f.color, textDecoration: 'none', fontSize: '14px', fontWeight: 700, border: `1.5px solid ${f.color}`, borderRadius: '8px', padding: '10px 20px', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `${f.color}10`}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                      {learnMore}
                    </Link>
                  </div>
                  {i % 2 === 0 && <div style={{ display: 'flex', justifyContent: 'center' }}><img src={f.img} alt={f.title} style={{ width: '100%', maxWidth: '340px' }}/></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EMPIRICAL BASE */}
        <div style={{ background: '#f0faf6', borderTop: '1px solid #9FE1CB', padding: '72px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '56px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F6E56', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '14px' }}>{empLabel}</div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111', margin: '0 0 16px', letterSpacing: '-0.3px' }}>{empTitle}</h2>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: '0 0 28px' }}>{empDesc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
                {empirical.map((f, i) => (
                  <div key={i} style={{ background: f.bg, borderRadius: '10px', padding: '14px 16px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: f.color, marginBottom: '4px' }}>{f.label}</div>
                    <div style={{ fontSize: '12px', color: f.color, lineHeight: 1.4, opacity: 0.85 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
              <Link to="/docs/welcome/introduction" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#1D9E75', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 700, padding: '12px 22px', borderRadius: '8px' }}>{empBtn}</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={useBaseUrl("img/Developer activity-amico.svg")} alt="Developer activity" style={{ width: '100%', maxWidth: '360px' }} />
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{ padding: '80px 24px', textAlign: 'center', background: '#fff' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <img src={useBaseUrl("img/pair-programming.svg")} alt="Getting started" style={{ width: '180px', marginBottom: '28px' }} />
            <h3 style={{ fontSize: '30px', fontWeight: 800, color: '#111', margin: '0 0 14px', letterSpacing: '-0.3px' }}>{ctaReady}</h3>
            <p style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 32px', lineHeight: 1.7 }}>{ctaReadyDesc}</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/docs/welcome/getting-started" style={{ background: '#1D9E75', color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 800, padding: '14px 28px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(29,158,117,0.3)', transition: 'transform 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}>
                Getting Started →
              </Link>
              <a href="https://github.com/StefaniRees/mergetrace" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#374151', textDecoration: 'none', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', border: '1.5px solid #e5e7eb', transition: 'border-color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#374151'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'}>
                {githubBtn}
              </a>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}

'@
[System.IO.File]::WriteAllText("C:\Users\stefani.rees\merge-docs\src\pages\index.tsx", $content, [System.Text.Encoding]::UTF8)
Write-Host "Done!"
