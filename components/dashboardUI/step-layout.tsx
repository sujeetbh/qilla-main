"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import StepsModal from './components/StepsModal'
import StepTextArea from './components/StepTextArea'
import { updateStep } from '@/app/(protectedRoutes)/_actions/stepSection/updateStep'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'

const StepLayout = ({ stepData } : { stepData : any}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter();

  const handleEdit = async (id : string, updatedText : string) => {
    const { success, error } = await updateStep(id, updatedText);
    if (!success) {
      return toast.error("Failed to update step");
    }
    toast.success('Step Updated Successfully');
  }
  
  return (
    <div className="md:min-w-[calc(100vw-220px)] lg:min-w-[calc(100vw-280px)] max-h-[calc(100vh-72px)] border-t border-neutral-700/60 p-8 flex flex-col gap-4 overflow-y-scroll">
      <div className='w-full flex justify-end'>
        <Button className='flex items-center gap-2' onClick={() => setIsOpen(true)}>
          <Plus />
          Add New Step
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-12'>
        {stepData.map((step : any, index : number) => (
          <StepTextArea key={step.id} item={step} index={index} onEdit={handleEdit} />
        ))}
      </div>
      <StepsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Toaster 
        position='top-right'
        reverseOrder={false}
      />
    </div>
  )
}

export default StepLayout