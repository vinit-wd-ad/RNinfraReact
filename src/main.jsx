import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router'; 
import App from './App'; 
import './assets/style/global.css';
import './index.css';
import Home from './pages/Home/Home';
import Dholera from './pages/Dholera/Dholera';

// Define routing structure
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "dholera",
        element: <Dholera />
      }
    ]
  },
]);

// Target the root HTML element
const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <RouterProvider router={router} />
);