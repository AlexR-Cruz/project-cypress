# 🧪 Cypress E2E, API & Database Automation Suite

![Cypress Tests](https://github.com/AlexR-Cruz/project-cypress/actions/workflows/cypress-ci.yml/badge.svg)
![Cypress Version](https://img.shields.io/badge/cypress-13.x-brightgreen)
![Node Version](https://img.shields.io/badge/node-%3E%3D20.x-blue)
![Database](https://img.shields.io/badge/database-PostgreSQL-blue)

Projeto completo de automação de testes cobrindo testes de ponta a ponta (E2E), integração com APIs REST e validação direta em Banco de Dados (PostgreSQL). O projeto conta com execução automatizada numa pipeline de CI/CD via GitHub Actions utilizando contêineres Docker.

---

## 🚀 Funcionalidades & Arquitetura

- **Interface (E2E):** Testes de fluxos visuais utilizando o padrão **Page Object Model (POM)** para máxima reutilização e manutenção de código.
- **Testes de API (`cy.request`):** Validação de endpoints REST e estratégia de *bypassing* de autenticação via API para ganho de performance na execução.
- **Validação de Banco de Dados:** Execução de tarefas de query SQL (`cy.task`) diretamente num banco **PostgreSQL** para validação da integridade dos dados e tarefas de Setup/Teardown.
- **Integração Contínua (CI/CD):** Pipeline configurada no **GitHub Actions** que sobe um contêiner Docker oficial do PostgreSQL a cada *push* ou *pull request*, garantindo a execução isolada dos testes na nuvem.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes
- [JavaScript / Node.js](https://nodejs.org/) - Linguagem de programação e ambiente de execução
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gestão de banco de dados relacional
- [GitHub Actions](https://github.com/features/actions) - Automação de pipelines de CI/CD
- [Docker](https://www.docker.com/) - Gerenciamento de serviços e contêineres em CI

---

## 📂 Estrutura do Projeto

```text
├── .github/
│   └── workflows/
│       └── cypress-ci.yml        # Pipeline de CI/CD no GitHub Actions
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js           # Testes E2E de Autenticação
│   │   ├── api_validation.cy.js  # Testes de integração de API
│   │   └── database.cy.js      # Testes e validações no PostgreSQL
│   ├── support/
│   │   ├── commands.js           # Custom Commands (ex: login via API)
│   │   └── pages/                # Mapeamento de telas (Page Object Model)
│   └── fixtures/                 # Massas de dados em formato JSON
├── cypress.config.js             # Configuração do Cypress e Tasks Node
├── package.json                  # Dependências e scripts do projeto
└── README.md