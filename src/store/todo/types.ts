

export interface TodoState {
  data: Todo[],
  loading: boolean,
  error: boolean,
}

export interface TodoActions {
  addTodo(todoValue:string | undefined): void,
  toggleTodo(todo:Todo): void,
  removeTodo(todo:Todo): void,
}

export interface Todo {
  id: number,
  name: string,
  done: boolean
}
