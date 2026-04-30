# 04 — cells-cli

## Objetivo

Dominar los comandos principales de `cells-cli` para crear, desarrollar y construir aplicaciones Cells.

## Instalación

```bash
npm install -g @cells/cells-cli
cells --version
```

## Comandos principales

### Crear una aplicación

```bash
cells new my-app
cd my-app
npm install
cells serve
```

### Generar un componente

```bash
cells generate my-component
# Crea: components/my-component/my-component.js (y archivos asociados)
```

### Servidor de desarrollo

```bash
cells serve
# Equivalente a: ng serve
# Abre en http://localhost:8080 por defecto
```

### Build de producción

```bash
cells build
# Genera dist/ con los assets optimizados
```

## Paralelo Angular CLI

| cells-cli | Angular CLI (clásico) | Angular CLI v17+ |
|---|---|---|
| `cells new my-app` | `ng new my-app` (genera `NgModule`) | `ng new my-app` genera standalone por defecto (sin `NgModule`) |
| `cells generate my-comp` | `ng generate component my-comp` | `ng g c my-comp` genera standalone component por defecto |
| `cells serve` | `ng serve` | Sin cambios; usa esbuild por defecto (`--builder @angular-devkit/build-angular:browser-esbuild`) |
| `cells build` | `ng build` | Sin cambios; esbuild produce bundles más pequeños y rápidos |

## Ejercicio

1. Instalar `cells-cli` globalmente
2. Crear una app de prueba: `cells new learning-app`
3. Explorar la estructura generada y compararla con `03-project-structure`
4. Generar dos componentes con `cells generate`
5. Ejecutar `cells serve` y verificar que la app corre

## Troubleshooting

Si `cells serve` falla por versión de Node, verificar con `nvm use` que se está usando Node 22 LTS.
