/**
 * @file A button component that takes in various props to render a styled button element.
 * @requires Icon from the '@iconify/react' library
 * @requires React
 */

import { Icon } from '@iconify/react'
import React from 'react'

/** A collection of styles for different button variants */
const ButtonVarient = {
  primary:
    ' flex-1 flex items-center justify-center h-12 transition-all bg-primary hover:bg-primaryDark drop-shadow-lg text-white rounded',
  outlinePrimary:
    'flex-1 flex items-center justify-center h-12 transition-all hover:bg-primary hover:text-white drop-shadow-lg text-primary rounded border border-primary',
}

/**
 * Renders a styled button element with dynamic class names based on the value of the 'varient' prop.
 * @param {Object} props - Props object containing various properties to configure the button.
 * @param {String} varient - primary | outlinePrimary
* @returns {JSX.Element} A styled button element.

 */
const Button = (props) => {
  const { title, isLoading, children, varient = 'primary' } = props

  return (
    <button
      disabled={isLoading || props?.disabled}
      {...props}
      className={`customDisablebutton ${ButtonVarient?.[varient]} ${
        props?.className ?? ''
      } `}
    >
      {isLoading ? <Icon icon={'eos-icons:loading'} width={28} /> : title}
      {!isLoading && children}
    </button>
  )
}

export default Button
