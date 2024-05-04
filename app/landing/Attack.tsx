
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
        <div className="w-full overflow-hidden relative h-full rounded-xl md:rounded-2xl p-4 md:p-10 bg-[#101010] border-white flex items-center justify-between">
          <p className='text-sm md:text-2xl font-semibold md:font-bold text-white mb-4'>
            {attack.description}
          </p>
        </div>
      ),
    }));
    return (
      <div className="h-[20rem] md:h-[34rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
        <div className='text-3xl md:text-5xl mx-auto font-bold mb-10 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-800'>Attacks from which Qilla protects you</div>
        <Tabs tabs={tabs} />
      </div>
    )
  }
  return null
}

export default Attack