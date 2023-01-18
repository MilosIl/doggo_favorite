import React from 'react'

export interface IFavoriteList{}

const FavoriteList:React.FC<IFavoriteList> = () => {
  return (
    <div className=' w-1/4'>
      <p className='font-base font-medium text-center border-b p-2 border-b-green-500 '>List of favorite dogs</p>


    </div>
  )
}

export default FavoriteList