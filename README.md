# cells-learning

Aprendizaje progresivo del stack **Cells / Open Cells (BBVA)** — de los estándares web nativos a la arquitectura completa de la plataforma.

## Estructura

```
blocks/
├── 01-web-components/     # Custom Elements, Shadow DOM, Templates, ES Modules
├── 02-litelement/         # Ciclo de vida, propiedades reactivas, estilos, eventos
├── 03-cells-architecture/ # Router, pub-sub, estructura de proyecto, cells-cli
├── 04-js-without-ts/      # JSDoc, ESLint, testing con Vitest
└── 05-mobile-cordova/     # Integración con Cordova / entorno mobile
notes/                     # Comparativas Angular vs Cells, glosario
sandbox/                   # Experimentos libres
```

## Inicio rápido

```bash
nvm use          # Activar Node 22 LTS
npm install

# Bloques 1–2: servir estático
npx serve .

# Bloque 3+: entorno Cells
cells serve
```

## Comandos de calidad

```bash
npm run lint       # ESLint
npm run lint:fix   # ESLint con autofix
npm run format     # Prettier
npm run test       # Vitest en watch mode
npm run test:ci    # Vitest + cobertura (umbral 80%)
```

## Stack

| Capa | Tecnología |
|---|---|
| Web Components | Custom Elements · Shadow DOM · HTML Templates · ES Modules |
| Componentes | LitElement |
| Framework | Cells / Open Cells |
| Estado | Pub-sub reactivo con RxJS |
| Testing | Vitest + happy-dom |
| Linting | ESLint flat config |
| Formatter | Prettier |
