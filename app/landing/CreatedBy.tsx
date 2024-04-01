import NFTCARD from '@/components/ui/nft-card'
import React from 'react'

const CreatedBy = () => {
  return (
    <div className='container flex justify-center flex-col items-center'>
      <header>
        <h2 className='text-center text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-800'>Start Building on the pluschain</h2>
      </header>
      <div className='flex flex-col sm:flex-row gap-7 xl:gap-12 mt-9 max-w-5xl mx-auto flex-wrap'>
        <NFTCARD image='/1.jpg' title="The Door by Maat Kane"/>
        <NFTCARD image='/6.jpg' title="Metabolts"/>
        <NFTCARD image='/nftironman.jpeg' title='IronMan'/>
      </div>
    </div>
  )
}

export default CreatedBy