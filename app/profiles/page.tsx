import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex flex-col'>
          <h1 className='text-3xl md:text-6xl text-white text-center'>Who is Watching</h1>
          <div className='flex justify-center items-center gap-8 mt-10'>
             <div>
                <div className=' group flex-row  mx-auto'>
                   <div className='w-60 h-60 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                     <Image src='/not-found.png' alt='not found'  height={500} width={500} className='mx-auto flex items-center justify-center'/>
                   </div>
                   <div className='mt-6 text-gray-400  text-2xl text-center group-hover:text-white'>
                         Name
                   </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default page
