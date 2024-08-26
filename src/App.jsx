import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'
import Layout from './Components/Layout'
import LoginPage from './Components/Login'

function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'add',
          element: <Add />
        },
      ]
    }, {
      path: '/login',
      element: <LoginPage />
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
