

export interface TodoState {
  data: Todo[],
  loading: boolean,
  error: boolean,
}

export interface Todo {
  id: number,
  name: string,
  done: boolean
}
