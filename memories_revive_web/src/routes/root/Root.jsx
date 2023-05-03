import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { AuthProvider } from '../../contexts/AuthContext'
import Login from '../../components/log/login/Login'
import { CustomisationProvider } from '../../contexts/CustomisationContext'
import Footer from '../../components/footer/Footer'
import { store } from '../../store'
import { Provider } from 'react-redux'
import { PopupProvider } from '../../contexts/PopupContext'
import NavbarEmpty from '../../components/navbar/nav_empty/NavbarEmpty'

const Root = () => {
  return (
    <div className='main'>
      <Provider store={store}>
        <AuthProvider>
          <PopupProvider>
            <Navbar/>
            <NavbarEmpty/>
            <Login/>
            <CustomisationProvider>
              <Outlet />
            </CustomisationProvider>
            <Footer/>
          </PopupProvider>
        </AuthProvider>
      </Provider>
    </div>
  )
}

export default Root