import { SparklesCore } from '@/components/ui/sparkles'

import React from 'react'
import FeatureGrid from './FeatureGrid'


const About = () => {
  return (
    <div className='flex items-center flex-col justify-center'>
      <h2 className='text-6xl text-center font-bold font-sans bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-500 bg-clip-text text-transparent'>Pluschain</h2>
      <p className='text-neutral-300 text-center mt-3 text-lg'>plusChain Weave a magic safety net around your tokenized assets </p>
      <div className='relative w-[40rem] h-36 mt-5'>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <FeatureGrid />
    </div>
  )
}

export default About
