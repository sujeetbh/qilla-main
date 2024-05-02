import { HeroLayout } from '@/components/dashboardUI/hero-layout'
import React from 'react'
import { fetchHeroData } from '../../_actions/heroSection/getHeroData'
import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'

const Hero = async () => {
  const heroData = await fetchHeroData();
  const session = await auth();

  if(!session) {
    redirect('/')
  }

  return (
    <div>
      <HeroLayout heroData={heroData} />
    </div>
  )
}

export default Hero