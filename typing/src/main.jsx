import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Start from './Start.jsx'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Layout from "./Layout.jsx";
import Home from './Home.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <Start/>
      },
      {
        path:"start",
        element:<Home/>
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
