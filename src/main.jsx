import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './index.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className='topAdjust'>
      <RouterProvider router={router} />
    </div>
    <div className="topAdjust">
      <Footer />
    </div>
  </React.StrictMode>,
)
