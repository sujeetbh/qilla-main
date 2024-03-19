import React from 'react'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardFooter, 
  CardTitle
} from '@/components/ui/card'

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle
} from '@/components/ui/text-reveal-card'





const FeatureGrid = () => {
  return (
    <div className='grid grid-cols-4 row-auto container mx-auto gap-x-6 gap-y-6'>
      <Card className='rounded-3xl bg-[#1d1c20] border-white/5 p-8'>
          <CardHeader className='p-0'>
            <CardTitle className='text-xl mb-2 font-semibold'>Three Way Matching</CardTitle>
          </CardHeader>
          <CardContent className='p-0'>
            <CardDescription className='text-[#a9a9a9] text-[15px] mb-2.5'>
              Executes a unique three-way 'matching' between assets, tokens, metadata, and metatokens at runtime prior to any transaction, ensuring the authenticity and security of tokenized transactions.
            </CardDescription>
            <div className="rounded-2xl">

            </div>
          </CardContent>
      </Card>
      <div className='rounded-3xl bg-[#1d1c20] border-white/5 col-span-2 row-span-1'>
        <TextRevealCard
          text="Unsecured NFTs"
          revealText="Secure with Qilla"
        >
          <TextRevealCardTitle className='text-xl mb-2 font-semibold'>
            Guarantee Security
          </TextRevealCardTitle>
          <TextRevealCardDescription className='text-[15px]'>
            Provides tamper-evidence of datasets, guaranteeing the security of digital transactions.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <Card className='rounded-3xl bg-[#1d1c20] border-white/5 p-8'>
          <CardHeader className='p-0'>
            <CardTitle className='text-xl mb-2 font-semibold'>Platform Independent</CardTitle>
          </CardHeader>
          <CardContent className='p-0'>
            <CardDescription className='text-[#a9a9a9] text-[15px] mb-2.5'>
              Can be deployed on any technology platform, with any cryptography stack and with centralized or decentralized databases.
            </CardDescription>
            <div className="rounded-2xl">

            </div>
          </CardContent>
      </Card>
      <Card className='rounded-3xl bg-[#1d1c20] border-white/5 p-8 col-span-2'>
          <CardHeader className='p-0'>
            <CardTitle className='text-xl mb-2 font-semibold'>NFT World</CardTitle>
          </CardHeader>
          <CardContent className='p-0'>
            <CardDescription className='text-[#a9a9a9] text-[15px] mb-2.5'>
              Addresses issues of trust and security in the NFT world, also providing royalty tracking, digital rights accounting, and auditability.
            </CardDescription>
            <div className="rounded-2xl">

            </div>
          </CardContent>
      </Card>
      <Card className='rounded-3xl bg-[#1d1c20] border-white/5 p-8 col-span-2'>
          <CardHeader className='p-0'>
            <CardTitle className='text-xl mb-2 font-semibold'>Tracking and Trading</CardTitle>
          </CardHeader>
          <CardContent className='p-0'>
            <CardDescription className='text-[#a9a9a9] text-[15px] mb-2.5'>
              Enables secure tracking and trading of assets across multiple marketplaces and blockchains.
            </CardDescription>
            <div className="rounded-2xl">

            </div>
          </CardContent>
      </Card>
    </div>
  )
}

export default FeatureGrid