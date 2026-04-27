# 03 — Templates y Slots

## Objetivo

Usar `<template>` para definir markup reutilizable sin renderizado inmediato y `<slot>` para proyectar contenido externo dentro del Shadow DOM.

## Conceptos

- `<template id="my-tpl">` — markup inerte, no renderizado, clonado eficientemente
- `template.content.cloneNode(true)` — instanciar el template
- `<slot>` — proyecta el Light DOM (contenido entre las etiquetas del elemento)
- `<slot name="header">` — slot nombrado, equivale a `ng-content select=`
- `slotchange` — evento que se dispara cuando el contenido de un slot cambia
- `::slotted(selector)` — selector CSS para estilizar contenido proyectado

## Paralelo Angular

| Web Components | Angular |
|---|---|
| `<template>` | `<ng-template>` |
| `template.content.cloneNode(true)` | `ViewContainerRef.createEmbeddedView(templateRef)` |
| `<slot>` | `<ng-content>` |
| `<slot name="header">` | `<ng-content select="[header]">` |
| `::slotted(p)` | No existe equivalente directo |

## Ejercicio

Crear `<card-layout>` con:
1. Template HTML definido con `<template>` en el propio `.js` o en el `index.html`
2. Tres slots nombrados: `slot="header"`, `slot="body"`, `slot="footer"`
3. Un slot por defecto para contenido sin asignar
4. Estilos con `::slotted(*)` para dar formato al contenido proyectado

## Archivo de trabajo

`card-layout.js`

## Verificar

```bash
npx serve .
# Abrir: http://localhost:3000/blocks/01-web-components/03-templates-slots/
```
