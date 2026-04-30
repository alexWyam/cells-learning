# 01 — Ciclo de vida de LitElement

## Objetivo

Entender cuándo y por qué se ejecuta cada hook del ciclo de vida de LitElement, y cómo difieren de los callbacks nativos de Web Components.

## Ciclo de vida completo

```
constructor()
  └─ connectedCallback()          ← elemento insertado en el DOM
       └─ [primer render]
            └─ firstUpdated()     ← una sola vez tras el primer render
  └─ update() → render()          ← cada vez que cambia una prop reactiva
       └─ updated(changedProps)   ← tras cada render (incluyendo el primero)
disconnectedCallback()            ← elemento eliminado del DOM
```

## Hooks clave

| Hook | Cuándo | Uso típico |
|---|---|---|
| `constructor()` | Al instanciar el elemento | Inicializar estado privado (sin acceso al DOM) |
| `connectedCallback()` | Al insertarse en el DOM | Suscripciones, fetch inicial |
| `disconnectedCallback()` | Al eliminarse del DOM | Cancelar suscripciones, limpiar timers |
| `firstUpdated(changedProps)` | Tras el primer render | Acceder al DOM, inicializar librerías |
| `updated(changedProps)` | Tras cada render | Reaccionar a cambios de propiedades |
| `updateComplete` | Promesa | Esperar a que termine el render (imprescindible en tests) |

## Paralelo Angular

| LitElement | Angular (clásico) | Angular v17+ |
|---|---|---|
| `constructor` | `constructor` | Sin cambios |
| `connectedCallback` | `ngOnInit` | Sin cambios; también `inject(DestroyRef)` para setup/teardown |
| `disconnectedCallback` | `ngOnDestroy` | `DestroyRef.onDestroy(fn)` — registra cleanup sin implementar la interfaz |
| `firstUpdated` | `ngAfterViewInit` | `afterNextRender(() => { ... })` — equivalente funcional, sin ciclo de vida de clase |
| `updated` | `ngAfterViewChecked` | `effect(() => { ... })` cuando el cambio reacciona a signals |
| `await el.updateComplete` | `fixture.detectChanges()` | Sin cambios en tests |

## Ejercicio

Crear `<lifecycle-demo>` que:
1. Muestre un log visual en pantalla (no `console.log`) de cada hook ejecutado
2. Incluya un botón para cambiar una propiedad reactiva y ver cómo dispara `updated`
3. Incluya un botón para eliminar y reinsertar el elemento del DOM

## Archivo de trabajo

`lifecycle-demo.js`
