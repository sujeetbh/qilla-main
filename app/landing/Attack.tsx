
import { Tabs } from '@/components/ui/tabs'
import React from 'react'
import { fetchAttackData } from '../(protectedRoutes)/_actions/attackSection/getAttackData'

const Attack = async() => {
  const attackData = await fetchAttackData();

  if(attackData) {
    const tabs = attackData?.map((attack: any) => ({
      title: attack.navtitle,
      value: attack.navtitle,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#101010] border-white/5 flex items-center justify-between">
          <p className='text-xl md:text-2xl font-bold text-white mb-4'>
            {attack.description}
          </p>
        </div>
      ),
    }));
    return (
      <div className="h-[20rem] md:h-[34rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
        <div className='text-xl md:text-5xl font-bold mb-10 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-800'>Some attacks from which plusChain protects</div>
        <Tabs tabs={tabs} />
      </div>
    )
  }
  return null
}

export default Attack
