import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";
import { Button } from "@mui/material";
import axios from 'axios';
import Add from './Ad';
import Update from './Update';
import Delete from './Delete';
import Notify from '../../../Components/Notify/Notify';
import style from './Product.module.css'
import Header2 from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';



const Product = ({ Catname }) => {


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openNotify, setOpenNotify] = useState(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")


    const history = useNavigate();
    const redirectToProductPage = () => {
        history('/store/Formadd');
    };
    const redirectToEditProductPage = (id) => {
        history('/store/Formedit', { state: id });
    };
    const formRef = useRef();

    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const api = `https://falth-api.vercel.app/api/product/owner/${_id}?limit=100`;
    const fetchData = async () => {
        try {
            const response = await axios.get(api, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = response.data.data;
            console.log(responseData);
            setData(responseData);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };
    const Searchproduct = async (name) => {
        console.log(name);
        try {
            const response = await axios.get(`https://falth-api.vercel.app/api/product/owner/${_id}?search=${name}`
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const responseData = response.data.data;
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

    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpenDelete(true);
        setOpenAdd(false);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Tên",
            type: "number",
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "price",
            headerName: "Giá tiền",
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "isOutofOrder",
            headerName: "Trạng thái",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: (params) => {
                let color;
                switch (params.row.isOutofOrder) {
                    case true:
                        color = "#4caf4fb9";
                        break;
                    case false:
                        color = "#FF5722";
                        break;
                    default:
                        color = "#4caf4fb9";
                }

                return (
                    <Box
                        display="flex"
                        justifyContent="center"
                    >
                        <div style={{ height: "10px", width: "10px", background: color, borderRadius: "30px", }}>
                        </div >
                    </Box>
                );
            },
        },
        {
            field: "Detsil",
            headerName: "Chỉnh sửa",
            headerAlign: "center",
            align: "center",
            flex: 1,
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
                        onClick={() => redirectToEditProductPage(params.row._id)}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Chỉnh sửa
                        </Typography>
                    </Box>
                );
            },
        },
        {
            headerName: "Xóa",
            flex: 1,
            headerAlign: "center",
            align: "center",
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
                        onClick={() => handleDeleteClick(params.row)}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Xóa
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header2 title="Danh sách đơn hàng" />

                <Box>
                    <div className={style.searchBar}>
                        <input
                            type="text"
                            className={style.searchInput}
                            placeholder="Tìm kiếm đơn hàng..."
                            onChange={(e) => Searchproduct(e.target.value)}
                        />
                    </div>


                </Box>
                <Box>
                </Box>
                <Box>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => { redirectToProductPage() }}
                    >
                        Thêm sản phẩm
                    </Button>
                </Box>
            </Box>
            <Box
                m="10px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-columnHeaderTitle": {
                        borderBottom: "none",
                        fontSize: "14px"
                        ,
                        fontWeight: "bold",
                    },
                }}
            >
                {openEdit && (

                    <div ref={formRef} className="form-container"
                        style={{ position: "absolute", zIndex: 1000, width: "40%", top: '-5%', right: '30%', background: colors.primary[400], border: colors.primary[900] }}>
                        <Box m="20px" >
                            <Update show={true} showClode={setOpenEdit} data={Catname} selectedRow={selectedRow} fetchData={fetchData} setError={setError} setMessage={setMessage} setOpenEdit={setOpenEdit} setOpenNotify={setOpenNotify} />
                        </Box>
                    </div>
                )
                }
                {
                    openAdd && (
                        <Add data={Catname} show={true} handleClose={setOpenAdd} fetchData={fetchData} setError={setError} setMessage={setMessage} setOpenNotify={setOpenNotify} />
                    )
                }

                {
                    openDelete && (
                        <div ref={formRef} className="form-container"
                            style={{ position: "absolute", zIndex: 1000, width: "40%", top: '5%', right: '30%', background: colors.primary[400], border: colors.primary[900] }}>
                            <Box m="20px" >
                                <Delete selectedRow={selectedRow} setOpenDelete={setOpenDelete} fetchData={fetchData} setError={setError} setMessage={setMessage} setOpenNotify={setOpenNotify} />
                            </Box>
                        </div>
                    )
                }
                {
                    openNotify && (
                        <div ref={formRef} className="form-container"
                            style={{ position: "absolute", zIndex: 1000, width: "40%", top: '5%', right: '30%', background: colors.primary[400], border: colors.primary[900] }}>
                            <Box m="20px" >
                                <Notify error={error} message={message} setOpenNotify={setOpenNotify} />
                            </Box>
                        </div>

                    )
                }

                <DataGrid rows={rowsWithUniqueIds} columns={columns} loading={isLoading}
                    initialState={{
                        pagination: {
                            pageSize: 8,
                        },
                    }} />
            </Box >
        </Box >
    );
};

export default Product;
