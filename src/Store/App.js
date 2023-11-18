import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Sidebara from "./components/Sidebar/Sidebar";
import Dashboard from "./page/Dashboard/Dashboard";
import Topbar from './components/Topbar/Topbar';
import Product from './page/Product/Product';
import Listorder from './page/Listorder/Listorder';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState, useRef, useEffect } from 'react';
import Category from './page/Category/Category';
import Login from './login';
import Info from './page/Info/Info';
import axios from 'axios';
import Feedback from "./page/Feedback/Feedback";
import Statistics from "./page/Statistics/Statistics";



const App = () => {
  const queryClient = new QueryClient()
  const [theme, colorMode] = useMode();
  const [Catname, setCatname] = useState([]);
  const token = localStorage.getItem('autoken');
  const [isSidebar, setIsSidebar] = useState(true);
  const _id = localStorage.getItem('_id');

  const fetchCatname = async () => {
    try {
      const response = await axios.get(`https://falth.vercel.app/api/category`
        , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const responseData = response.data;
      console.log(responseData);
      setCatname(responseData);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatname();
  }, []);



  const Layout = () => {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app" style={{ display: 'flex', height: '100%' }}>
            <Sidebara isSidebar={isSidebar} Catname={Catname} />
            <main className="content" style={{ width: '100%', borderLeft: '1px soild white' }}>
              <Topbar />
              <Outlet />
            </main>

          </div>
        </ThemeProvider>
      </ColorModeContext.Provider >
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard Catname={Catname} />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/Statistics',
          element: <Statistics />
        },
        {
          path: '/product',
          element: <Product Catname={Catname} />
        },
        {
          path: '/listorder',
          element: <Listorder />
        },
        {
          path: '/info',
          element: <Info />
        },
        {
          path: '/category',
          element: <Category listCat={Catname} />
        },
        {
          path: '/Feedback',
          element: <Feedback />
        },
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

