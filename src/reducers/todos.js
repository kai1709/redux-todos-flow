// @flow

import type { TodoAddAction, TodoToggleAction } from '../actions/index';
export type TodosInterface = Array<TodoInterface>;

type TodoInterface = {
  id: number,
  text: string,
  completed: boolean
}
type Action = TodoAddAction | TodoToggleAction;

const todos = (state: TodosInterface = [], action: Action): TodosInterface => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
