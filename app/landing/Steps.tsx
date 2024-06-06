import React from 'react'
import { fetchStepData } from '../(protectedRoutes)/_actions/stepSection/getStepData'

const Steps = async () => {
  const stepData = await fetchStepData()
  return (
    <div className='container'>
      <header>
        <h2 
          className='
            text-6xl 
            tracking-tighter
            leading-tight
            font-bold max-w-[40rem]'>plusChain is easy!</h2>
      </header>
      <p className='text-xl mt-6 max-w-[28em] text-neutral-300'>
        Using plusChain is as simple as this: 
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-12 gap-10 mb-20'>
        {stepData?.map((step, index) => (
          <StepText key={step.id} index={index}>{step.step}</StepText>
        ))}
      </div>
    </div>
  )
}

export default Steps

const StepText = ({ children, index } : { children: string, index: number}) => {
  return (
    <div className='text-lg flex items-start'>
      <div className='text-3xl mr-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100  to-neutral-500'>0{index + 1}</div>
      <div className='mt-1 text-neutral-300'>{children}</div>
    </div>
  )
}
