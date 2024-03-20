import React from 'react'

type cardSectionProps = {
  title: string
}

const CardSection = ({ title } : cardSectionProps) => {
  return (
    <>
      <div className='font-semibold text-2xl leading-normal mb-6'>
        {title}
      </div>  
      <div className='flex mb-6 overflow-x-scroll'>
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
            src='/6.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The Ai Bolt
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
            src='/10.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The NFT Connection
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
            src='/12.jpg'
            alt="Flower and sky"
          />
          <div className="relative p-4">
            <h3 className="text-base md:text-xl font-semibold pb-4 text-ellipsis">
              The NFt Card
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
    </>
  )
}

export default CardSection