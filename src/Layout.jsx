import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <div className=' font-body bg-zinc-900 text-gray-200 p-3'>
        <Header />
        <Outlet />       
        <Footer />
    </div>
  )
}

export default Layout