import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx';
import EditPage from './components/EditPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/editPage/:memberid",
    element: <EditPage />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
