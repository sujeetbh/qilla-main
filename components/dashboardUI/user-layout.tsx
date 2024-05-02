"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import UserModal from './components/UserModal'
import { Toaster } from 'react-hot-toast'
import UserCard from './components/UserCard'

type UserLayoutProps = {
  userData: any
}

const UserLayout = ({ userData } : UserLayoutProps ) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='md:min-w-[calc(100vw-220px)] lg:min-w-[calc(100vw-280px)] max-h-[calc(100vh-72px)] border-t border-neutral-700/60 p-8 flex flex-col gap-4 overflow-y-scroll'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-2xl font-semibold tracking-wide'>Users List</h1>
        <Button className='flex gap-2' onClick={() => setIsOpen(true)}>
          <Plus />
          Add New User
        </Button>
        
      </div>
      <div className='grid grid-cols-2 gap-12'>
        {userData.map((item: any, index: number) => (
          <UserCard item={item} key={index} />
        ))}
      </div>
      <UserModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Toaster
        position='top-right'
        reverseOrder={false}
      />
    </div>
  )
}

export default UserLayout