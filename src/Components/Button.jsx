import React from 'react'

const Button = (
    children,
    type='button',
    bgcolor='bg-blue-600',
    textColor = 'text-white',
    className= '',
    ...props
) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor}${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button

