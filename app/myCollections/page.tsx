"use client"
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import RegisterModal from './RegisterModal'
import { useRouter } from 'next/navigation'

const Collection = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const router = useRouter()

  return (
    <div className='container '>
      <div className='font-semibold text-3xl leading-normal mb-6 mt-4'>
        My Collection
      </div>  
      <div className='flex mb-6 overflow-x-scroll gap-4'>
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mr-4 rounded-xl bg-neutral-900 shrink-0'>
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className='text-sm py-2 border border-slate-700 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-white hover:text-black' onClick={() => setIsOpen(true)}> <ShieldCheck/> Register with Pluschain</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This will give you an authentication</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button className='bg-sky-500 hover:bg-sky-400 text-white' onClick={() => router.push("/listforsale")}>List for Sale</Button>
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
                The Chain Security
              </h3>
              <div className='flex flex-col gap-2'>
                <div className='text-sm py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer  text-green-500'> <ShieldCheck/> Registered with Pluschain</div>    
                <Button className='bg-sky-500 hover:bg-sky-400 text-white' onClick={() => router.push('/listforsale')}>List for Sale</Button>
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
                The Digital Art
              </h3>
              <div className='flex flex-col gap-2'>
                <div className='text-sm py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer  text-green-500'> <ShieldCheck/> Registered with Pluschain</div>    
                <Button variant="outline" className='bg-zinc-900 hover:bg-zinc-800 text-white'>Remove from sale</Button>
              </div>
            </div>
        </div>
      </div>
      <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Collection