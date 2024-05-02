import UserLayout from '@/components/dashboardUI/user-layout'
import React from 'react'
import getAllUsers from '../../_actions/userSection/getAllUsers'
import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'

const User = async () => {
  const users = await getAllUsers()
  const session = await auth();

  if(!session) {
    redirect('/')
  }
  return (
    <div>
      <UserLayout userData={users} />
    </div>
  )
}

export default User