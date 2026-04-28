import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const WARNING_COLOR = '#BA7517';
const INFO_COLOR = '#378ADD';
const SUCCESS_COLOR = '#639922';
const PURPLE_COLOR = '#533AB7';
const DANGER_COLOR = '#D4537E';

const useCases_pt = [
  { id: 'visao-geral', icon: '◈', color: PURPLE_COLOR, title: 'Visão Geral', tag: 'Princípio', tagColor: PURPLE_COLOR, summary: 'A IA acelera revisões, gera esboços e sugere commits — mas não substitui o julgamento técnico.', content: [{ type: 'principle', text: 'Use como apoio. Decisões críticas continuam humanas.' }, { type: 'quote', text: '"A IA pode sugerir uma resolução e eu comparar com a minha. Se estiver 95% parecido, eu aceito."', author: 'P8' }, { type: 'quote', text: '"Se a IA disser o que mudar, quero saber por que, e de onde veio essa recomendação."', author: 'P8' }] },
  { id: 'apoio-juniores', icon: '◎', color: SUCCESS_COLOR, title: 'Apoio a Juniores', tag: 'Educação', tagColor: SUCCESS_COLOR, summary: 'Explicações de boas práticas, code smells e estilo com rascunhos de correções simples.', content: [{ type: 'do', text: 'Usar para explicar boas práticas, paralelismo e code smells' }, { type: 'do', text: 'Gerar rascunhos de correções simples e exemplos de testes' }, { type: 'dont', text: 'Não aceite sugestões cegamente — leitura crítica é obrigatória' }, { type: 'quote', text: '"Seria interessante uma IA avisar quando dois devs estão mexendo no mesmo método antes de dar conflito."', author: 'P7' }] },
  { id: 'deteccao-conflitos', icon: '◉', color: WARNING_COLOR, title: 'Detecção de Conflitos', tag: 'Prevenção', tagColor: WARNING_COLOR, summary: 'Alertas antecipados de conflitos em métodos compartilhados e destaque de hotspots históricos.', content: [{ type: 'do', text: 'Alertas antecipados de conflitos em métodos compartilhados' }, { type: 'do', text: 'Destacar hotspots — arquivos com muitos conflitos históricos' }, { type: 'do', text: 'Sugerir estratégias de resolução: merge colaborativo, dividir PR' }, { type: 'quote', text: '"A IA do GitHub mostrava quem mexeu no arquivo e quanto tempo ia demorar o review."', author: 'P3' }] },
  { id: 'mensagens-commit', icon: '◇', color: INFO_COLOR, title: 'Mensagens de Commit', tag: 'Padronização', tagColor: INFO_COLOR, summary: 'Gere resumos iniciais de commit e ajuste manualmente seguindo Conventional Commits.', content: [{ type: 'do', text: 'Gerar resumos iniciais de commit para ajuste manual' }, { type: 'do', text: 'Seguir Conventional Commits com ID da tarefa/squad' }, { type: 'dont', text: 'IA ajuda na forma — o conteúdo técnico é sua responsabilidade' }, { type: 'quote', text: '"Usei pra gerar um sumário do que mudou no PR. Me ajudou a escrever a mensagem de commit certinha."', author: 'P5' }] },
  { id: 'estrategias-merge', icon: '◆', color: PURPLE_COLOR, title: 'Estratégias de Merge', tag: 'Automação', tagColor: PURPLE_COLOR, summary: 'Dicas contextuais, reconhecimento de padrões pós-build e notificações de regressões.', content: [{ type: 'do', text: 'Dicas contextuais: "seu código está estável, commite agora"' }, { type: 'do', text: 'Reconhecer padrões de pós-build e sugerir ações como rodar lint' }, { type: 'do', text: 'Notificações quando a pipeline detecta regressões recorrentes' }] },
  { id: 'pre-review', icon: '●', color: INFO_COLOR, title: 'Pré-review e Revisores', tag: 'Revisão', tagColor: INFO_COLOR, summary: 'Use IA para pré-review — apontar pontos de atenção antes de envolver revisores humanos.', content: [{ type: 'do', text: 'Pré-review: apontar pontos de atenção antes de envolver revisores' }, { type: 'do', text: 'Sugestão de revisores com base em histórico e arquivos afetados' }, { type: 'dont', text: 'Não trate sugestões como aprovação — a análise final é humana' }] },
  { id: 'testes-diff', icon: '◑', color: SUCCESS_COLOR, title: 'Testes a partir do Diff', tag: 'Qualidade', tagColor: SUCCESS_COLOR, summary: 'Peça à IA para sugerir testes com base no diff — métodos e arquivos afetados.', content: [{ type: 'do', text: 'Sugerir testes com base no diff — métodos e arquivos afetados' }, { type: 'do', text: 'Útil para lembrar casos de borda e cobertura mínima' }, { type: 'dont', text: 'Revise e adapte — testes gerados não garantem lógica de negócio correta' }] },
  { id: 'riscos', icon: '⚠', color: DANGER_COLOR, title: 'Riscos e Cuidados', tag: 'Atenção', tagColor: DANGER_COLOR, summary: 'Estudos indicam aumento de vulnerabilidades quando IA é usada sem revisão humana.', content: [{ type: 'dont', text: 'Nunca faça auto-commit ou auto-merge baseado apenas na IA' }, { type: 'dont', text: 'Atenção a vazamento de dados em prompts — secrets e informações sensíveis' }, { type: 'warning', text: 'Estudos indicam aumento de ~5% em vulnerabilidades quando IA é usada sem revisão' }, { type: 'quote', text: '"A IA pode ajudar, mas ainda arrisca gerar vulnerabilidades — um estudo mostrou aumento de cerca de 5%."', author: 'P8' }] },
];

