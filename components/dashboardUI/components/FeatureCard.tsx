import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PencilLine, Trash2 } from 'lucide-react'
import React from 'react'
import DeleteModal from './DeleteModal'
import { deleteFeature } from '@/app/(protectedRoutes)/_actions/featureSection/deleteFeature'
import toast from 'react-hot-toast'

type FeatureCardProps = {
  item: any;
  onEdit: (id: string, key: string, updatedText: string) => void;
}

const FeatureCard = ({ item, onEdit } : FeatureCardProps ) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [featureTitle, setFeatureTitle] = React.useState(item.title)
  const [featureDescription, setFeatureDescription] = React.useState(item.description)

  const handleTitleEdit = () => {
    onEdit(item.id, 'title', featureTitle)
  }

  const handleDescriptionEdit = () => {
    onEdit(item.id, 'description', featureDescription)
  }

  const handleDelete = async () => {
    const { success } = await deleteFeature(item.id)
    if (!success) {
      toast.error("Failed to delete")
    }
    toast.success('Deleted Successfully')
    setIsOpen(false)
  }
  return (
    <div className='mb-4' key={item.id}>
          <div>
            <div className='flex items-center justify-between'>
              <h1 className="text-lg font-semibold md:text-2xl mb-2">Card Heading</h1>
              <div className='mr-4' onClick={() => setIsOpen(true)}>
                <Trash2 className='hover:text-rose-600' />
              </div>
            </div>
            <Input value={featureTitle} name="title" onChange={(e) => setFeatureTitle(e.target.value)} className="w-full border border-dashed border-gray-700/60 rounded-lg p-3 focus:outline-none" />
              <Button onClick={handleTitleEdit} className='mt-4 flex items-center gap-1'>
                <PencilLine size='15px'/>
                Edit
              </Button>
          </div>
          <div>
            <h2 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Card Description</h2>
            <Textarea value={featureDescription} name="subtitle" onChange={(e) => setFeatureDescription(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />
            <Button onClick={handleDescriptionEdit} className='mt-4 flex items-center gap-1'>
              <PencilLine size='15px' />
              Edit
            </Button>
          </div>
          <DeleteModal id={item.id} isOpen={isOpen} setIsOpen={setIsOpen} title={featureTitle} text={featureDescription} onDelete={handleDelete}/>
        </div>
  )
}

export default FeatureCard