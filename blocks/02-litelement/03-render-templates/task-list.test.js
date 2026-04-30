import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import './task-list.js';

describe('task-list', () => {
  let el;

  beforeEach(async () => {
    el = document.createElement('task-list');
    document.body.appendChild(el);
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });

  // --- filteredTasks ---

  test('should render all tasks by default', async () => {
  el.filter = 'all';
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('li').length).toBe(4);
  });

  test('should show only pending tasks when filter is "pending"', async () => {
el.filter = 'pending';
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('li').length).toBe(2);
  });

  test('should show only done tasks when filter is "done"', async () => {
el.filter = 'done';
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('li').length).toBe(2);
  });

  test('should show empty message when no tasks match the filter', async () => {
    el.tasks = [{ id: 1, text: 'Tarea', done: false }];
    el.filter = 'done';
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('p').textContent).toBe('No hay tareas.');
  });

  // --- filtros activos ---

  test('should mark the active filter button with class "active"', async () => {
el.filter = 'pending';
    await el.updateComplete;
    const buttons = el.shadowRoot.querySelectorAll('.filters button');
    expect(buttons[0].classList.contains('active')).toBe(false);
    expect(buttons[1].classList.contains('active')).toBe(true);
    expect(buttons[2].classList.contains('active')).toBe(false);
  });

  // --- addTask ---

  test('should add a new task when addTask is called with text', async () => {
el._newTaskText = 'Nueva tarea';
    el.addTask();
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('li').length).toBe(5);
  });

  test('should clear the input after adding a task', async () => {
el._newTaskText = 'Nueva tarea';
    el.addTask();
    await el.updateComplete;
    expect(el._newTaskText).toBe('');
  });

  test('should not add a task when input is empty', async () => {
el._newTaskText = '';
    el.addTask();
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('li').length).toBe(4);
  });

  // --- toggleTask ---

  test('should toggle task to done when toggleTask is called', async () => {
el.toggleTask(3);
    await el.updateComplete;
    const task = el.tasks.find((t) => t.id === 3);
    expect(task.done).toBe(true);
  });

  test('should toggle task back to pending when called twice', async () => {
el.toggleTask(3);
    await el.updateComplete;
    el.toggleTask(3);
    await el.updateComplete;
    const task = el.tasks.find((t) => t.id === 3);
    expect(task.done).toBe(false);
  });

  test('should apply class "done" to completed task li', async () => {
    el.toggleTask(3);
    await el.updateComplete;
    const li = el.shadowRoot.querySelectorAll('li')[2];
    expect(li.classList.contains('done')).toBe(true);
  });
});
