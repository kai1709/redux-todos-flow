// @flow

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

type AddTodoInterface = {
  dispatch: Function
}
const AddTodo = ({ dispatch }: AddTodoInterface) => {
  let input: any
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        if (input) input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
