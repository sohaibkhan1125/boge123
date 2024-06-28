import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center rounded-md max-w-lg '>
       <Image className='block md:hidden' src={'/logo.svg'} alt='logo' width={60} height={50} />
       <Image className='hidden md:block' src={'https://cdn-icons-png.flaticon.com/128/5278/5278402.png'} alt='logo' width={40} height={50} />
       <h2 className='font-semibold text-xl md:text-2xl'>AI Generator</h2>
      </div>
      <div className='flex gap-5 items-center'>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
