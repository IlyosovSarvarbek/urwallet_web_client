import Header from '@/components/Header'
import { AuthProvider } from '@/context/AuthContext'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <>
       <AuthProvider>
          <Header/>
          {children}
       </AuthProvider>
    </>
  )
}

export default HomeLayout