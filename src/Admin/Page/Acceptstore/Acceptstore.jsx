import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { Button } from "@mui/material";
import axios from 'axios';
import style from './Custumer.module.css'
import Bill from './Bill';

const Acceptstore = ({ Catname }) => {


    const [data, setData] = useState([]);
    const [selectActive, setSelectActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const formRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target) && !selectActive) {
                setOpenDetail(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectActive]);

    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const api = `https://falth.vercel.app/api/product/store/${_id}?limit=100`;
    const fetchData = async () => {
        try {
            const response = await axios.get(api, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = response.data.data.data;
            setData(responseData);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };
    const Searchproduct = async (name) => {
        console.log(name);
        try {
            const response = await axios.get(`https://falth.vercel.app/api/product/search?search=${name}`
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const responseData = response.data.data.data;
            console.log(responseData);
            setData(responseData);

        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDetailClick = (row) => {
        setSelectedRow(row);
        setOpenDetail(true);
    };


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Tên",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Địa chỉ",
            flex: 1,
        },
        {
            field: "Detsil",
            flex: 1,
            headerName: "Xem Chi Tiết",
            renderCell: (params) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[600]}
                        borderRadius="4px"
                        onClick={() => handleDetailClick(params.row)}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Xem chi tiết
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    const rowsWithUniqueIds = data.map((item, index) => {
        const uniqueId = index;
        return { ...item, id: uniqueId };
    });


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
                {openDetail && (
                    <div className="form-container" >
                        <div className={style.add} ref={formRef} style={{ zIndex: 1, top: 0, right: 0, background: colors.primary[400], width: '30%' }}>
                            <Bill />
                        </div>
                    </div>
                )}
                <div className={style.dsdh} >
                    <div className={style.dshd1} style={{ background: colors.primary[400], }} >
                        <div className={style.titledsdh}>Danh sách của hàng chờ xác nhận</div>
                        <div className={style.searchBar}>
                            <input
                                type="text"
                                className={style.searchInput}
                                placeholder="Tìm kiếm cửa hàng..."
                                onChange={(e) => Searchproduct(e.target.value)}
                            />
                        </div>
                    </div>

                </div>
                <DataGrid rows={rowsWithUniqueIds} columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }} />


            </Box >
        </Box >
    );
};

export default Acceptstore;
