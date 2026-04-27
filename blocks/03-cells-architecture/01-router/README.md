# 01 — Cells Router

## Objetivo

Configurar el router de Cells, definir páginas como componentes LitElement y navegar entre ellas con parámetros de ruta.

## Conceptos

### Anatomía de una ruta en Cells

```js
import { router } from '@cells/cells-router';

router.addRoutes([
  { path: '/',           page: 'home-page' },
  { path: '/detail/:id', page: 'detail-page' },
  { path: '*',           page: 'not-found-page' },
]);
```

### Componente de página

Un componente de página es un LitElement normal con el sufijo `-page`. El router lo instancia y lo monta en el `<cells-template>`.

### Acceso a parámetros

```js
// El router inyecta los parámetros como propiedades del componente
static properties = {
  params: { type: Object },  // { id: '42' }
};
```

### Navegación imperativa

```js
import { router } from '@cells/cells-router';
router.navigate('/detail/42');
```

## Paralelo Angular

| Cells Router | Angular Router |
|---|---|
| `router.addRoutes([{ path, page }])` | `RouterModule.forRoot(routes)` |
| `page: 'my-page'` | `component: MyComponent` |
| `params.id` | `ActivatedRoute.snapshot.params['id']` |
| `router.navigate('/path')` | `Router.navigate(['/path'])` |
| `<cells-template>` | `<router-outlet>` |

## Requisitos

Este ejercicio requiere un proyecto Cells creado con `cells-cli`:

```bash
cells new router-demo
cd router-demo
cells serve
```

## Ejercicio

Dentro de un proyecto Cells:
1. Definir tres rutas: `/`, `/list`, `/detail/:id`
2. Crear el componente de página para cada ruta
3. Añadir navegación entre páginas
4. Leer `params.id` en la página de detalle y mostrar un mock de datos

## Estado

> Pendiente de tener `cells-cli` instalado. Ver bloque `04-cells-cli` primero.
