import React from 'react'
// import Routers 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
// import pages 
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Route>
    )
  )
  return (
   <RouterProvider router={routes}/>
  )
}

export default App
