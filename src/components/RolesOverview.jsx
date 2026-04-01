import React from 'react';
import Link from '@docusaurus/Link';

const roles = [
  {
    id: 'developer-a',
    name: 'Developer A',
    openup: 'Implementer',
    color: '#378ADD',
    initials: 'DA',
    summary: 'Responsável pelo incremento principal de código, conduz o desenvolvimento e inicia o fluxo de integração.',
    href: '/guideline-merge/docs/roles/developer-principal',
  },
  {
    id: 'developer-b',
    name: 'Developer B',
    openup: 'Reviewer',
    color: '#639922',
    initials: 'DB',
    summary: 'Desenvolvedor colaborador que atua como segundo par, apoiando revisões, testes locais e resolução de conflitos.',
    href: '/guideline-merge/docs/roles/developer-integrador',
  },
  {
    id: 'mediador',
    name: 'Mediador',
    openup: 'Integrator',
    color: '#533AB7',
    initials: 'ME',
    summary: 'Papel neutro responsável por supervisionar o fluxo de merge, facilitar resoluções e garantir os Quality Gates.',
    href: '/guideline-merge/docs/roles/mediador',
  },
];

export default function RolesOverview() {
  return (
    <div style={{ padding: '0 0 2rem' }}>
      <p style={{
        fontSize: '14px', color: '#6b7280', lineHeight: 1.6,
        borderLeft: '3px solid #e5e7eb', paddingLeft: '12px', marginBottom: '24px',
      }}>
        O merge funciona como um processo de <strong>dupla autoria (A+B)</strong> com suporte de um terceiro agente especializado em tomada de decisão técnica e coordenação — o <strong>Mediador</strong>. Essa estrutura foi definida com base nos papéis do OpenUP e nas evidências empíricas das entrevistas com especialistas.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {roles.map(role => (
          <Link
            key={role.id}
            to={role.href}
            style={{
              flex: '1 1 240px',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div style={{
              border: `1.5px solid ${role.color}22`,
              borderTop: `3px solid ${role.color}`,
              borderRadius: '12px',
              background: '#fff',
              padding: '20px',
              height: '100%',
              transition: 'box-shadow 0.2s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 4px 16px ${role.color}22`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `${role.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 700, color: role.color, flexShrink: 0,
                }}>
                  {role.initials}
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#111', lineHeight: 1.2 }}>{role.name}</div>
                  <div style={{
                    fontSize: '11px', color: role.color,
                    background: `${role.color}12`,
                    padding: '2px 8px', borderRadius: '99px',
                    display: 'inline-block', marginTop: '3px', fontWeight: 500,
                  }}>
                    OpenUP: {role.openup}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, margin: '0 0 16px' }}>
                {role.summary}
              </p>

              <div style={{
                fontSize: '12px', color: role.color, fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                Ver detalhes →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
