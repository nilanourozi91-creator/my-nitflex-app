'use client'

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import NavbarItem from './navbarItem'
import { ChevronDown } from 'lucide-react'
import MobileComponent from './mobileC'

function Navbar() {
  const [showMoblie, setShowMobile]=useState(false);
  const toggleMenu=useCallback(()=>{
     setShowMobile((c)=>c);
  },[])
  return (
    <nav className='w-full z-40 fixed'>
      <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900/90'>
          <Image src='/logo.png' alt='logo' width={200} height={200}
            className='h-4 lg:h-7 w-fit'
            />
            <div className=' flex-row ml-8 gap-7 hidden lg:flex'>
              <NavbarItem  label='home'/>
              <NavbarItem  label='serice'/>
              <NavbarItem  label='films'/>
              <NavbarItem  label='new and pupuler'/>
              <NavbarItem  label='browse by languages'/>
            </div>
            <div onClick={showMoblie} className=' border lg:hidden flex flex-row gap-2 pl-2 items-center cursor-pointer relative'>
               <p className=' text-white text-sm'>Browse</p>
               <ChevronDown className=' transition text-white'/>
               <div>
                <MobileComponent/>
               </div>
            </div>
      </div>
    </nav>
  )
}

export default Navbar
