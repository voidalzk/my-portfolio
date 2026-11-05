# Portfólio — Gabriel Voidaleski

Portfólio profissional de Gabriel Voidaleski, Desenvolvedor Full Stack. Projetos vêm antes da experiência: Jungle Wagering Processor (backend), Appunture (mobile), FlyHigh (microsserviços) e MaintenanceApp (web). O layout minimalista mantém idioma PT/EN, tema claro/escuro e navegação por teclado.

## Stack

- Angular 19 com componentes standalone
- TypeScript
- CSS responsivo sem framework visual
- Renderização no servidor e prerenderização via Angular SSR

## Desenvolvimento local

```bash
npm ci
npm start
```

O servidor de desenvolvimento fica disponível em `http://localhost:4200`.

## Validação

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

## Conteúdo

O conteúdo em português e inglês é baseado nos currículos atualizados de Gabriel. O seletor de idioma no cabeçalho alterna o conteúdo, os metadados e o PDF para download. Os arquivos estão em `src/assets/curriculum-gabriel-voidaleski-pt.pdf` e `src/assets/curriculum-gabriel-voidaleski-en.pdf`.

A experiência atual na TRC Taborda inclui Vue.js, Go, manutenção em C#/.NET, Python e PHP, automação, dados e integrações. Banco do Brasil, freelance e MPPR estão resumidos em entregas concretas. Projetos em equipe são identificados como tais.

O Jungle inclui três diagramas SVG e documentação Markdown/Mermaid em `src/assets/projects/jungle/architecture-diagrams.md`: arquitetura, transação/idempotência e recuperação de falhas. Os diagramas diferenciam inbox/outbox de sagas e deixam explícitos os limites do teste técnico (at-least-once, sem autenticação ativa ou benchmark). Não há dependência de um renderizador Mermaid no cliente.

Galerias usam botões nomeados; detalhes adicionais usam `<details>` nativo. O menu móvel é retirado da navegação por teclado quando fechado. Nenhuma informação corporativa confidencial ou métrica de desempenho foi adicionada.
