import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header/Header";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";
import Bill from './Bill';
import useMediaQuery from "@mui/material/useMediaQuery"; import style from './Custumer.module.css'
import axios from 'axios'
import {
    useQuery,
} from 'react-query'

const Product = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
    const [Data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const api = `https://falth.vercel.app/api/product/store/${_id}`
    useEffect(() => {
        const GetListOrder = async () => {
            try {
                const response = await axios.get(`https://falth.vercel.app/api/product/store/${_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data)
            } catch (error) {
                console.log(error);
            }
            finally {
                setTimeout(() => {
                    setisLoading(false)
                }, 3000);

            }
        };

        GetListOrder();
    }, []);

    const [open, setOpen] = useState(false);
    const formRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
    };

    const handleAccessLevelClick = () => {
        setOpen(true);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "idorder",
            headerName: "ID đơn hàng",
            flex: 1,

        },
        {
            field: "price",
            headerName: "Giá tiền",

        },

        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            renderCell: () => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[600]}
                        borderRadius="4px"
                        onClick={handleAccessLevelClick}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Xem chi tiết
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "status",
            headerName: "Trạng thái",

        },
    ];

    return (

        <Box m="20px" position='relative'>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}
            >
                {open && (
                    <div className="form-container" >
                        <div className={style.add} ref={formRef} style={{ zIndex: 1, top: 0, right: 0, background: colors.primary[400], width: '30%' }}>
                            <Bill />
                        </div>
                    </div>
                )}
                <div className={style.dsdh} >
                    <div className={style.dshd1} style={{ background: colors.primary[400], }} >
                        <div className={style.titledsdh}>Danh sách đơn hàng</div>
                        <div className={style.searchBar}>
                            <input
                                type="text"
                                className={style.searchInput}
                                placeholder="Tìm kiếm đơn hàng..."
                            />
                        </div>
                        <div className={style.searchBar}>
                            <span>Từ:</span>
                            <input
                                type="date"
                                className={style.searchInput}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}

                            />
                        </div>
                        <div className={style.searchBar}>
                            <span>Đến:</span>
                            <input
                                type="date"
                                className={style.searchInput}
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <DataGrid rows={mockDataTeam} columns={columns} isLoading={isLoading} />
                </div>
            </Box>
        </Box>
    );
};

export default Product;
