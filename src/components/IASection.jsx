import React, { useState } from 'react';

const WARNING_COLOR = '#BA7517';
const INFO_COLOR = '#378ADD';
const SUCCESS_COLOR = '#639922';
const PURPLE_COLOR = '#533AB7';
const DANGER_COLOR = '#D4537E';

const useCases = [
  {
    id: 'visao-geral',
    icon: '◈',
    color: PURPLE_COLOR,
    title: 'Visão Geral',
    tag: 'Princípio',
    tagColor: PURPLE_COLOR,
    summary: 'A IA acelera revisões, gera esboços e sugere commits — mas não substitui o julgamento técnico.',
    content: [
      { type: 'principle', text: 'Use como apoio. Decisões críticas continuam humanas.' },
      { type: 'quote', text: '"A IA pode sugerir uma resolução e eu comparar com a minha. Se estiver 95% parecido, eu aceito."', author: 'P8' },
      { type: 'quote', text: '"Se a IA disser o que mudar, quero saber por que, e de onde veio essa recomendação."', author: 'P8' },
    ],
  },
  {
    id: 'apoio-juniores',
    icon: '◎',
    color: SUCCESS_COLOR,
    title: 'Apoio a Juniores',
    tag: 'Educação',
    tagColor: SUCCESS_COLOR,
    summary: 'Explicações de boas práticas, code smells e estilo com rascunhos de correções simples.',
    content: [
      { type: 'do', text: 'Usar para explicar boas práticas, paralelismo e code smells' },
      { type: 'do', text: 'Gerar rascunhos de correções simples e exemplos de testes' },
      { type: 'dont', text: 'Não aceite sugestões cegamente — leitura crítica é obrigatória' },
      { type: 'quote', text: '"Seria interessante uma IA avisar quando dois devs estão mexendo no mesmo método antes de dar conflito."', author: 'P7' },
    ],
  },
  {
    id: 'deteccao-conflitos',
    icon: '◉',
    color: WARNING_COLOR,
    title: 'Detecção de Conflitos',
    tag: 'Prevenção',
    tagColor: WARNING_COLOR,
    summary: 'Alertas antecipados de conflitos em métodos compartilhados e destaque de hotspots históricos.',
    content: [
      { type: 'do', text: 'Alertas antecipados de conflitos em métodos compartilhados' },
      { type: 'do', text: 'Destacar hotspots — arquivos com muitos conflitos históricos' },
      { type: 'do', text: 'Sugerir estratégias de resolução: merge colaborativo, dividir PR' },
      { type: 'quote', text: '"A IA do GitHub mostrava quem mexeu no arquivo e quanto tempo ia demorar o review."', author: 'P3' },
    ],
  },
  {
    id: 'mensagens-commit',
    icon: '◇',
    color: INFO_COLOR,
    title: 'Mensagens de Commit',
    tag: 'Padronização',
    tagColor: INFO_COLOR,
    summary: 'Gere resumos iniciais de commit e ajuste manualmente seguindo Conventional Commits.',
    content: [
      { type: 'do', text: 'Gerar resumos iniciais de commit para ajuste manual' },
      { type: 'do', text: 'Seguir Conventional Commits com ID da tarefa/squad' },
      { type: 'dont', text: 'IA ajuda na forma — o conteúdo técnico é sua responsabilidade' },
      { type: 'quote', text: '"Usei pra gerar um sumário do que mudou no PR. Me ajudou a escrever a mensagem de commit certinha."', author: 'P5' },
    ],
  },
  {
    id: 'estrategias-merge',
    icon: '◆',
    color: PURPLE_COLOR,
    title: 'Estratégias de Merge',
    tag: 'Automação',
    tagColor: PURPLE_COLOR,
    summary: 'Dicas contextuais, reconhecimento de padrões pós-build e notificações de regressões.',
    content: [
      { type: 'do', text: 'Dicas contextuais: "seu código está estável, commite agora"' },
      { type: 'do', text: 'Reconhecer padrões de pós-build e sugerir ações como rodar lint' },
      { type: 'do', text: 'Notificações quando a pipeline detecta regressões recorrentes' },
    ],
  },
  {
    id: 'pre-review',
    icon: '◐',
    color: INFO_COLOR,
    title: 'Pré-review e Revisores',
    tag: 'Revisão',
    tagColor: INFO_COLOR,
    summary: 'Use IA para pré-review — apontar pontos de atenção antes de envolver revisores humanos.',
    content: [
      { type: 'do', text: 'Pré-review: apontar pontos de atenção antes de envolver revisores' },
      { type: 'do', text: 'Sugestão de revisores com base em histórico e arquivos afetados' },
      { type: 'dont', text: 'Não trate sugestões como aprovação — a análise final é humana' },
    ],
  },
  {
    id: 'testes-diff',
    icon: '◑',
    color: SUCCESS_COLOR,
    title: 'Testes a partir do Diff',
    tag: 'Qualidade',
    tagColor: SUCCESS_COLOR,
    summary: 'Peça à IA para sugerir testes com base no diff — métodos e arquivos afetados.',
    content: [
      { type: 'do', text: 'Sugerir testes com base no diff — métodos e arquivos afetados' },
      { type: 'do', text: 'Útil para lembrar casos de borda e cobertura mínima' },
      { type: 'dont', text: 'Revise e adapte — testes gerados não garantem lógica de negócio correta' },
    ],
  },
  {
    id: 'riscos',
    icon: '⚠',
    color: DANGER_COLOR,
    title: 'Riscos e Cuidados',
    tag: 'Atenção',
    tagColor: DANGER_COLOR,
    summary: 'Estudos indicam aumento de vulnerabilidades quando IA é usada sem revisão humana.',
    content: [
      { type: 'dont', text: 'Nunca faça auto-commit ou auto-merge baseado apenas na IA' },
      { type: 'dont', text: 'Atenção a vazamento de dados em prompts — secrets e informações sensíveis' },
      { type: 'warning', text: 'Estudos indicam aumento de ~5% em vulnerabilidades quando IA é usada sem revisão' },
      { type: 'quote', text: '"A IA pode ajudar, mas ainda arrisca gerar vulnerabilidades — um estudo mostrou aumento de cerca de 5%."', author: 'P8' },
    ],
  },
];

