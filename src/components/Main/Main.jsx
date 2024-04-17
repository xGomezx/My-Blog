import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='w-full h-screen bg-black flex'>
        {children}
    </main>
  )
}
