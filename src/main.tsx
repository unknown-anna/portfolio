import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router';

import '@/scss/global/Global.module.scss'
import '@/scss/global/Reset.module.scss'
import App from '@/pages/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
