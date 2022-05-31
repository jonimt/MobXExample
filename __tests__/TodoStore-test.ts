import {TodoStore} from '../src/store/TodoStore';

beforeEach(() => {
  fetchMock.resetMocks();
});

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

  it('Fetching todos is working', async () => {
    // We mock fetch response once. Meaning the next and only the next
    // time fetch is called, it will return what we tell it to return.
    // And then expect it to be saved to our store
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
      ]),
    );

    const store = new TodoStore();

    await store.fetchTodos();

    expect(store.todos).toHaveLength(1);
    expect(store.totalTodos).toBe(1);
    expect(store.completedTodosCount).toBe(0);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Fetching todos error handling is working', async () => {
    // We mock the fetch result to be error. And expect the error to be
    // catched and store to be empty
    fetchMock.mockReject(() => Promise.reject('unexpected error'));

    const store = new TodoStore();

    const error = await store.fetchTodos();

    expect(error).toEqual('unexpected error');
    expect(store.todos).toHaveLength(0);
    expect(store.totalTodos).toBe(0);
    expect(store.completedTodosCount).toBe(0);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
