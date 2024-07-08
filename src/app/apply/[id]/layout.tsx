import React, { ReactNode } from 'react'

const LayoutApply = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex justify-center items-center h-full bg-slate-100'>
        {children}
    </div>
  )
}

export default LayoutApply