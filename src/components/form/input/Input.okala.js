import { Icon } from '@iconify/react'

import React, { useEffect, useRef } from 'react'

const Input = ({ title, inputProps, icon, inputGroupClass, autofocus }) => {
  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef && autofocus) {
      inputRef.current.focus()
    }
  }, [autofocus, inputRef])

  return ( 
    <div className="w-full">
      {/* //check if title have value display */}
      {title && (
        <span className="text-label text-sm text-gray-600">{title}</span>
      )}

      <div
        className={`w-full mt-1 flex  rounded-lg bg-gray-50/50  border ${inputGroupClass}`}
      >
        {icon &&
          (typeof icon == 'string' ? (
            <div className="w-10 just-center ">
              <Icon icon={icon} width={'70%'} color="gray" />
            </div>
          ) : (
            icon
          ))}
        {inputProps?.type == 'textarea' ? (
          <textarea
            {...inputProps}
            className={`min-h-[theme(height.40)] outline-none flex-1 rounded-lg w-full px-4 ${inputProps?.className}`}
          ></textarea>
        ) : (
          <input
            ref={inputRef}
            {...inputProps}
            className={`h-10 outline-none flex-1 rounded-lg w-full px-4 bg-transparent ${
              inputProps?.className ?? ''
            }`}
          />
        )}
      </div>
    </div>
  )
}

export default Input
