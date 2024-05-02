
import React from 'react'
import StepLayout from '@/components/dashboardUI/step-layout'
import { fetchStepData } from '../../_actions/stepSection/getStepData';
import { auth } from '@/app/auth';
import { redirect } from 'next/navigation';

const StepsPage = async() => {
  const stepsData = await fetchStepData();
  const session = await auth();

  if(!session) {
    redirect('/')
  }

  return (
    <StepLayout stepData={stepsData} />
  )
}

export default StepsPage