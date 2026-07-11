import React from 'react'
interface mobileMenueProps{
    visible?: boolean,
}
const MobileComponent: React.FC<mobileMenueProps> = ({visible }) => {
  if (visible) {
    return null
  }
  return(
    <div className=' bg-black w-56 absolute top-8  left-0 py-5 flex flex-col order-2  border-neutral-300 border-2'>
         <div className='flex flex-col gap-4'>
            <div className='px-3 text-center text-white hover:underline'>
                home
            </div>
         </div>
    </div>
  )
     
  
};

export default MobileComponent
