import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
// import App from './App.tsx'
import browserRouter from './router/router.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={browserRouter}>
    </RouterProvider>
  </StrictMode>,
)
