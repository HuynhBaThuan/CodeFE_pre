import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebara from './components/Sidebar/Sidebar';
import Dashboard from './page/Dashboard/Dashboard';
import Topbar from './components/Topbar/Topbar';
import Product from './page/Product/Product';
import Listorder from './page/Listorder/Listorder';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Category from './page/Category/Category';
import Login from './login';
import Info from './page/Info/Info';
import axios from 'axios';
import Feedback from './page/Feedback/Feedback';
import Statistics from './page/Statistics/Statistics';

const App = () => {
  const queryClient = new QueryClient();
  const [theme, colorMode] = useMode();
  const [Catname, setCatname] = useState([]);
  const token = localStorage.getItem('autoken');

  const fetchCatname = async () => {
    try {
      const response = await axios.get(
        'https://falth.vercel.app/api/category',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
            <Sidebara isSidebar={true} Catname={Catname} />
            <main
              className="content"
              style={{ width: '100%', borderLeft: '1px solid white' }}
            >
              <Topbar />
              <Outlet />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Feedback Catname={Catname} />,
        },
        {
          path: 'store/login',
          element: <Login />,
        },
        // {
        //   path: 'store/Statistics',
        //   element: <Statistics />,
        // },
        {
          path: 'store/product',
          element: <Product Catname={Catname} />,
        },
        {
          path: 'store/listorder',
          element: <Listorder />,
        },
        {
          path: 'store/info',
          element: <Info />,
        },
        {
          path: 'store/category',
          element: <Category listCat={Catname} />,
        },
        // {
        //   path: 'store/Feedback',
        //   element: <Feedback />,
        // },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RouterProvider>
  );
};

export default App;
