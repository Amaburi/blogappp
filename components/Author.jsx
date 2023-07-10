import React from 'react'
import Image from 'next/image'
import { grpahCMSImageLoader } from '../utils';
const Author = ({authors}) => {
  return (
    <div className='text-center mt-20 mb-5 p-12 relative rounded-lg bg-white bg-opacity-25'>
      <div className='absolute left-0 right-0 top-14'>
        <h1 className='font-semibold stroke-zinc-500 hover:text-purple-400'>Author :</h1>
      </div>
      <h3 className='text-black mt-10 my-4 text-xl font-bold hover:text-purple-400'>{authors[0].name}</h3>
      <p className='text-black text-lg hover:text-purple-400'>{authors[0].bio}</p>
    </div>
  )
}

export default Author