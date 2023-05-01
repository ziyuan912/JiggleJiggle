import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import HomeView from './HomeView/HomeView';
import DanceView from './DanceView/DanceView';
import UploadView from './UploadView/UploadView';
import CultureView from './CultureView/CultureView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/dance",
    element: <DanceView />
  },
  {
    path: "/upload",
    element: <UploadView />
  },
  {
    path: "/culture",
    element: <CultureView />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);