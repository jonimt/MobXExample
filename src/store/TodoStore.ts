import {action, computed, makeObservable, observable} from 'mobx';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

export class Todo {
  id: string = uuid();
  title: string;
  completed: boolean = false;

  constructor(title: string) {
    this.title = title;
    makeObservable(this, {
      completed: observable,
      complete: action,
    });
  }

  complete() {
    this.completed = true;
  }
}

export class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      totalTodos: computed,
      completedTodosCount: computed,
      addTodo: action,
    });
  }

  get totalTodos() {
    return this.todos.length;
  }

  get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  addTodo(title: string) {
    this.todos.push(new Todo(title));
  }
}

export const todoStore = new TodoStore();
