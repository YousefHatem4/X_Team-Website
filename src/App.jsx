import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import NotFound from './Pages/NotFound/NotFound'
import MainLayout from './Layout/MainLayout'
import Work from './Pages/Work/Work'
import Services from './Pages/Services/Services'
import Team from './Pages/Team/Team'
import Contact from './Pages/Contact/Contact'

const routers = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: 'services', element: <Services /> },
      { path: 'team', element: <Team /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])


function App() {
  return (
    <>
  
          <RouterProvider router={routers}></RouterProvider>
      
    </>
  )
}

export default App