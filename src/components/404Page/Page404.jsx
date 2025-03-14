import React from 'react'
import page404gif from '../../img/page404.gif'



const Page404 = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-red-400 text-9xl'>404</p>
      <p className='font-homenaje text-3xl'>PAGE NOT FOUND</p>
      <img src={page404gif} />
    </div>
  )
}

export default Page404
