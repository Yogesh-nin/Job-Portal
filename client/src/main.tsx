import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createTheme, MantineProvider } from '@mantine/core';
import Home from './pages/Home.tsx';
import FindJobs from './pages/FindJobs.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/find-jobs",
    element: <FindJobs />,
  },
]);

const theme = createTheme({
  colors: {
    'brightSun': [ "#fffbeb", "#fff3c6", "#ffe588", "#ffd149", "#ffbd20", "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d", "#461902",
    ],
    'mineShaft': ["#f6f6f6","#e7e7e7","#d1d1d1","#b0b0b0","#888888","#6d6d6d","#5d5d5d","#4f4f4f","#454545","#3d3d3d","#2d2d2d",
    ]
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
