import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure ReactDOM is imported
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
import './App.css';




// Create your router with at least one route
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'github',
        element: <Github />
      }
    ]
  }
]);

// Render the app using the created router
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
