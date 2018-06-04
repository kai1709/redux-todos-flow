// @flow

import { VisibilityFilters } from '../actions'
import type { TodoSetFilterAction } from '../actions/index';
const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: TodoSetFilterAction): string => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
