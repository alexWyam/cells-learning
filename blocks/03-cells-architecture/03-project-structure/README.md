# 03 — Estructura de proyecto Cells

## Objetivo

Entender la anatomía de una aplicación Cells generada por `cells-cli` y las convenciones de nomenclatura y organización.

## Estructura tipo de un proyecto Cells

```
my-cells-app/
├── app/
│   ├── app.js               ← punto de entrada, configuración del router
│   ├── index.html           ← shell HTML, importa el app
│   └── pages/
│       ├── home/
│       │   ├── home-page.js
│       │   └── home-page.css
│       └── detail/
│           ├── detail-page.js
│           └── detail-page.css
├── components/
│   ├── my-button/
│   │   ├── my-button.js
│   │   └── my-button.test.js
│   └── my-card/
│       ├── my-card.js
│       └── my-card.test.js
├── cells.config.js          ← configuración del servidor y build
├── package.json
└── node_modules/
```

## Convenciones

| Concepto | Convención |
|---|---|
| Nombre de componente | kebab-case con al menos un guión |
| Página | Sufijo `-page` (ej. `home-page`) |
| Bridge component | Sufijo `-bridge` (ej. `user-bridge`) |
| Archivo principal | Mismo nombre que el tag (ej. `my-button.js`) |
| Test | Mismo nombre + `.test.js` |
| Un componente por carpeta | Cada componente en su propia carpeta |

## Paralelo Angular

| Cells | Angular CLI |
|---|---|
| `components/my-button/my-button.js` | `src/app/my-button/my-button.component.ts` |
| `pages/home/home-page.js` | `src/app/home/home.component.ts` (ruta lazy) |
| `cells.config.js` | `angular.json` |
| `app/app.js` | `src/app/app.module.ts` + `app-routing.module.ts` |

## Ejercicio

Crear manualmente (sin CLI) la estructura mínima de una app Cells con:
- Una página principal y una de detalle
- Un componente de cabecera reutilizable
- Un archivo de configuración de rutas

Documentar en un README qué hace cada archivo.
