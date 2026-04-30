import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

class TaskList extends LitElement {
  static properties = {
    tasks: { state: true },
    filter: { state: true },
    _newTaskText: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      max-width: 480px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-bottom: 1px solid #eee;
    }
    li.done {
      opacity: 0.5;
      text-decoration: line-through;
    }
    .filters {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .filters button {
      padding: 0.25rem 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      background: #fff;
    }
    .filters button.active {
      background: #6c63ff;
      color: #fff;
      border-color: #6c63ff;
    }
    .add-form {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .add-form input {
      flex: 1;
      padding: 0.4rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .add-form button {
      padding: 0.4rem 1rem;
      background: #6c63ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.filter = 'all';
    this._newTaskText = '';
    this.tasks = [
      { id: 1, text: 'Aprender Custom Elements', done: true },
      { id: 2, text: 'Aprender Shadow DOM', done: true },
      { id: 3, text: 'Aprender LitElement', done: false },
      { id: 4, text: 'Aprender Cells Router', done: false },
    ];
  }

  get filteredTasks() {
    if (this.filter === 'pending') return this.tasks.filter((t) => !t.done);
    if (this.filter === 'done') return this.tasks.filter((t) => t.done);
    return this.tasks;
  }

  addTask() {
    const text = this._newTaskText.trim();
    if (!text) return;
    this.tasks = [...this.tasks, { id: Date.now(), text, done: false }];
    this._newTaskText = '';
  }

  toggleTask(id) {
    this.tasks = this.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  }

  render() {
    return html`
      <div class="filters">
        ${['all', 'pending', 'done'].map(
          (f) => html`
            <button
              class=${classMap({ active: this.filter === f })}
              @click=${() => (this.filter = f)}
            >
              ${f}
            </button>
          `
        )}
      </div>

      <div class="task-list-body">
        ${when(
          this.filteredTasks.length === 0,
          () => html`<p>No hay tareas.</p>`,
          () => html`
            <ul>
              ${repeat(
                this.filteredTasks,
                (task) => task.id,
                (task) => html`
                  <li class=${classMap({ done: task.done })}>
                    <input
                      type="checkbox"
                      .checked=${task.done}
                      @change=${() => this.toggleTask(task.id)}
                    />
                    ${task.text}
                  </li>
                `
              )}
            </ul>
          `
        )}
      </div>

      <div class="add-form">
        <input
          type="text"
          placeholder="Nueva tarea..."
          .value=${this._newTaskText}
          @input=${(e) => (this._newTaskText = e.target.value)}
          @keydown=${(e) => e.key === 'Enter' && this.addTask()}
        />
        <button @click=${this.addTask}>Añadir</button>
      </div>
    `;
  }
}

customElements.define('task-list', TaskList);
