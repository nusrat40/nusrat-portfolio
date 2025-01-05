import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProjectDetail from './components/ProjectDetail.jsx';
import Home from './sections/Home.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>
  },
  {
    path:'/project-details/:id',
    element:<ProjectDetail></ProjectDetail>,
    loader:()=>fetch("/projects.json")
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    
    </RouterProvider>
   
  </StrictMode>,
)
