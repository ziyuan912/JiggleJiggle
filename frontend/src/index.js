import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';

import './index.css';

import HomeView from './Views/HomeView/HomeView';
import UploadView from './Views/UploadView/UploadView';
import DanceView from './Views/DanceView/DanceView';
import AppTheme from './utils/Themes/DefaultAppTheme.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/upload",
    element: <UploadView />
  },
  {
    path: "/dance",
    element: <DanceView />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={AppTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);