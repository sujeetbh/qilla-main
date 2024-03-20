'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import { Card, CardFooter } from './card'

type NFTCardProps = {
  image: string
  title?: string
  description?: string
}

const NFTCARD = ({ image, title, description } : NFTCardProps) => {
  return (
    <div className='rounded-[20px] bg-[#101010]'>
      <Image src={image} alt='nft' width={340} height={300} className='rounded-t-[20px]' />
      <p className='font-bold p-4 tracking-wide'>
        {title}
      </p>
      <div className='flex px-4 justify-between'>
        <div className=''>
          <div className='text-neutral-400'>Floor</div>
          <div className='font-bold'>5.32 ETH</div>
        </div>
        <div>
          <div className='text-neutral-400'>Total Volume</div>
          <div className='font-bold'>77K ETH</div>
        </div>
      </div>
      <div className='p-4'>
        <Button className='w-full'>Buy Now</Button>
      </div>
    </div>
  )
}

export default NFTCARD