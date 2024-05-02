import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { PencilLine, Trash2 } from 'lucide-react'
import React from 'react'
import DeleteModal from './DeleteModal'
import { deleteStep } from '@/app/(protectedRoutes)/_actions/stepSection/deleteStep'
import toast from 'react-hot-toast'

type StepTextAreaProps = {
  item: any,
  index: number,
  onEdit: (id: string, value: string) => void
}

const StepTextArea = ({ item, index, onEdit} : StepTextAreaProps ) => {
  const [editStep, setEditStep] = React.useState(item.step)
  const [isOpen, setIsOpen] = React.useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onEdit(item.id, editStep)
  }

  const handleDelete = async () => {
    //console.log('delete', item.id)
    const { success } = await deleteStep(item.id)
    if (!success) {
      toast.error("Failed to delete")
    }
    toast.success('Deleted Successfully')
    setIsOpen(false)
  }
  return (
    <div key={item.id}>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-between cursor-pointer'>
          <h2 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Step {index + 1}</h2>
          <div className='mr-4' onClick={() => setIsOpen(true)}>
            <Trash2 className='hover:text-rose-600' />
          </div>
        </div>
        <Textarea value={editStep} onChange={(e) => setEditStep(e.target.value)} name="subtitle" className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />
        <div className="flex mt-2 gap-2">
          <Button type='submit' className='flex items-center gap-1'>
            <PencilLine size="15px" />
            Edit</Button>
        </div>
      </form>
      <DeleteModal isOpen={isOpen} setIsOpen={setIsOpen} text={editStep} id={item.id} onDelete={handleDelete} />
    </div>
  )
}

export default StepTextArea