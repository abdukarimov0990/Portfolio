import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-second'>
      <Header />
      <main className='grow  mt-20 lg:mt-22'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
