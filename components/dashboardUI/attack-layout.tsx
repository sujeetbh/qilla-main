"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import AttackModal from './components/AttackModal'
import AttackCard from './components/AttackCard'
import { updateAttack } from '@/app/(protectedRoutes)/_actions/attackSection/updateAttack'
import toast, { Toaster } from 'react-hot-toast'

const AttackLayout = ({ attackData } : { attackData : any}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleEdit = async (id: string, key: string, updatedText: string) => {
    const { success, error } = await updateAttack(id, key, updatedText);
    if (!success) {
      return toast.error(`Failed to update attack ${key}`);
    }
    toast.success(`Attack ${key} updated successfully`);
  }

  return (
    <div className="md:min-w-[calc(100vw-220px)] lg:min-w-[calc(100vw-280px)] max-h-[calc(100vh-72px)] border-t border-neutral-700/60 p-8 flex flex-col gap-4 overflow-y-scroll">
      <div className='w-full flex justify-end'>
        <Button className='flex items-center gap-2' onClick={() => setIsOpen(true)}>
          <Plus />
          Add New Attack Card
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-12'>
        {attackData.map((attack : any) => {
          return (
            <AttackCard key={attack.id} item={attack} onEdit={handleEdit} />
          )
        })}
      </div>
      
      <AttackModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Toaster 
        position='top-right'
        reverseOrder={false}
      />
    </div>
  )
}

export default AttackLayout