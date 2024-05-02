import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PencilLine, Trash2 } from 'lucide-react'
import React from 'react'
import DeleteModal from './DeleteModal'
import { deleteAttack } from '@/app/(protectedRoutes)/_actions/attackSection/deleteAttack'
import toast from 'react-hot-toast'

type AttackCardProps = {
  item: any,
  onEdit: (id: string, key: string, value: string) => void
}

const AttackCard = ({ item, onEdit } : AttackCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [attackHeading, setAttackHeading] = React.useState(item.navtitle)
  const [attackDescription, setAttackDescription] = React.useState(item.description)

  const handleHeadingEdit = () => {
    onEdit(item.id, 'navtitle', attackHeading)
  }

  const handleDescriptionEdit = () => {
    onEdit(item.id, 'description', attackDescription)
  }

  const handleDelete = async () => {
    const { success } = await deleteAttack(item.id)
    if (!success) {
      toast.error("Failed to delete")
    }
    toast.success('Deleted Successfully')
    setIsOpen(false)
  }

  return (
    <div>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className="text-lg font-semibold md:text-2xl mb-2">Card Nav Title</h1>
          <div className='mr-4' onClick={() => setIsOpen(true)}>
            <Trash2 className='hover:text-rose-600' />
          </div>
        </div>
          <Input value={attackHeading} name="navtitle" onChange={(e) => setAttackHeading(e.target.value)} className="w-full border border-dashed border-gray-700/60 rounded-lg p-3 focus:outline-none" />
          <Button onClick={handleHeadingEdit} className='mt-4 flex items-center gap-1'>
            <PencilLine size='15px'/>
            Edit
          </Button>
      </div>
      <div>
          <h2 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Attack</h2>
          <Textarea value={attackDescription} name="attack" onChange={(e) => setAttackDescription(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />
          <Button onClick={handleDescriptionEdit} className='mt-4 flex items-center gap-1'>
            <PencilLine size='15px'/>
            Edit
          </Button>
      </div>
      <DeleteModal id={item.id} isOpen={isOpen} setIsOpen={setIsOpen} title={attackHeading} text={attackDescription} onDelete={handleDelete}/>
    </div>
  )
}

export default AttackCard