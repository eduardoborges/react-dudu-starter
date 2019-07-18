export type Todo = {
  id: number,
  name: string,
  isDone: boolean
};

export type State = {
  AUTH: {
    isAuth: Boolean,
    token: String
  },
  TODO: {
    data: Array<Todo>,
    isLoading: boolean,
    isFeched: boolean
  },
  USER: User,
  FOO: String
};

export type Store = {
  setState: string,
  getState: string
};
