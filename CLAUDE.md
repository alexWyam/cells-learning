# cells-learning — CLAUDE.md

## Contexto del desarrollador

Senior Frontend Developer, +10 años de experiencia. Stack principal: Angular, TypeScript, SASS, RxJS.
Aprendizaje activo del stack Open Cells / LitElement / Web Components de BBVA.
Objetivo: incorporarse como desarrollador productivo en un equipo Mobile Cells.

## Propósito del repositorio

Aprendizaje progresivo y estructurado del stack Open Cells (BBVA).
Organizado en bloques, partiendo de los estándares web nativos hasta la arquitectura completa de Cells.
Todo el código es de práctica — no hay entorno de producción.

## Entorno

- **Node**: 22 LTS (`.nvmrc` en la raíz — respetar siempre con `nvm use`)
- **Shell**: ZSH (iTerm2). No usar sintaxis exclusiva de bash en scripts
- **IDE**: VSCode con extensión Claude Code
- **Lenguaje**: JavaScript ES2020+ (ES Modules). Sin TypeScript salvo indicación explícita
- La documentación oficial de Open Cells usa TypeScript — traducir siempre a JS en los ejemplos
- No hay backend real. Los ejercicios son autocontenidos o usan mocks locales

## Stack

| Capa               | Tecnología                                                  |
| ------------------ | ----------------------------------------------------------- |
| Web Components     | Custom Elements · Shadow DOM · HTML Templates · ES Modules  |
| Componentes        | LitElement                                                  |
| Framework          | Open Cells (BBVA) — https://www.opencells.dev               |
| Estado             | Canales pub-sub de Open Cells sobre RxJS (`PageController`) |
| Scaffold           | `npm init @open-cells/app`                                  |
| Build / Dev server | Vite (`npm run dev` / `npm run build`)                      |
| CLI interno BBVA   | `cells-cli` — pendiente de confirmar con el equipo real     |
| Testing            | Vitest                                                      |
| Linting            | ESLint (flat config)                                        |
| Formatter          | Prettier                                                    |

## Estructura del repositorio

```
cells-learning/
├── .nvmrc
├── .editorconfig
├── .eslintrc.js (o eslint.config.js)
├── .prettierrc
├── package.json
├── README.md
├── CLAUDE.md
├── blocks/
│   ├── 01-web-components/
│   │   ├── README.md
│   │   ├── 01-custom-elements/
│   │   ├── 02-shadow-dom/
│   │   ├── 03-templates-slots/
│   │   └── 04-es-modules/
│   ├── 02-litelement/
│   │   ├── README.md
│   │   ├── 01-lifecycle/
│   │   ├── 02-reactive-properties/
│   │   ├── 03-render-templates/
│   │   ├── 04-styles/
│   │   └── 05-events/
│   ├── 03-cells-architecture/
│   │   ├── README.md
│   │   ├── 01-app-scaffold/        ← npm init @open-cells/app
│   │   ├── 02-router/              ← startApp + routes.js
│   │   ├── 03-page-controller/     ← navigate, onPageEnter, onPageLeave
│   │   ├── 04-channels/            ← publish / subscribe / unsubscribe
│   │   └── 05-build/               ← npm run dev / build (Vite)
│   ├── 04-js-without-ts/
│   │   ├── README.md
│   │   ├── 01-jsdoc/
│   │   ├── 02-eslint/
│   │   └── 03-testing/
│   └── 05-mobile-cordova/
│       └── README.md
├── notes/
│   ├── angular-vs-cells.md
│   └── glossary.md
└── sandbox/
```

## Convenciones de código

### JavaScript

- ES Modules nativos (`import` / `export`). Sin `require()`.
- Sin TypeScript salvo indicación explícita del desarrollador.
- JSDoc en APIs públicas de componentes y funciones de utilidad.
- `const` por defecto, `let` solo cuando la variable muta. Nunca `var`.
- Sin `console.log` en código entregado — solo en ejercicios de depuración temporal.

### Web Components y LitElement

- Nombre de tag siempre con guión: `mi-componente`, no `miComponente`.
- Registrar custom elements al final del archivo: `customElements.define('...', ClassName)`.
- Eventos personalizados siempre con `CustomEvent` y `{ bubbles: true, composed: true }` cuando deban cruzar Shadow DOM.
- Propiedades hacia abajo, eventos hacia arriba. Sin comunicación directa entre componentes hermanos.
- En LitElement: propiedades reactivas declaradas en `static properties`. Sin acceso directo al DOM salvo con `this.renderRoot.querySelector`.

### Open Cells

- El punto de entrada de la app es `startApp({ routes, mainNode })` desde `@open-cells/core`.
- Cada ruta mapea un path a un componente página con lazy import.
- Siempre debe existir una ruta raíz `/`.
- La comunicación entre páginas se hace mediante canales: `pageController.publish('ch-nombre', data)` / `pageController.subscribe('ch-nombre', cb)`.
- Suscribirse en `onPageEnter`, desuscribirse en `onPageLeave` — equivalente a `ngOnInit` / `ngOnDestroy`.
- Prefijo `ch-` en los nombres de canal para identificarlos claramente.