function ContentItem({ item }) {
  const styles = {
    do: { bg: '#EAF3DE', color: '#3B6D11', prefix: '✓' },
    dont: { bg: '#FBEAF0', color: '#72243E', prefix: '✗' },
    principle: { bg: '#EEEDFE', color: '#3C3489', prefix: '→' },
    warning: { bg: '#FAEEDA', color: '#633806', prefix: '!' },
    quote: { bg: '#F5F5F5', color: '#555', prefix: '"' },
  };

  const s = styles[item.type] || styles.do;

  if (item.type === 'quote') {
    return (
      <div style={{
        background: s.bg, borderRadius: '8px', padding: '10px 14px',
        marginBottom: '6px', borderLeft: '3px solid #d1d5db',
      }}>
        <p style={{ fontSize: '12px', color: s.color, lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
          {item.text}
        </p>
        {item.author && (
          <p style={{ fontSize: '11px', color: '#9ca3af', margin: '4px 0 0', fontWeight: 700 }}>
            — {item.author}
          </p>
        )}
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex', gap: '8px', alignItems: 'flex-start',
      background: s.bg, borderRadius: '8px', padding: '8px 12px',
      marginBottom: '6px',
    }}>
      <span style={{ fontSize: '12px', fontWeight: 700, color: s.color, flexShrink: 0, marginTop: '1px' }}>
        {s.prefix}
      </span>
      <span style={{ fontSize: '12px', color: s.color, lineHeight: 1.5 }}>
        {item.text}
      </span>
    </div>
  );
}

function UseCaseCard({ useCase }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderTop: `3px solid ${useCase.color}`,
      borderRadius: '10px',
      background: '#fff',
      overflow: 'hidden',
      transition: 'box-shadow 0.15s',
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none',
          border: 'none', cursor: 'pointer', padding: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: `${useCase.color}14`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', color: useCase.color, flexShrink: 0,
          }}>
            {useCase.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{useCase.title}</span>
              <span style={{
                fontSize: '10px', padding: '1px 7px', borderRadius: '99px', fontWeight: 700,
                background: `${useCase.tagColor}14`, color: useCase.tagColor,
              }}>
                {useCase.tag}
              </span>
            </div>
            <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
              {useCase.summary}
            </p>
          </div>
          <span style={{
            fontSize: '12px', color: '#9ca3af', flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s', marginTop: '4px',
          }}>▾</span>
        </div>
      </button>

      {open && (
        <div style={{ padding: '0 16px 16px' }}>
          <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
            {useCase.content.map((item, i) => (
              <ContentItem key={i} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function IASection() {
  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Principle banner */}
      <div style={{
        background: '#EEEDFE',
        border: '1px solid #AFA9EC',
        borderLeft: '4px solid #533AB7',
        borderRadius: '10px',
        padding: '16px 20px',
        marginBottom: '28px',
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
      }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: '#533AB7', display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0,
          fontSize: '18px', color: '#fff',
        }}>
          ◈
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#3C3489', marginBottom: '4px' }}>
            Princípio central — C6: IA como apoio transversal
          </div>
          <p style={{ fontSize: '13px', color: '#534AB7', lineHeight: 1.6, margin: 0 }}>
            A IA é posicionada como um mecanismo de <strong>suporte contextual</strong> — não de substituição — às decisões humanas.
            Em todos os usos, as evidências empíricas reforçam a necessidade de <strong>supervisão humana contínua</strong>,
            especialmente para mitigar riscos relacionados à introdução de vulnerabilidades e decisões técnicas equivocadas.
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px', marginBottom: '28px',
      }}>
        {[
          { value: '6/8', label: 'especialistas relataram uso positivo de IA', color: '#639922' },
          { value: '6/8', label: 'usaram IA para sumarização de diffs e PRs', color: '#378ADD' },
          { value: '~5%', label: 'aumento de vulnerabilidades sem supervisão', color: '#D4537E' },
        ].map((stat, i) => (
          <div key={i} style={{
            background: `${stat.color}08`,
            border: `1px solid ${stat.color}33`,
            borderRadius: '10px', padding: '14px 16px',
          }}>
            <div style={{ fontSize: '24px', fontWeight: 700, color: stat.color, marginBottom: '4px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Use cases grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '12px',
      }}>
        {useCases.map(uc => (
          <UseCaseCard key={uc.id} useCase={uc} />
        ))}
      </div>

      {/* Footer note */}
      <div style={{
        marginTop: '24px', padding: '14px 18px',
        background: '#F9FAFB', borderRadius: '10px',
        border: '1px solid #e5e7eb',
        fontSize: '12px', color: '#6b7280', lineHeight: 1.6,
      }}>
        <strong style={{ color: '#374151' }}>Fundamentação empírica:</strong> Os usos de IA descritos nesta seção derivam diretamente
        das entrevistas com especialistas (P1–P8), categorizados como C6 — Inteligência Artificial como apoio transversal —
        e das observações O11 e O12 do estudo qualitativo do MergeTrace.
      </div>
    </div>
  );
}
