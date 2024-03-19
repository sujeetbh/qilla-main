"use client"

import { cn } from '@/utils/cn'
import { Text } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  //const [navbarBackground, setNavbarBackground] = useState('transparent')

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     if (scrollPosition > 0) {
  //       setNavbarBackground('bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-b border-b-stone-700/50')
  //     } else {
  //       setNavbarBackground('transparent')
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <div className={cn("flex mx-auto py-4 px-10 left-0 right-0 items-center z-30 justify-between bg-transparent")}>
      <div className='flex items-center space-x-2'>
        <Sidebar />
        <Link href='/' className='font-bold text-xl tracking-widest'>Qilla</Link>
      </div>
      <div className='hidden md:flex space-x-12'>
        <Link href='/' className='tracking-wide text-neutral-200 hover:text-neutral-50'>Home</Link>
        <Link href='/explore' className='tracking-wide text-neutral-200 hover:text-neutral-50'>Explore</Link>
        <Link href='/createNFT' className='tracking-wide text-neutral-200 hover:text-neutral-50'>Create</Link>
        {/* <Link href='/collection' className='tracking-wide text-neutral-200 hover:text-neutral-50'>My Collection</Link> */}
      </div>
      <w3m-button size='sm' />
    </div>
  )
}


export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Text size={32} className='flex md:hidden cursor-pointer' />
      </SheetTrigger>
      <SheetContent side={'top'} className='bg-black'>
        <SheetHeader className='mb-10'>
          <SheetTitle>
            <Link href='/' className='font-bold text-xl tracking-widest'>Qilla</Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-between space-y-10 text-xl">
          <div className="">
            <Link href='/explore' className='tracking-wide text-neutral-200 hover:text-neutral-50'>Explore</Link>
          </div>
          <div className="">
            <Link href='/createNFT' className='tracking-wide text-neutral-200 hover:text-neutral-50'>Create</Link>
          </div>
          <div className=''>
            <Link href='/collection' className='tracking-wide text-neutral-200 hover:text-neutral-50'>My Collection</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Navbar