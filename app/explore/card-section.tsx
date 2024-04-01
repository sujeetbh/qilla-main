'use client'
import React from 'react'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import VerificationModal from './VerificationModal'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useRouter } from 'next/navigation'

type cardSectionProps = {
  title: string
}

const CardSection = ({ title } : cardSectionProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter();
  return (
    <>
      <div className='font-semibold text-2xl leading-normal mb-6'>
        {title}
      </div>  
      <div className='flex mb-6 overflow-x-scroll'>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0 relative'>
          <div className='absolute top-2 left-2 bg-white rounded-full p-1'>
            <ShieldCheck size={24} className='text-green-500'/>
          </div>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/1.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The Lock
            </h3>
            <div className='flex flex-col gap-2'>
                <div className='text-sm py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer  text-green-500'> <BadgeCheck/> Verified with Pluschain</div>    
                <Button className='bg-sky-500 hover:bg-sky-400 text-white' onClick={() => router.push('/details')}>Buy NFT</Button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/6.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The Ai Bolt
            </h3>
            <div className='flex flex-col gap-2'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className='text-sm py-2 border border-slate-700 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-white hover:text-black' onClick={() => setIsOpen(true)}> <BadgeCheck/> Verify with Pluschain</div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This will give you an authentication</p>
                  </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              <Button className='bg-sky-500 hover:bg-sky-400 text-white' onClick={() => router.push('/details')}>Buy NFT</Button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/10.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The NFT Connection
            </h3>
            <div className='flex flex-col gap-2'>
                <div className='text-sm py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer  text-green-500'> <BadgeCheck/> Verified with Pluschain</div>    
                <Button className='bg-sky-500 hover:bg-sky-400 text-white' onClick={() => router.push('/details')}>Buy NFT</Button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/12.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The NFt Card
            </h3>
            <div className='flex flex-col gap-2'>
                <div className='text-sm py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer  text-green-500'> <BadgeCheck/> Verified with Pluschain</div>    
                <Button className='bg-sky-500 hover:bg-sky-400 text-white' onClick={() => router.push('/details')}>Buy NFT</Button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/5.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The Ai Chain
            </h3>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">
                  Floor
                </span>
                <span className="font-semibold">0.05 ETH</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">
                  Total Volume
                </span>
                <span className="font-semibold">77K ETH</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/5.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The Ai Chain
            </h3>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">
                  Floor
                </span>
                <span className="font-semibold">0.05 ETH</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">
                  Total Volume
                </span>
                <span className="font-semibold">77K ETH</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
          <img
            className="object-cover w-full h-48 rounded-t-xl"
            src='/5.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The Ai Chain
            </h3>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">
                  Floor
                </span>
                <span className="font-semibold">0.05 ETH</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">
                  Total Volume
                </span>
                <span className="font-semibold">77K ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VerificationModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default CardSection