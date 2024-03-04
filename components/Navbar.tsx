import Link from 'next/link'
import React from 'react'
import { DropdownNavigation } from './DropdownNavigation'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex mx-auto py-4 px-10 fixed left-0 right-0 items-center z-30 justify-between bg-black'>
      <Link href='/' className='font-bold text-xl tracking-widest'>Qilla</Link>
      <div>
       <DropdownNavigation /> 
      </div>
      <w3m-button size='sm' />
    </div>
  )
}

export default Navbar