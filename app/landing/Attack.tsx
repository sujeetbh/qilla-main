import { Tabs } from '@/components/ui/tabs'
import React from 'react'

const Attack = () => {
  const tabs = [
    {
      title: "Denial of Service",
      value: "denial-of-service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#1d1c20] border-white/5 flex items-center justify-between">
          <p className='text-xl md:text-2xl font-bold text-white mb-4'>
            Making NFT data unavailable: This is when an attacker prevents access to NFT data, making it impossible for users to interact with their NFTs.
          </p>
        </div>
      ),
    },
    {
      title: "Wash Trading",
      value: "wash-trading",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#1d1c20] border-white/5 flex items-center justify-between">
          <p className='text-xl md:text-2xl font-bold text-white mb-4'>
            Wash trading: This is a deceptive practice where an attacker uses multiple self-addresses to manipulate the market and create a false impression of high trading volume.
          </p>
        </div>
      ),
    },
    {
      title: "Spoofing",
      value: "spoofing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#1d1c20] border-white/5 flex items-center justify-between">
          <p className='text-xl md:text-2xl font-bold text-white mb-4'>
            Spoofing by copying asset: This is when an attacker duplicates an NFT and tries to sell it as the original, deceiving potential buyers.
          </p>
        </div>
      ),
    },
    {
      title: "NFT Minting",
      value: "nft-minting",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-[#1d1c20] border-white/5 flex items-center justify-between">
          <p className='text-xl md:text-2xl font-bold text-white mb-4'>
            NFT minting on the same blockchain but different marketplaces: This is when an attacker mints an NFT on one marketplace and then registers it on another, potentially leading to confusion or deception.
          </p>
        </div>
      ),
    },
    {
      title: "Impersonation",
      value: "impersonation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#1d1c20] border-white/5 flex items-center justify-between">
          <p className='text-xl md:text-2xl font-bold text-white mb-4'>
            Attacker hacks social media platforms and impersonates a creator: This is when an attacker impersonates a legitimate NFT creator on social media platforms to deceive potential buyers.
          </p>
          
        </div>
      ),
    },
  ];
  return (
    <div className="h-[20rem] md:h-[34rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
      <div className='text-xl md:text-5xl font-bold mb-10 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-800'>Attacks from which Qilla protects you</div>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Attack