const useCases_en = [
  { id: 'visao-geral', icon: '◈', color: PURPLE_COLOR, title: 'Overview', tag: 'Principle', tagColor: PURPLE_COLOR, summary: 'AI accelerates reviews, generates drafts, and suggests commits — but does not replace technical judgment.', content: [{ type: 'principle', text: 'Use as support. Critical decisions remain human.' }, { type: 'quote', text: '"AI can suggest a resolution and I compare it with mine. If it\'s 95% similar, I accept it."', author: 'P8' }, { type: 'quote', text: '"If AI tells me what to change, I want to know why and where that recommendation came from."', author: 'P8' }] },
  { id: 'apoio-juniores', icon: '◎', color: SUCCESS_COLOR, title: 'Junior Support', tag: 'Education', tagColor: SUCCESS_COLOR, summary: 'Explanations of best practices, code smells, and style with drafts of simple fixes.', content: [{ type: 'do', text: 'Use to explain best practices, parallelism, and code smells' }, { type: 'do', text: 'Generate simple fix drafts and test examples' }, { type: 'dont', text: 'Do not blindly accept suggestions — critical reading is mandatory' }, { type: 'quote', text: '"It would be interesting for AI to warn when two devs are touching the same method before a conflict occurs."', author: 'P7' }] },
  { id: 'deteccao-conflitos', icon: '◉', color: WARNING_COLOR, title: 'Conflict Detection', tag: 'Prevention', tagColor: WARNING_COLOR, summary: 'Early conflict alerts on shared methods and highlighting of historical hotspots.', content: [{ type: 'do', text: 'Early alerts for conflicts in shared methods' }, { type: 'do', text: 'Highlight hotspots — files with many historical conflicts' }, { type: 'do', text: 'Suggest resolution strategies: collaborative merge, split PR' }, { type: 'quote', text: '"GitHub\'s AI showed who touched the file and how long the review would take."', author: 'P3' }] },
  { id: 'mensagens-commit', icon: '◇', color: INFO_COLOR, title: 'Commit Messages', tag: 'Standardization', tagColor: INFO_COLOR, summary: 'Generate initial commit summaries and adjust manually following Conventional Commits.', content: [{ type: 'do', text: 'Generate initial commit summaries for manual adjustment' }, { type: 'do', text: 'Follow Conventional Commits with task/squad ID' }, { type: 'dont', text: 'AI helps with form — technical content is your responsibility' }, { type: 'quote', text: '"I used it to generate a summary of what changed in the PR. It helped me write the commit message correctly."', author: 'P5' }] },
  { id: 'estrategias-merge', icon: '◆', color: PURPLE_COLOR, title: 'Merge Strategies', tag: 'Automation', tagColor: PURPLE_COLOR, summary: 'Contextual tips, post-build pattern recognition, and regression notifications.', content: [{ type: 'do', text: 'Contextual tips: "your code is stable, commit now"' }, { type: 'do', text: 'Recognize post-build patterns and suggest actions like running lint' }, { type: 'do', text: 'Notifications when the pipeline detects recurring regressions' }] },
  { id: 'pre-review', icon: '●', color: INFO_COLOR, title: 'Pre-review and Reviewers', tag: 'Review', tagColor: INFO_COLOR, summary: 'Use AI for pre-review — pointing out areas of attention before involving human reviewers.', content: [{ type: 'do', text: 'Pre-review: point out areas of attention before involving reviewers' }, { type: 'do', text: 'Reviewer suggestions based on history and affected files' }, { type: 'dont', text: 'Do not treat suggestions as approval — the final analysis is human' }] },
  { id: 'testes-diff', icon: '◑', color: SUCCESS_COLOR, title: 'Tests from Diff', tag: 'Quality', tagColor: SUCCESS_COLOR, summary: 'Ask AI to suggest tests based on the diff — methods and affected files.', content: [{ type: 'do', text: 'Suggest tests based on the diff — methods and affected files' }, { type: 'do', text: 'Useful for remembering edge cases and minimum coverage' }, { type: 'dont', text: 'Review and adapt — generated tests do not guarantee correct business logic' }] },
  { id: 'riscos', icon: '⚠', color: DANGER_COLOR, title: 'Risks and Cautions', tag: 'Attention', tagColor: DANGER_COLOR, summary: 'Studies indicate increased vulnerabilities when AI is used without human review.', content: [{ type: 'dont', text: 'Never auto-commit or auto-merge based solely on AI' }, { type: 'dont', text: 'Watch for data leakage in prompts — secrets and sensitive information' }, { type: 'warning', text: 'Studies indicate ~5% increase in vulnerabilities when AI is used without review' }, { type: 'quote', text: '"AI can help, but it still risks generating vulnerabilities — a study showed an increase of about 5%."', author: 'P8' }] },
];

