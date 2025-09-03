import React from 'react'

const FormBlock = ({title,children}) => {
  return (
    <div className='rounded-lg bg-white shadow-formblock py-3'>
        <h1 className='font-semibold text-size16 text-brandBlack border-b border-brandAsh-900 px-5 pb-2'>{title}</h1>
        <div className='px-5 mt-2'>
            {children}
        </div>
    </div>
  )
}

export default FormBlock