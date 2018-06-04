// @flow

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

type StateInterface = {
  visibilityFilter: string
}
type PropsInterface = {
  filter: string,
}
type MapStateInterface = {
  active: boolean
}
type MapDispatchInterface = {
  onClick: Function
}
const mapStateToProps = (state: StateInterface, ownProps: PropsInterface): MapStateInterface => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Function, ownProps: PropsInterface): MapDispatchInterface => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
