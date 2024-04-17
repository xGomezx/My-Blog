import React from 'react'

export const News = ({img,date,description}) => {
  return (
    <div className='w-11/12 flex items-center pt-2 pb-2'>
        <img className='w-26 h-20 mr-4 rounded-md' src={img} alt="" />

        <div>
            <h2 className='text-red-600'>{date}</h2>
            <p className='text-white text-xs'>{description}</p>
            <hr />
        </div>
    </div>
  )
}
