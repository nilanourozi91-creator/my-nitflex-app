import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <Image src='/not-found.png' alt='not found' height={500} width={500} className='mx-auto flex items-center justify-center'/>
    
    </div>
  )
}

export default page
