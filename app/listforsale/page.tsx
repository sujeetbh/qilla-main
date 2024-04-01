import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShieldCheck } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
              <div className='flex space-x-4'>
                <div>
                  <Label htmlFor="Quantity">Quantity</Label>
                  <Input type="number" id="Quantity" placeholder="Quantity" />
                </div>
                <div>
                  <Label htmlFor="price">Price for each count</Label>
                  <Input type="number" id="Price" placeholder="Price" />
                </div>
                <div>
                  <Label htmlFor="coin">Select a coin</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a coin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="ETH">ETH</SelectItem>
                        <SelectItem value="BTC">BTC</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className='bg-sky-500 hover:bg-sky-400 text-white w-full py-6'>List for sale</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details