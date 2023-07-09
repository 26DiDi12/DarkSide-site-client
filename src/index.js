import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import CreateNews from './CreateNews';
import AllNews from './AllNews';
import EditNews from './EditNews';
import News from './News';
import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';

const MainApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news",
    element: <News />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/news/allnews",
        element: <AllNews />,
      },
      {
        path: "/news/createnews",
        element: <CreateNews />,
      },
      {
        path: "/news/editnews/:id",
        element: <EditNews />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={MainApp} />
  </React.StrictMode>
);

reportWebVitals();
