import { Button } from '@/components/ui/button'
import { Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <footer className='container mx-auto mt-[320px]'>
        <div className='flex'>
          <div className='flex flex-col mr-[112px] items-start min-w-[240px]'>
            <Link href='/' className='font-semibold text-xl'>Qilla</Link>
            <p className='text-neutral-400 mt-4 mb-6 font-[500]'>Verification tool from the future.</p>
            <Button className='rounded-2xl bg-[#1d1c20] text-white px-4 py-1.5'>Join the future</Button>
          </div>
          <div className='flex flex-col mr-[88px] xl:mr-[112px] items-start w-[222px]'>
            <p className='mb-4 font-[500] leading-6'>Products</p>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
          </div>
          <div className='flex flex-col mr-[88px] xl:mr-[112px] items-start w-[222px]'>
            <p className='mb-4 font-[500] leading-6'>Products</p>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
          </div>
          <div className='flex flex-col mr-0 xl:mr-[112px] items-start w-[222px]'>
            <p className='mb-4 font-[500] leading-6'>Products</p>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
            <Link href='/' className='text-[#a9a9a9] mb-4 font-[500] leading-6 hover:text-white transition-colors'>Secure NFTs</Link>
          </div>
        </div>
        <div className='flex mt-[124px] justify-between items-center'>
          <div className='text-[#a9a9a9] text-sm mb-10'>2024 Qilla Marketplace Inc.</div>
          <div className='flex items-center'>
            <Link href='/' className='mr-6'><Twitter size={24} className='text-[#a9a9a9]' /></Link>
            <Link href='/' className='mr-6'><Facebook size={24} className='text-[#a9a9a9]' /></Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer