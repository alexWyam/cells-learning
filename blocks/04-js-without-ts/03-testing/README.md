# 03 — Testing con Vitest

## Objetivo

Escribir tests unitarios para Web Components y funciones puras usando Vitest con entorno happy-dom.

## Configuración

El proyecto ya tiene Vitest configurado en `vitest.config.js` con `environment: 'happy-dom'`, que proporciona un DOM completo en Node.js para testear Custom Elements y LitElement.

```bash
npm run test       # watch mode
npm run test:ci    # una pasada + cobertura (umbral 80%)
```

## Patrones de test para funciones puras

```js
import { describe, it, expect } from 'vitest';
import { formatName } from '../01-jsdoc/utils.js';

describe('formatName', () => {
  it('should capitalize each word when given lowercase input', () => {
    expect(formatName('ada lovelace')).toBe('Ada Lovelace');
  });

  it('should return empty string when given empty string', () => {
    expect(formatName('')).toBe('');
  });
});
```

## Patrones de test para Custom Elements

```js
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './my-component.js'; // registra el custom element

describe('my-component', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('my-component');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('should render name when name attribute is set', () => {
    el.setAttribute('name', 'Ada');
    expect(el.shadowRoot.textContent).toContain('Ada');
  });
});
```

## Patrones de test para LitElement

```js
import { describe, it, expect } from 'vitest';
import './my-lit-component.js';

describe('my-lit-component', () => {
  it('should update DOM when property changes', async () => {
    const el = document.createElement('my-lit-component');
    document.body.appendChild(el);

    el.name = 'Ada';
    await el.updateComplete; // esperar el ciclo de render de Lit

    expect(el.shadowRoot.textContent).toContain('Ada');
    document.body.removeChild(el);
  });
});
```

## Paralelo Angular Testing

| Vitest + happy-dom | Angular TestBed |
|---|---|
| `document.createElement('my-comp')` | `TestBed.createComponent(MyComp)` |
| `el.property = value` | `fixture.componentInstance.property = value` |
| `await el.updateComplete` | `fixture.detectChanges()` |
| `el.shadowRoot.querySelector(...)` | `fixture.debugElement.query(By.css(...))` |
| `vi.fn()` | `jasmine.createSpy()` |
| `vi.spyOn(obj, 'method')` | `spyOn(obj, 'method')` |

## Ejercicio

Escribir tests para:
1. `utils.js` del ejercicio 01-jsdoc — cobertura completa de `formatName`, `getInitials`, `groupBy`
2. El componente `user-card.js` del bloque 01 — tests de renderizado y eventos
3. El componente `product-card.js` del bloque 02 — tests de propiedades reactivas

## Archivos de trabajo

`utils.test.js`, `user-card.test.js`, `product-card.test.js`
