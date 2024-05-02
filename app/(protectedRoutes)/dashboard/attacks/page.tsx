import React from 'react'
import AttackLayout from '@/components/dashboardUI/attack-layout'
import { fetchAttackData } from '../../_actions/attackSection/getAttackData';
import { auth } from '@/app/auth';
import { redirect } from 'next/navigation';

const AttacksPage = async() => {
  const attackData = await fetchAttackData();
  const session = await auth();

  if(!session) {
    redirect('/')
  }

  return (
    <AttackLayout attackData={attackData} />
  )
}

export default AttacksPage