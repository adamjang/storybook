import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class Button extends Component {

  render() {
    const { children } = this.props

    return (
      <button
        className="ui-button"
        type="button">
        {children}
      </button>
    )
  }

}

Button.defaultProps = {
  children: 'Button'
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
