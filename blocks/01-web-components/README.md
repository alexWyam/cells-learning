# Bloque 01 — Web Components nativos

## Objetivo

Dominar los cuatro estándares del navegador que forman la base de todo el stack Cells: Custom Elements, Shadow DOM, HTML Templates y ES Modules.

## Por qué importa en Cells

LitElement compila directamente sobre estos estándares. Entenderlos elimina la caja negra y permite depurar con conocimiento real de lo que ocurre bajo el capó.

## Ejercicios

| Carpeta | Concepto clave | Paralelo Angular (clásico) | Angular v17+ |
|---|---|---|---|
| `01-custom-elements/` | Ciclo de vida del elemento, atributos observados | `@Component`, `ngOnInit`, `ngOnChanges` | Standalone components; `input()` signal; `DestroyRef` |
| `02-shadow-dom/` | Encapsulación de estilos y árbol DOM | `ViewEncapsulation.ShadowDom` | Sin cambios — la API es la misma |
| `03-templates-slots/` | `<template>`, `<slot>` y proyección de contenido | `ng-content`, `ng-template` | `@defer` para bloques cargados lazy |
| `04-es-modules/` | `import`/`export` nativos del navegador | Módulos Angular (`NgModule`) | Standalone + `@defer` eliminan la necesidad de `NgModule` |

## Cómo ejecutar

```bash
# Desde la raíz del repositorio:
npx serve .
# Abrir el index.html de cada ejercicio en el navegador
```

## Referencia

- [MDN — Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN — Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [MDN — HTML Templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [MDN — ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
