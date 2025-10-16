---
title: CI/CD Quality Gates
---

**Descrição**  
Nenhum PR é mergeado sem build + testes passarem.  
- Análise estática (linters/Sonar) e cobertura de testes com meta mínima (ex.: 70–80%).  
- Checagem de vulnerabilidades e secrets expostos.

**Artefatos Relacionados**  
Relatório de Build/CI, PR

**Papéis Envolvidos**  
- [Developer (Principal)](/docs/roles/developer-primeiro-autor.md)
- [Developer (Integrador)](/docs/roles/developer-segundo-autor.md)


**Ferramentas**  
- [Azure DevOps ](/docs/tools/ci-cd/azure-devops.md)
- [GitLab](/docs/tools/controle-versao/gitlab.md)
- [SonarQube](/docs/tools/qualidade-seguranca/sonarqube.md)
