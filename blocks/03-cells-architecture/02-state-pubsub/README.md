# 02 — Estado y Pub-Sub

## Objetivo

Implementar comunicación desacoplada entre componentes usando el sistema de canales (pub-sub) de Cells, basado en RxJS.

## Conceptos

### Canal

Un canal es un `BehaviorSubject` de RxJS gestionado por Cells. Los componentes se suscriben para recibir datos y publican para emitir cambios.

```js
import { CellsChannels } from '@cells/cells-bridge';

// Publicar en un canal:
CellsChannels.publish('user-data', { name: 'Ada', role: 'Engineer' });

// Suscribirse a un canal (en connectedCallback):
this._sub = CellsChannels.subscribe('user-data', (data) => {
  this.userData = data;
});

// Cancelar suscripción (en disconnectedCallback):
this._sub.unsubscribe();
```

### Bridge Component

Componente intermediario que:
1. Se suscribe a uno o varios canales
2. Pasa los datos hacia abajo como propiedades a componentes UI
3. Escucha eventos de los componentes UI y publica en canales

```
Canal 'user-data'
    ↓
<user-bridge>          ← bridge component
    ↓ (propiedad)
<user-card>            ← UI puro, sin conocimiento de canales
    ↓ (CustomEvent)
<user-bridge>          ← escucha el evento
    ↓
Canal 'user-update'    ← publica el cambio
```

## Paralelo Angular

| Cells Pub-Sub | Angular |
|---|---|
| Canal + `publish` | `BehaviorSubject` + `next()` en un servicio |
| `subscribe` en componente | `ngOnInit` con `.subscribe()` |
| `unsubscribe` en `disconnectedCallback` | `ngOnDestroy` + `takeUntilDestroyed()` |
| Bridge component | Componente contenedor ("smart component") |

## Ejercicio

1. Crear un canal `cart` que almacene un array de productos
2. `<add-to-cart-button>` — publica en el canal al hacer click
3. `<cart-counter>` — se suscribe al canal y muestra el número de items
4. `<cart-summary>` — se suscribe al canal y lista los productos

Los tres componentes no se conocen entre sí — solo el canal.

## Estado

> Pendiente de tener cells-cli y el entorno Cells configurado.
