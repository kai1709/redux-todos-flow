// @flow

import { VisibilityFilters } from '../actions'

const visibilityFilter = (state: string = VisibilityFilters.SHOW_ALL, action: Object): string => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
