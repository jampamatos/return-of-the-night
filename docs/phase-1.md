# Milestone: `Phase 1 — Repository foundation`

## 1) `P1-01 [S] ADR: decide bootstrap strategy for Phase 1`

**Objetivo:** registrar oficialmente se o bootstrap vai ser **plain Astro** ou **Astro + Starlight**, e o que fica explicitamente adiado.
**Depende de:** nada.
**Done when:** existe um `docs/adr/0001-bootstrap-strategy.md` com a decisão, rationale, trade-offs e non-goals da Phase 1.

## 2) `P1-02 [S] Scaffold the Astro application`

**Objetivo:** inicializar a aplicação base com Astro e garantir que ela sobe localmente.
**Depende de:** P1-01.
**Done when:** o projeto está criado, instalado, versionado e `dev`/`build` funcionam.

## 3) `P1-03 [XS] Remove starter demo content and keep a clean placeholder shell`

**Objetivo:** limpar tudo que vier de demo/starter para deixar o repositório com cara de produto próprio desde o início.
**Depende de:** P1-02.
**Done when:** não existem exemplos genéricos sobrando; há uma página placeholder mínima e neutra.

## 4) `P1-04 [XS] Enable strict TypeScript and project type checks`

**Objetivo:** ligar o TypeScript de forma séria desde o começo.
**Depende de:** P1-02.
**Done when:** config ajustada, checagem de tipos funcionando e script de `typecheck` definido.

## 5) `P1-05 [XS] Add Prettier and format rules`

**Objetivo:** padronizar formatação antes do projeto crescer.
**Depende de:** P1-02.
**Done when:** config do Prettier existe, ignores existem e o comando de format/check roda.

## 6) `P1-06 [XS] Add ESLint for Astro and TypeScript`

**Objetivo:** garantir lint básico de código e markup desde já.
**Depende de:** P1-02, P1-04.
**Done when:** lint roda limpo no estado atual do repo.

## 7) `P1-07 [XS] Standardize package scripts for local development and quality`

**Objetivo:** deixar os comandos do projeto previsíveis para qualquer contribuidor.
**Depende de:** P1-04, P1-05, P1-06.
**Done when:** `dev`, `build`, `preview`, `typecheck`, `lint`, `format`, `format:check` e um script agregador de checks estão definidos e documentados.

## 8) `P1-08 [S] Create the initial repository folder scaffold`

**Objetivo:** montar a estrutura-base do repo conforme o blueprint, sem ainda implementar Phase 2+.
**Depende de:** P1-02.
**Done when:** existem os diretórios-base de `.github`, `public`, `src`, `docs`, `src/content/...`, `src/components/...`, `src/lib/...`, com placeholders mínimos quando necessário.

## 9) `P1-09 [XS] Add asset provenance baseline`

**Objetivo:** impedir que imagem/ícone/asset entre no projeto sem origem e licença claras.
**Depende de:** P1-08.
**Done when:** existe uma política simples de assets documentada e um lugar definido para registrar proveniência/licença.

## 10) `P1-10 [S] Write the initial README`

**Objetivo:** criar um README já útil para onboarding.
**Depende de:** P1-02, P1-07, P1-08.
**Done when:** o README explica o projeto, o estado atual, como rodar, principais comandos e o escopo da Phase 1.

## 11) `P1-11 [S] Decide and add the initial licensing model`

**Objetivo:** fechar a base de licenciamento do repositório.
**Depende de:** P1-01.
**Done when:** existe `LICENSE` no repo e a abordagem para código/conteúdo/assets fica explícita no README ou em doc de apoio.

## 12) `P1-12 [S] Add community baseline docs`

**Objetivo:** criar o núcleo de documentação comunitária.
**Escopo:** `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`.
**Depende de:** P1-10, P1-11.
**Done when:** os três arquivos existem, estão coerentes entre si e são linkados pelo README.  

## 13) `P1-13 [S] Write CONTRIBUTING.md`

**Objetivo:** documentar como contribuir sem depender de conversa privada.
**Depende de:** P1-07, P1-10.
**Done when:** `CONTRIBUTING.md` cobre setup local, fluxo básico de branch/PR, expectativa de testes/checks e **Conventional Commits**.

## 14) `P1-14 [XS] Add ROADMAP.md and CHANGELOG.md stubs`

**Objetivo:** deixar o projeto pronto para crescimento rastreável.
**Depende de:** P1-10.
**Done when:** `ROADMAP.md` existe e reflete as fases aprovadas; `CHANGELOG.md` começa com estrutura inicial.

## 15) `P1-15 [S] Add architecture and writing guide stubs`

**Objetivo:** criar a base documental que explica o sistema e o fluxo de escrita.
**Escopo:** `docs/architecture.md`, `docs/writing-guide.md`.
**Depende de:** P1-01, P1-08, P1-10.
**Done when:** a arquitetura atual e os limites da Phase 1 estão escritos; o writing guide já estabelece padrões mínimos e idioma dos artefatos.

## 16) `P1-16 [XS] Add GitHub issue templates`

**Objetivo:** padronizar entrada de trabalho e feedback.
**Escopo:** bug report, feature request, documentation issue, translation issue.
**Depende de:** P1-12, P1-13.
**Done when:** os templates existem em `.github/ISSUE_TEMPLATE/` e cobrem o fluxo mínimo.

## 17) `P1-17 [XS] Add pull request template`

**Objetivo:** padronizar o que cada PR precisa explicar.
**Depende de:** P1-13.
**Done when:** existe `pull_request_template.md` com checklist útil e curto.

## 18) `P1-18 [S] Add the minimum CI workflow`

**Objetivo:** automatizar o padrão mínimo de qualidade da Phase 1.
**Depende de:** P1-05, P1-06, P1-07.
**Done when:** há workflow rodando instalação, lint, format check, typecheck e build em push/PR.

## 19) `P1-19 [XS] Run a fresh-clone verification pass and close Phase 1`

**Objetivo:** validar que a fase realmente ficou pronta, e não só “quase”.
**Depende de:** P1-10 até P1-18.
**Done when:** o repo é clonado limpo, setup funciona, todos os checks passam, e a checklist de saída da Phase 1 está fechada.

## Ordem recomendada de execução

Eu seguiria exatamente nesta ordem:

`01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19`

## Labels sugeridas

Para não virar caos depois, eu já criaria estas labels no GitHub:

* `phase:1`
* `type:chore`
* `type:docs`
* `type:ci`
* `type:decision`
* `priority:p0`
* `size:xs`
* `size:s`

## Critério de fechamento da Phase 1

A fase só fecha quando estas três coisas forem verdadeiras ao mesmo tempo:

1. o projeto roda localmente
2. `lint`, `typecheck` e `build` passam
3. o repositório já aparenta ser um projeto open-source sério, com docs, templates e base de governança mínima.
