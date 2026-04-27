# Angular vs Cells — Tabla comparativa

Referencia rápida para mapear conceptos de Angular al stack Cells/LitElement.

## Definición de componente

| Angular | Cells / LitElement |
|---|---|
| `@Component({ selector, template, styles })` | `class extends LitElement` + `customElements.define('tag', Class)` |
| Compilador Angular transforma el template | El navegador ejecuta el JS nativo sin compilación |
| `selector: 'app-foo'` | Primer argumento de `customElements.define('app-foo', ...)` |

## Ciclo de vida

| Angular | LitElement / Web Components |
|---|---|
| `ngOnInit` | `connectedCallback` (WC nativo) / `firstUpdated` (Lit) |
| `ngOnDestroy` | `disconnectedCallback` |
| `ngOnChanges(changes)` | `attributeChangedCallback` (WC) / `updated(changedProps)` (Lit) |
| `ngAfterViewInit` | `firstUpdated` |
| `ngAfterViewChecked` | `updated` (se ejecuta tras cada render) |

## Binding y comunicación

| Angular | Cells / LitElement |
|---|---|
| `[property]="value"` (input binding) | Asignación de propiedad JS: `el.property = value` |
| `(event)="handler($event)"` | `@event="${this.handler}"` en template Lit |
| `[(ngModel)]` (two-way) | Propiedad + evento (patrón manual) |
| `@Input()` | Propiedad declarada en `static properties` |
| `@Output() foo = new EventEmitter()` | `this.dispatchEvent(new CustomEvent('foo', { bubbles: true, composed: true }))` |

## Templates

| Angular | LitElement |
|---|---|
| `*ngFor="let item of items"` | `${items.map(item => html\`...\`)}` o directiva `repeat` |
| `*ngIf="condition"` | `${condition ? html\`...\` : nothing}` o directiva `when` |
| `[class.active]="isActive"` | `classMap({ active: this.isActive })` |
| `[style.color]="color"` | `styleMap({ color: this.color })` |
| `{{ expression }}` | `${expression}` dentro de `html\`...\`` |
| `<ng-content>` | `<slot>` (Web Components nativo) |
| `<ng-content select=".header">` | `<slot name="header">` |

## Estilos

| Angular | LitElement |
|---|---|
| `styleUrls: ['./foo.component.scss']` | `static styles = css\`...\`` |
| `ViewEncapsulation.Emulated` (default) | No disponible — Lit usa Shadow DOM real |
| `ViewEncapsulation.ShadowDom` | Comportamiento por defecto de LitElement |
| `ViewEncapsulation.None` | Evitar en Cells (rompe encapsulación) |
| Variables SCSS `$color: red` | Variables CSS `--my-color: red` (atraviesan Shadow DOM) |
| `:host` en SCSS | `:host` en `css\`...\`` (mismo concepto) |

## Estado y servicios

| Angular | Cells |
|---|---|
| `@Injectable()` + `providedIn: 'root'` | No hay DI — usar pub-sub o módulo JS singleton |
| `BehaviorSubject` en un servicio | Canal pub-sub de Cells (RxJS bajo el capó) |
| `@ngrx/store` | Sistema de canales de Cells |
| `HttpClient` | `fetch` nativo |

## Router

| Angular | Cells Router |
|---|---|
| `RouterModule.forRoot(routes)` | Configuración de rutas en `app.js` |
| `{ path: 'detail/:id', component: DetailComponent }` | `{ path: 'detail/:id', page: 'my-detail-page' }` |
| `Router.navigate(['/path'])` | Evento de navegación del router Cells |
| `ActivatedRoute` | Parámetros accesibles en el componente de página |
| `<router-outlet>` | `<cells-template>` (component host en la página) |

## Módulos y organización

| Angular | Cells |
|---|---|
| `NgModule` con `declarations`, `imports` | Sin módulos — ES Modules nativos |
| `forRoot()` / `forChild()` | No aplica |
| Lazy loading de módulos | Lazy loading de páginas (import dinámico) |

## Testing

| Angular | Cells / Vitest |
|---|---|
| `TestBed.configureTestingModule` | `import` directo del componente |
| `ComponentFixture`, `debugElement` | `document.createElement('my-comp')` |
| `detectChanges()` | `await el.updateComplete` (promesa Lit) |
| Jasmine / Karma | Vitest + happy-dom |
| `fakeAsync` / `tick` | `vi.useFakeTimers()` / `vi.runAllTimers()` |

## CLI

| Angular CLI | cells-cli |
|---|---|
| `ng new my-app` | `cells new my-app` |
| `ng generate component foo` | `cells generate foo` |
| `ng serve` | `cells serve` |
| `ng build` | `cells build` |
| `ng test` | `npm run test` (Vitest) |
