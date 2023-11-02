
import Playground from './components/Sidebar/Sidebar'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import './App.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Topbar from './components/Topbar/Topbar';
import ViewAllStore from './Page/ViewAllStore/ViewAllStore';
import Acceptstore from './Page/Acceptstore/Acceptstore';

const App = () => {
    const [theme, colorMode] = useMode();
    const [Catname, setCatname] = useState([]);
    const token = localStorage.getItem('autoken');
    const [isSidebar, setIsSidebar] = useState(true);
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
                        <Playground isSidebar={isSidebar}/>
                        <main className="content" style={{ width: '100%', borderLeft: '1px soild white' }} >
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
                    element: <Acceptstore />
                },
                {
                    path: '/Viewallstore',
                    element: <ViewAllStore />
                }
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

