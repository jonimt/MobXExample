import {TodoStore} from '../src/store/TodoStore';

describe('TodoStore testing', () => {
  it('constructs correctly with empty todoslist', async () => {
    const store = new TodoStore();

    expect(store.todos).toHaveLength(0);
    expect(store.totalTodos).toBe(0);
    expect(store.completedTodosCount).toBe(0);
  });

  it('add todo works', () => {
    const store = new TodoStore();

    store.addTodo('Test todo');

    expect(store.todos).toHaveLength(1);
    expect(store.totalTodos).toBe(1);
    expect(store.completedTodosCount).toBe(0);
  });

  it('complete todo works', () => {
    const store = new TodoStore();

    store.addTodo('Test todo');
    store.todos[0].complete();

    expect(store.todos).toHaveLength(1);
    expect(store.totalTodos).toBe(1);
    expect(store.completedTodosCount).toBe(1);
  });
});
