import { Button } from '@/components/ui/button'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import React from 'react'

const Details = () => {
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 pt-8 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src="/1.jpg"/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
            <div>
              <div className='text-green-500 mb-4 flex items-center gap-2'>
                <ShieldCheck />
                <p>Registered with Pluschain</p>
              </div>
              <h1 className="text-neutral-200 text-4xl title-font font-bold mb-1">The Catcher in the Rye</h1>
              <p className="leading-relaxed mt-10 text-neutral-300">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            </div>
            <div>
              <p className='mb-1 text-sm font-bold text-gray-300 tracking-wider'>Price</p>
              <p className='font-semibold text-xl tracking-wide'>1.5 ETH</p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <Button variant="outline" className='flex gap-2 text-gray-400 text-xl mt-auto py-6 w-full'><BadgeCheck /> <p>Verify with Pluschain</p></Button>
              <Button className='bg-sky-500 hover:bg-sky-400 text-white w-full py-6'>Buy NFT</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details