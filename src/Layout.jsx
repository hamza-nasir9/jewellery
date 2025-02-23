import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import Sidecart from './component/Sidecart'

function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Sidecart/>
        <Footer/>
    </>
  )
}

export default Layout