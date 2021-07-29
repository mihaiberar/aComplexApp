import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

export const Button = ({ label, ...props }) => {
  const mode = label.toLowerCase()
  return (
    <button type="button" className={[styles.button, styles[`${mode}Button`]].join(' ')} {...props}>
      {label}
    </button>
  )
}

Button.propTypes = {
  backgroundcolor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  backgroundcolor: null,
  onClick: undefined
}
