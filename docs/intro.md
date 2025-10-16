---
id: introduction
title: Introduction to MergeTrace
sidebar_position: 6
slug: /welcome/introduction
description: Visão geral do MergeTrace: guideline baseado em entrevistas com especialistas, com papéis, artefatos e atividades para integração previsível e rastreável.
---

import {
  ExpandableProvider,
  ExpandableSection,
  ExpandAllControls
} from '@site/src/components/Intro';
import CardGrid from '@site/src/components/IntroModern/CardGrid';
import RelationshipList from '@site/src/components/IntroModern/RelationshipList';

# Introduction to MergeTrace

O **MergeTrace** é um **guia prático** para integração de software, criado a partir de **entrevistas com especialistas** (engenharia, developers e liderança técnica).  
O material consolida **papéis**, **artefatos** e **atividades** do processo de merge para reduzir risco, padronizar decisões e **tornar a rastreabilidade explícita**.

<ExpandableProvider>
  <div style={{display:'flex',justifyContent:'flex-end',marginBottom:'.5rem'}}>
    <ExpandAllControls />
  </div>

  <ExpandableSection title="Relationships" defaultOpen>
    <RelationshipList
      items={[
        {label: 'Core Principles', to: '/docs/welcome/core-principles'},
        {label: 'Iteration Lifecycle', to: '/docs/welcome/iteration-lifecycle'},
        {label: 'Micro-Increments', to: '/docs/welcome/micro-increments'},
        {label: 'Project Lifecycle', to: '/docs/welcome/project-lifecycle'},
        {label: 'Roles', to: '/docs/welcome/roles'},
        {label: 'Work Products', to: '/docs/welcome/work-products'},
        {label: 'Disciplines', to: '/docs/welcome/disciplines'},
        {label: 'Lifecycle', to: '/docs/welcome/lifecycle'},
      ]}
    />
  </ExpandableSection>

  <ExpandableSection title="Main Description" defaultOpen>
    <p>
      O MergeTrace é <strong>agnóstico de ferramentas</strong> (GitHub/GitLab/Azure DevOps, CI/CD) e
      <strong> extensível</strong> a diferentes estratégias (trunk, GitFlow, monorepo). Ele foi concebido
       de evidências coletadas em
      entrevistas e foi desenhado para:
    </p>

    <ul>
      <li><strong>Padronizar decisões</strong> de merge com critérios objetivos e checklists.</li>
      <li><strong>Explicitar rastreabilidade</strong> entre issues ⇄ PRs ⇄ builds ⇄ testes ⇄ release.</li>
      <li><strong>Reduzir conflitos</strong> por meio de papéis claros (Developer A/B, Mediador) e handoffs visíveis.</li>
      <li><strong>Medir e melhorar continuamente</strong> com métricas e rituais leves.</li>
    </ul>

    <CardGrid
      cards={[
        {
          title: 'Getting Started',
          description: 'Configure papéis, artefatos e templates mínimos para iniciar (baseado nas entrevistas).',
          to: '/docs/welcome/getting-started',
          emoji: '🚀'
        },
        {
          title: 'Core Principles',
          description: 'Princípios derivados das evidências que orientam decisões e qualidade.',
          to: '/docs/welcome/core-principles',
          emoji: '🔑'
        },
        {
          title: 'Roles',
          description: 'Developer (A/B) e Mediador com responsabilidades e handoffs rastreáveis.',
          to: '/docs/welcome/roles',
          emoji: '👥'
        },
        {
          title: 'Work Products',
          description: 'PR, Build, TestResult, MergeLog e outros artefatos como fonte de verdade.',
          to: '/docs/welcome/work-products',
          emoji: '📦'
        },
        {
          title: 'Disciplines',
          description: 'Coding, Code Review, QA, CI/CD e Governança & Traceability.',
          to: '/docs/welcome/disciplines',
          emoji: '📋'
        },
        {
          title: 'Lifecycle',
          description: 'Fluxo ponta a ponta com gates, critérios e feedback contínuo.',
          to: '/docs/welcome/lifecycle',
          emoji: '🔄'
        },
      ]}
    />
  </ExpandableSection>

  <ExpandableSection title="Key Considerations">
    <ul>
      <li><strong>Baseado em especialistas:</strong> este guideline compila práticas observadas em equipes reais.</li>
      <li><strong>Comece pequeno:</strong> aplique em um repositório/squad, colete métricas e expanda.</li>
      <li><strong>Automatize os gates:</strong> checks de CI, cobertura e políticas de PR reduzem variação humana.</li>
      <li><strong>Registre decisões:</strong> use ADR/Decision Log para dar contexto técnico aos merges.</li>
      <li><em>Tool-agnostic:</em> adapte os artefatos às suas ferramentas; não reescreva o processo sem necessidade.</li>
    </ul>
  </ExpandableSection>
</ExpandableProvider>
