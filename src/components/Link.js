// @flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'

type LinkInterace = {
  active: boolean,
  children: Object,
  onClick: Function
};
const Link = ({ active, children, onClick }: LinkInterace) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
