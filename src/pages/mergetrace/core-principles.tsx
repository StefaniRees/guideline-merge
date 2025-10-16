import React, {useMemo, useState} from "react";
/**
 * Se não quiser instalar ícones, troque os <Icon/> por emoji (ex.: <span>🧩</span>)
 * ou remova as tags. Caso use ícones:
 *   npm i lucide-react
 */
import {Layers, Users, Landmark, RefreshCcw, ChevronDown, ChevronUp, ArrowUpRight} from "lucide-react";

type LinkItem = { label: string; href: string };
type Principle = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  links?: LinkItem[];
  icon?: React.ReactNode;
};

const PRINCIPLES: Principle[] = [
  {
    id: "balance",
    title: "Balancear qualidade e velocidade de integração",
    tagline: "Maximizar valor para stakeholders sem sacrificar estabilidade.",
    body:
      "Permita que os times equilibrem entrega contínua com padrões de qualidade: regras de branch, políticas de PR, checagens automatizadas e critérios de aceite previsíveis.",
    links: [
      { label: "Políticas de PR", href: "/guides/pull-requests" },
      { label: "Critérios de Aceite", href: "/guides/acceptance-criteria" },
    ],
    icon: <Layers size={20} />,
  },
  {
    id: "collaborate",
    title: "Colaborar para alinhar interesses e entendimento",
    tagline: "Reduzir conflitos e aumentar a clareza do fluxo de merge.",
    body:
      "Use templates de PR, rotas de revisão, pares responsáveis e feedback objetivo. Registre decisões e resoluções para criar memória organizacional.",
    links: [
      { label: "Template de PR (guia)", href: "/guides/pull-requests" },
    ],
    icon: <Users size={20} />,
  },
  {
    id: "focus-architecture",
    title: "Focar na arquitetura cedo para minimizar riscos",
    tagline: "Mapear domínios, dependências e integrações antes da codificação.",
    body:
      "Capture componentes, contratos de API e fluxos de dados. Em MergeTrace, isso aparece como Ontologia, Diagramas e Checklist de riscos (migrações, flags, compatibilidade).",
    links: [
      { label: "Ontologia MergeTrace", href: "/ontology/overview" },
      { label: "Checklist de Riscos", href: "/checklists/risk" },
    ],
    icon: <Landmark size={20} />,
  },
  {
    id: "evolve",
    title: "Evoluir continuamente com feedback e melhoria",
    tagline: "Iterar com métricas, retros e automações.",
    body:
      "Colete métricas (lead time, conflitos, hotfix), faça retrospectivas periódicas e experimente melhorias (flags, paralelização de CI, rebase obrigatório). Atualize o guideline.",
    links: [
      { label: "Métricas de Merge", href: "/metrics/merge" },
      { label: "Retrospectiva de Processo", href: "/rituals/retrospective" },
    ],
    icon: <RefreshCcw size={20} />,
  },
];

function SectionHeader({title, action}: {title: string; action?: React.ReactNode}) {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}} className="margin-bottom--sm">
      <h2 className="text--semi-bold">{title}</h2>
      {action}
    </div>
  );
}

function PillLink({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <a href={href} className="button button--secondary button--sm" style={{borderRadius: 9999}}>
      <ArrowUpRight size={16} style={{marginRight: 6, verticalAlign: "-2px"}} />
      {children}
    </a>
  );
}

function PrincipleCard({p, isOpen, onToggle}: {p: Principle; isOpen: boolean; onToggle: () => void}) {
  return (
    <div className="card" style={{height: "100%"}}>
      <button onClick={onToggle} className="card__header" style={{display: "flex", alignItems: "flex-start", gap: 12}}>
        <div className="avatar__intro" style={{display: "flex", alignItems: "center", gap: 8}}>
          <span aria-hidden>{p.icon ?? "🧩"}</span>
          <div>
            <h3 className="text--bold" style={{marginBottom: 2}}>{p.title}</h3>
            <small style={{opacity: 0.8}}>{p.tagline}</small>
          </div>
        </div>
        <div style={{marginLeft: "auto"}} aria-hidden>
          {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
        </div>
      </button>

      {isOpen && (
        <div className="card__body">
          <p>{p.body}</p>
          {p.links && p.links.length > 0 && (
            <div className="margin-top--sm" style={{display: "flex", gap: 8, flexWrap: "wrap"}}>
              {p.links.map(l => (
                <PillLink key={l.href} href={l.href}>{l.label}</PillLink>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CorePrinciplesPage() {
  const [open, setOpen] = useState<string[]>(["balance"]);
  const allIds = useMemo(() => PRINCIPLES.map(p => p.id), []);
  const toggle = (id: string) =>
    setOpen(curr => curr.includes(id) ? curr.filter(x => x !== id) : [...curr, id]);

  return (
    <main className="min-h-screen w-full">
      {/* Hero no padrão do site */}
      <div className="hero heroBanner">
        <div className="container heroInner">
          <h1 className="hero__title">Core Principles – MergeTrace</h1>
          <p className="hero__subtitle">
            Quatro princípios que orientam papéis, artefatos e tarefas do processo de merge. Base para interpretar
            responsabilidades, organizar o fluxo de integração e apoiar decisões.
          </p>
        </div>
      </div>

      {/* Relationships / Contents */}
      <section className="container margin-vert--lg">
        <div className="card padding--md">
          <SectionHeader
            title="Contents"
            action={
              <div className="button-group button-group--block">
                <button className="button button--sm" onClick={() => setOpen(allIds)}>Expand All</button>
                <button className="button button--sm button--secondary" onClick={() => setOpen([])}>Collapse All</button>
              </div>
            }
          />

          <div className="row">
            {PRINCIPLES.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="col col--3">
                <div className="card" style={{minHeight: "100%"}}>
                  <div className="card__body">
                    <div style={{display: "flex", alignItems: "center", gap: 8}}>
                      <span aria-hidden>{p.icon ?? "🧩"}</span>
                      <strong>{p.title}</strong>
                    </div>
                    <p className="margin-top--xs" style={{fontSize: ".9rem", opacity: .8}}>{p.tagline}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Description + Panels */}
      <section className="container margin-vert--lg">
        <div className="card padding--lg">
          <SectionHeader title="Main Description" />
          <p className="margin-top--md">
            MergeTrace se baseia em quatro princípios que se reforçam mutuamente, conectando decisões de arquitetura,
            práticas de colaboração e automações de CI/CD a resultados de negócio.
          </p>

          <div className="row margin-top--md">
            {PRINCIPLES.map((p) => (
              <div key={p.id} id={p.id} className="col col--6">
                <PrincipleCard p={p} isOpen={open.includes(p.id)} onToggle={() => toggle(p.id)} />
              </div>
            ))}
          </div>

          <div className="margin-top--md" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <small style={{opacity: .7}}>Dica: personalize os links acima conforme suas seções do guia.</small>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </section>
    </main>
  );
}
