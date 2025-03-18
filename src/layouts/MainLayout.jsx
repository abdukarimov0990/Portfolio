import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname == "*"; // 404 sahifangizga moslang
  console.log(location.pathname);
  

  return (
    <div className='flex flex-col min-h-screen bg-second'>
      {!hideHeaderFooter && <Header />}
      <main className='grow'>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  )
}

export default MainLayout
