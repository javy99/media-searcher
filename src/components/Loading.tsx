import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className="w-20 h-20 border-10 border-t-2 border-black dark:border-white border-solid rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading;