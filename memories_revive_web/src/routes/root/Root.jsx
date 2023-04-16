import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { AuthProvider } from '../../contexts/AuthContext'
import Login from '../../components/log/login/Login'

const Root = () => {
  return (
    <div className='main'>
        <AuthProvider>
          <Navbar/>
          <Login/>
          <Outlet />
        </AuthProvider>
    </div>
  )
}

export default Root