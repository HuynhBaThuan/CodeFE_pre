import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebara from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Product from './page/Product/Product';
import Listorder from './page/Listorder/Listorder';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Category from './page/Category/Category';
import Login from './login';
import Info from './page/Info/Info';
import axios from 'axios';
import Formadd from './page/Product/Formadd';
import Formedit from './page/Product/Formedit';
import Detailorder from './page/Feedback/Detailorder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Statistics from './page/Statistics/Statistics';

import './Store.css'

const Store = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [Catname, setCatname] = useState([]);
  const token = localStorage.getItem('autoken');



  const fetchData = async () => {
    try {
      const response = await axios.post('https://falth-api.vercel.app/api/auth/login/', {
        email: 'owner1@gmail.com',
        password: 'leduchuy123',
      });
      const token = response.data.token;
      const _id = response.data.data.user._id;
      localStorage.setItem('autoken', token);
      localStorage.setItem('_id', _id);
      console.log(token);
      console.log(response.data.data.user._id);
      console.log('Đăng nhập thành công');
    } catch (error) {
      console.log('Lỗi đăng nhập:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebara isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Statistics Catname={Catname} />} />
              <Route path="/Formadd" element={<Formadd Catname={Catname} />} />
              <Route path="/Formedit" element={<Formedit Catname={Catname} />} />
              <Route path="/product" element={<Product Catname={Catname} />} />
              <Route path='/listorder' element={<Listorder />} />
              <Route path='/info' element={<Info />} />
              <Route path='/category' element={<Category listCat={Catname} />} />
              <Route path="/detailorder" element={<Detailorder Catname={Catname} />} />
            </Routes>
            <ToastContainer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
};

export default Store;
