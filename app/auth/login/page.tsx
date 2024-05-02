import { LoginForm } from '@/components/auth/login-form'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='grid place-content-center h-[calc(100vh-80px)]'>
      <LoginForm />
    </div>
  )
}

export default LoginPage