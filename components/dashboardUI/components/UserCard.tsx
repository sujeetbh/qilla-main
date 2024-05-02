import deleteUser from '@/app/(protectedRoutes)/_actions/userSection/deleteUser'
import { PencilLine, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { editUser } from '@/app/(protectedRoutes)/_actions/userSection/editUser'

const UserCard = ({ item } : { item: any}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const handleDelete = async () => {
    const { success } = await deleteUser(item.id)
    if(!success) {
      toast.error('Failed to delete user')
    }
    toast.success('User deleted successfully')
    setIsOpen(false)
  }

  const handleEdit = async (id: string, email: string, password: string) => {
    const { success } = await editUser(id, email, password)
    if(!success) {
      toast.error('Failed to edit user')
    }
    toast.success('User edited successfully')
    setIsEditOpen(false)
  }
  return (
    <div key={item.id} className='flex items-center justify-between gap-4 p-4 bg-neutral-800/40 rounded-lg'>
      <div className='flex justify-between gap-6 w-full items-center'>
        <div>
          <h2 className='text-lg font-semibold'> Email: {item.email}</h2>
          <p className='text-sm text-neutral-400'> Password: {item.password}</p>
        </div>
        <div className='flex gap-2'>
          <div className='px-2 py-4'>
            <PencilLine className='hover:text-emerald-600 cursor-pointer' onClick={() => setIsEditOpen(true)} />
          </div>
          <div className='py-4 px-2' onClick={() => setIsOpen(true)}>
            <Trash2 className='hover:text-rose-600 cursor-pointer' />
          </div>
        </div>
      </div>
      <EditModal id={item.id} email={item.email} password={item.password} isOpen={isEditOpen} setIsOpen={setIsEditOpen} onEdit={handleEdit}  />
      <DeleteModal id={item.id} isOpen={isOpen} setIsOpen={setIsOpen} title={item.email} text={item.password} onDelete={handleDelete}/>
    </div>
  )
}

export default UserCard