### Estilos

- Estilos dentro del componente via `static styles = css\`...\`` en LitElement.
- En Web Components nativos, estilos dentro del Shadow DOM vía `<style>` en el template.
- Sin estilos inline salvo casos justificados.
- Variables CSS (`--mi-variable`) para valores reutilizables.

### Estructura de cada ejercicio

Cada ejercicio vive en su propia carpeta con:

- `index.html` — punto de entrada ejecutable directamente en el navegador o con servidor local mínimo
- `README.md` — enunciado, objetivo y referencia a conceptos de Angular equivalentes si aplica
- Archivos `.js` del ejercicio

### Commits

- Conventional Commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`
- Un commit = un cambio coherente y atómico
- Mensaje en inglés

---

## Testing con Vitest

- Todo componente con lógica tiene tests unitarios.
- Los tests de Web Components nativos y LitElement se ejecutan en entorno DOM (happy-dom o jsdom).
- Nombre de test en forma: `should <acción> when <condición>`.
- Cobertura mínima objetivo: 80% en líneas y ramas.

### Comandos

```bash
npm run test        # Vitest en watch mode
npm run test:ci     # Vitest sin watch + cobertura
```

---

## Calidad de código

### Antes de cualquier commit

```bash
npm run lint        # ESLint
npm run lint:fix    # ESLint con autofix
npm run format      # Prettier
npm run test:ci     # Vitest con cobertura
```

### ESLint

- Flat config (`eslint.config.js`).
- Prohibido: `console.log` en código de producción, `var`, `==` (usar `===`).

### Prettier

- Configuración en `.prettierrc`.
- Se aplica sobre `.js`, `.html`, `.json`, `.md`.

---

## Rol de Claude Code en este repositorio

### Qué puede hacer autónomamente

- Crear y modificar componentes, ejercicios y utilidades.
- Escribir y actualizar tests.
- Refactorizar siguiendo las convenciones de este archivo.
- Ejecutar `lint` y `test:ci` para verificar cambios.
- Añadir notas en `notes/` o `README.md` de cada bloque.

### Qué requiere confirmación explícita

- Cambios en `package.json` (añadir o eliminar dependencias).
- Cambios en configuración de ESLint, Prettier o Vitest.
- Cambios en `.nvmrc`.
- Cualquier cambio que afecte a la estructura de carpetas raíz.

### Flujo de trabajo habitual

1. **Planificar**: Claude Code propone enfoque y estructura antes de escribir código.
2. **Implementar**: Claude Code genera código siguiendo estas convenciones.
3. **Verificar**: Claude Code ejecuta `lint + test:ci` y reporta el resultado.
4. **Revisar**: El desarrollador revisa, ajusta y hace commit.

### Comunicación

- Ante ambigüedad en un requisito, preguntar antes de asumir.
- Si se detecta deuda técnica o mejora posible, anotarla como `// TODO:` con descripción.
- Comparar con Angular cuando el contexto lo haga útil para el aprendizaje.
- La documentación oficial de Open Cells usa TypeScript — traducir siempre a JS salvo indicación explícita.

---

## Comandos de referencia

```bash
# Entorno
nvm use                    # Activar versión de Node del .nvmrc

# Desarrollo (bloques 1-2, sin framework)
npx serve .                # Servidor estático local

# Open Cells (bloque 3 en adelante)
npm init @open-cells/app   # Scaffold de nueva aplicación
npm install                # Instalar dependencias
npm run dev                # Dev server con Vite
npm run build              # Build de producción con Vite

# Calidad
npm run lint               # ESLint
npm run lint:fix           # ESLint con autofix
npm run format             # Prettier
npm run test               # Vitest watch
npm run test:ci            # Vitest + cobertura

# cells-cli (pendiente de confirmar con el equipo real)
# cells new <app>          # Scaffold de aplicación
# cells generate <comp>    # Scaffold de componente
# cells build              # Build de producción
```

---

## Anti-patrones — nunca hacer esto

- `var` en cualquier contexto.
- `require()` — usar siempre ES Modules.
- Manipulación directa del DOM fuera del Shadow DOM del componente.
- Comunicación directa entre componentes hermanos (usar canales pub-sub de Open Cells).
- Estilos globales que afecten al interior de un Shadow DOM.
- Acceder a propiedades internas de otro componente desde fuera.
- Suscribirse a canales sin desuscribirse en `onPageLeave` — provoca memory leaks.
- Tests que solo verifican que algo no rompe sin aserción real.
- Commits con múltiples cambios no relacionados mezclados.
- `console.log` en código que no sea depuración temporal.

---

## Fuentes de referencia

- Documentación oficial Open Cells: https://www.opencells.dev/docs/index.html
- Repositorio GitHub Open Cells: https://github.com/BBVA/open-cells
- LitElement: https://lit.dev
