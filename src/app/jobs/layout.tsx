import { ReactNode } from 'react'

const LayoutJobs = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='h-1/2 w-full flex justify-center'>
        {children}
      </div>
    </div>
  )
}

export default LayoutJobs