import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/works' element={<Works/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Route>
    )
  )
  return (
   <RouterProvider router={routes}/>
  )
}

export default App
