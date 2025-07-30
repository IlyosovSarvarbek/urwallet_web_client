import { AuthProvider } from '@/context/AuthContext'
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}

export default AuthLayout