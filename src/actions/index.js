// @flow

let nextTodoId = 0;
export type TodoAddAction = {
  type: string,
  id: number,
  text: string,
}

export type TodoToggleAction = {
  type: string,
  id: number,
}

export type TodoSetFilterAction = {
  type: string,
  filter: string,
}

export const addTodo = (text: string): TodoAddAction => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: string): TodoSetFilterAction => {
  return ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}

export const toggleTodo = (id: number): TodoToggleAction => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
