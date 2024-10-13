import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Route/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShippingAddressProvider from './Provider/ShippingAddressProvider';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider> */}

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ShippingAddressProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </ShippingAddressProvider>
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>
)
