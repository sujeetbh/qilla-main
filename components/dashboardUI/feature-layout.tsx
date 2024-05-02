"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import FeatureModal from './components/FeatureModal'
import FeatureCard from './components/FeatureCard'
import { updateFeature } from '@/app/(protectedRoutes)/_actions/featureSection/updateFeature'
import toast, { Toaster } from 'react-hot-toast'

const FeatureLayout = ( { featureData } : { featureData : any}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleEdit = async (id: string, key: string, updatedText: string) => {
    console.log(id, key, updatedText)
    const { success, error } = await updateFeature(id, key, updatedText);
    if (!success) {
      return toast.error(`Failed to update feature ${key}`);
    }
    toast.success(`Feature ${key} updated successfully`);
  }
  return (
    <div className="md:min-w-[calc(100vw-220px)] lg:min-w-[calc(100vw-280px)] max-h-[calc(100vh-72px)] border-t border-neutral-700/60 p-8 flex flex-col gap-4 overflow-y-scroll">
      <div className='w-full flex justify-end'>
        <Button className='flex items-center gap-2' onClick={() => setIsOpen(true)}>
          <Plus />
          Add New Feature Card
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-12'>
        {featureData.map((feature : any) => (
          <FeatureCard key={feature.id} item={feature} onEdit={handleEdit} />
        ))}
      </div>
      <FeatureModal isOpen={isOpen} setIsOpen={setIsOpen} />  
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default FeatureLayout