import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='w-full bg-black flex flex-col items-center'>
        {children}
    </main>
  )
}
