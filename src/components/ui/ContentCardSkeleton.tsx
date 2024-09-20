import React from 'react'

export const ContentCardSkeleton: React.FC = () => {
  return (
    <div className='relative h-1/3 bg-indigo-700 m-2 rounded-xl'>
        <div className='w-full p-4 flex space-x-2'>
            <div className='h-5 w-6 bg-slate-200/60 rounded-xl'></div>
            <div className='h-5 w-full bg-slate-200/60 rounded-xl'></div>
        </div>
        <div className='w-full'>
            <div className='mx-4 h-2 bg-slate-200/60 rounded-xl'>
        </div>
        </div>
    </div>
  )
}
