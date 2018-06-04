// @flow

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import type { TodosInterface } from '../reducers/todos';

type MapStateInterface = {
  todos: TodosInterface
}
type MapDispatchInterface = {
  toggleTodo: Function
}
type StateInterface = {
  todos: TodosInterface,
  visibilityFilter: string
}
const getVisibleTodos = (todos: TodosInterface, filter: string): TodosInterface => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = (state: StateInterface): MapStateInterface => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Function): MapDispatchInterface => {
  return ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