const stats_pt = [
  { value: '6/8', label: 'especialistas relataram uso positivo de IA', color: '#639922' },
  { value: '6/8', label: 'usaram IA para sumarização de diffs e PRs', color: '#378ADD' },
  { value: '~5%', label: 'aumento de vulnerabilidades sem supervisão', color: '#D4537E' },
];

const stats_en = [
  { value: '6/8', label: 'specialists reported positive AI usage', color: '#639922' },
  { value: '6/8', label: 'used AI to summarize diffs and PRs', color: '#378ADD' },
  { value: '~5%', label: 'increase in vulnerabilities without supervision', color: '#D4537E' },
];

function ContentItem({ item }) {
  const styles = {
    do:        { bg: '#EAF3DE', color: '#3B6D11', prefix: '✓' },
    dont:      { bg: '#FBEAF0', color: '#72243E', prefix: '✗' },
    principle: { bg: '#EEEDFE', color: '#3C3489', prefix: '→' },
    warning:   { bg: '#FAEEDA', color: '#633806', prefix: '!' },
    quote:     { bg: '#F5F5F5', color: '#555', prefix: '"' },
  };
  const s = styles[item.type] || styles.do;

  if (item.type === 'quote') {
    return (
      <div style={{ background: s.bg, borderRadius: '8px', padding: '10px 14px', marginBottom: '6px', borderLeft: '3px solid #d1d5db' }}>
        <p style={{ fontSize: '12px', color: s.color, lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>{item.text}</p>
        {item.author && <p style={{ fontSize: '11px', color: '#9ca3af', margin: '4px 0 0', fontWeight: 700 }}>— {item.author}</p>}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', background: s.bg, borderRadius: '8px', padding: '8px 12px', marginBottom: '6px' }}>
      <span style={{ fontSize: '12px', fontWeight: 700, color: s.color, flexShrink: 0, marginTop: '1px' }}>{s.prefix}</span>
      <span style={{ fontSize: '12px', color: s.color, lineHeight: 1.5 }}>{item.text}</span>
    </div>
  );
}

function UseCaseCard({ useCase }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid #e5e7eb', borderTop: `3px solid ${useCase.color}`, borderRadius: '10px', background: '#fff', overflow: 'hidden', transition: 'box-shadow 0.15s' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${useCase.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: useCase.color, flexShrink: 0 }}>{useCase.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{useCase.title}</span>
              <span style={{ fontSize: '10px', padding: '1px 7px', borderRadius: '99px', fontWeight: 700, background: `${useCase.tagColor}14`, color: useCase.tagColor }}>{useCase.tag}</span>
            </div>
            <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>{useCase.summary}</p>
          </div>
          <span style={{ fontSize: '12px', color: '#9ca3af', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginTop: '4px' }}>▾</span>
        </div>
      </button>
      {open && (
        <div style={{ padding: '0 16px 16px' }}>
          <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
            {useCase.content.map((item, i) => <ContentItem key={i} item={item} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default function IASection() {
  const { i18n } = useDocusaurusContext();
  const isEN = i18n.currentLocale === 'en';

  const useCases = isEN ? useCases_en : useCases_pt;
  const stats    = isEN ? stats_en    : stats_pt;

  const bannerTitle = isEN ? 'Core Principle — C6: AI as cross-cutting support' : 'Princípio central — C6: IA como apoio transversal';
  const bannerText  = isEN
    ? 'AI is positioned as a <strong>contextual support</strong> mechanism — not a replacement — for human decisions. In all uses, empirical evidence reinforces the need for <strong>continuous human supervision</strong>, especially to mitigate risks related to the introduction of vulnerabilities and misguided technical decisions.'
    : 'A IA é posicionada como um mecanismo de <strong>suporte contextual</strong> — não de substituição — às decisões humanas. Em todos os usos, as evidências empíricas reforçam a necessidade de <strong>supervisão humana contínua</strong>, especialmente para mitigar riscos relacionados à introdução de vulnerabilidades e decisões técnicas equivocadas.';
  const footerText = isEN
    ? '<strong style="color:#374151">Empirical foundation:</strong> The AI uses described in this section derive directly from interviews with specialists (P1–P8), categorized as C6 — Artificial Intelligence as cross-cutting support — and from observations O11 and O12 of the MergeTrace qualitative study.'
    : '<strong style="color:#374151">Fundamentação empírica:</strong> Os usos de IA descritos nesta seção derivam diretamente das entrevistas com especialistas (P1–P8), categorizados como C6 — Inteligência Artificial como apoio transversal — e das observações O11 e O12 do estudo qualitativo do MergeTrace.';

  return (
    <div style={{ padding: '0 0 2rem' }}>

      {/* Principle banner */}
      <div style={{ background: '#EEEDFE', border: '1px solid #AFA9EC', borderLeft: '4px solid #533AB7', borderRadius: '10px', padding: '16px 20px', marginBottom: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#533AB7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px', color: '#fff' }}>◈</div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#3C3489', marginBottom: '4px' }}>{bannerTitle}</div>
          <p style={{ fontSize: '13px', color: '#534AB7', lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: bannerText }} />
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '28px' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ background: `${stat.color}08`, border: `1px solid ${stat.color}33`, borderRadius: '10px', padding: '14px 16px' }}>
            <div style={{ fontSize: '24px', fontWeight: 700, color: stat.color, marginBottom: '4px' }}>{stat.value}</div>
            <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.4 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Use cases grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
        {useCases.map(uc => <UseCaseCard key={uc.id} useCase={uc} />)}
      </div>

      {/* Footer note */}
      <div style={{ marginTop: '24px', padding: '14px 18px', background: '#F9FAFB', borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '12px', color: '#6b7280', lineHeight: 1.6 }}
        dangerouslySetInnerHTML={{ __html: footerText }} />
    </div>
  );
}
