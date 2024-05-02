import React from 'react'
import FeatureLayout from '@/components/dashboardUI/feature-layout'
import { fetchFeatureData } from '../../_actions/featureSection/getFeatureData'
import { auth } from '@/app/auth';
import { redirect } from 'next/navigation';

const FeaturePage = async () => {
  const featureData = await fetchFeatureData();
  const session = await auth();

  if(!session) {
    redirect('/')
  }
  return (
    <FeatureLayout featureData={featureData} />
  )
}

export default FeaturePage