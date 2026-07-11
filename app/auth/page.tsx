'use client'
import Galaxy from '@/components/bagroud'
import LiquidEther from '@/components/bagroud'
import FormAuth from '@/components/formAuth'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

function page() {
  const [Email,setEmail]=useState('');
  const [Name,setName]=useState('');
  const [Password,setPassword]=useState('');
  const [Varient,setVarient]=useState('Login ');
    const toggleVarient=useCallback(()=>{
      setVarient((c)=>c=='login'?'register':'login');
    },[])
  return (
    <div className=' relative h-screen w-full bg-[url("/bg-1.jpg")] bg-cover bg-repeat bg-center bg-fixed'>
      <div className='bg-black w-full h-full lg:bg-neutral-800/55 md:bg-neutral-900/60 z-0 relative'
      // style={{ width: '100%', height: 600, position: 'relative' }}
      >
        <Galaxy 
    mouseRepulsion
    mouseInteraction
    density={1}
    glowIntensity={0.3}
    saturation={0}
    hueShift={140}
    twinkleIntensity={0.3}
    rotationSpeed={0.1}
    repulsionStrength={2}
    autoCenterRepulsion={0}
    starSpeed={0.8}
    speed={1}
/>

        <nav className='px-12 py-5  absolute top-0 left-0'>
             <Image src='/logo.png' alt='logo' width={200} height={200}
             className='h-24 w-fit'
             />
        </nav>
        <div className='flex justify-center  absolute left-auto bottom-32 w-full'>
             <div className='bg-black/80 px-16 py-16 self-center mt-2  lg:w-2/5 md:max-w-fit sm:max-w-fit lg:max-w-md rounded-md w-full'>
             <h2 className='text-4xl mb-8 text-white font-semibold'>{Varient==='login'?'Sign In':' Register'}</h2>
                <div className=' flex flex-col gap-4'>
            {Varient=='register'&&(
            <Input
            Oncha={(ev:any)=>setName(ev.target.value)}
            lable='UserName'
            type='text'
            id='UserName'
             value={Name}
            />
            )}
            <Input
            Oncha={(ev:any)=>setEmail(ev.target.value)}
            lable='Email'
            type='Email'
            id='Email'
             value={Email}
            />
            <Input
            Oncha={(ev:any)=>setPassword(ev.target.value)}
            lable='Password'
            type='Password'
            id='Password'
             value={Password}
            />
            </div>
            <button type='submit' className='bg-red-600 py-3 text-white w-full rounded-md mt-10 hover:bg-red-700 transition-all duration-500'>
             {Varient==='login'?'Login':'Sign Up'}
              </button>
              <div className=' flex flex-row mt-8 items-center justify-center gap-4'>
                 <div className=' w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-55 transition'>
                       <Image src='/google.png' alt='google' width={50} height={50} className='h-full w-full bg-cover'/>
                 </div>
                 <div className=' w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-55 transition'>
                       <Image src='/github.png' alt='google' width={50} height={50} className='h-full w-full bg-cover'/>
                 </div>
              </div>
              <p className='text-neutral-500 mt-12'>
                {Varient ==='login'?'first time using Netflix?':'Already have an account?'}
                <span onClick={toggleVarient} className='text-white hover:underline ml-2 cursor-pointer'>
                 {Varient =='login'?' Create an Account':'login'}
                </span>
              </p>
             </div>
        </div> 
      </div>
    </div>
  )
}

export default page
