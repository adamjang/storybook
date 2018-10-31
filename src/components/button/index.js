import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class Button extends Component {

  render() {
    const {
      backgroundColor,
      children
    } = this.props

    const buttonProps = {
      className: 'ui-button',
      type: 'button'
    }

    if(backgroundColor) {
      buttonProps.style = { backgroundColor }
    }

    return (
      <button {...buttonProps}>
        {children}
      </button>
    )
  }

}

Button.defaultProps = {
  backgroundColor: null,
  children: 'Button'
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.string
}

export default Button
