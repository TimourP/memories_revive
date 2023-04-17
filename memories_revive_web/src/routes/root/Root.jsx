import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { AuthProvider } from '../../contexts/AuthContext'
import Login from '../../components/log/login/Login'
import { CustomisationProvider } from '../../contexts/CustomisationContext'
import Footer from '../../components/footer/Footer'

const Root = () => {
  return (
    <div className='main'>
        <AuthProvider>
          <Navbar/>
          <Login/>
          <CustomisationProvider>
            <Outlet />
          </CustomisationProvider>
          <Footer/>
        </AuthProvider>
    </div>
  )
}

export default Root